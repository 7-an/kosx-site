import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const runtimeRoot = resolve(projectRoot, '.collab');
const claimsRoot = resolve(runtimeRoot, 'claims');
const lockRoot = resolve(runtimeRoot, '.lock');
const eventsFile = resolve(runtimeRoot, 'events.jsonl');
const handoffFile = resolve(projectRoot, 'docs/CHANGE_HANDOFF.md');
const leaseMinutes = 90;

function parseArgs(values) {
  const parsed = { _: [] };
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith('--')) {
      parsed._.push(value);
      continue;
    }
    const key = value.slice(2);
    const next = values[index + 1];
    if (!next || next.startsWith('--')) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }
  return parsed;
}

function ensureRuntime() {
  mkdirSync(claimsRoot, { recursive: true });
  if (!existsSync(eventsFile)) writeFileSync(eventsFile, '');
}

function wait(milliseconds) {
  const buffer = new SharedArrayBuffer(4);
  Atomics.wait(new Int32Array(buffer), 0, 0, milliseconds);
}

function withLock(callback) {
  ensureRuntime();
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      mkdirSync(lockRoot);
      break;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      const age = Date.now() - statSync(lockRoot).mtimeMs;
      if (age > 30_000) rmSync(lockRoot, { recursive: true, force: true });
      else wait(100);
    }
  }
  if (!existsSync(lockRoot)) throw new Error('无法取得协作锁，请稍后重试。');
  try {
    return callback();
  } finally {
    rmSync(lockRoot, { recursive: true, force: true });
  }
}

function nowIso() {
  return new Date().toISOString();
}

function expiresIso() {
  return new Date(Date.now() + leaseMinutes * 60_000).toISOString();
}

function validateActor(actor) {
  if (!actor || !/^[a-z0-9][a-z0-9_-]{1,31}$/.test(actor)) {
    throw new Error('请提供 --actor，格式示例：codex 或 kimi-k3。');
  }
  return actor;
}

function normalizePath(value) {
  const normalized = value.trim().replace(/^\.\//, '').replace(/\/$/, '');
  if (!normalized) return null;
  if (normalized === '*') return normalized;
  if (normalized.startsWith('/') || normalized.split('/').includes('..')) {
    throw new Error(`认领路径必须位于项目内：${value}`);
  }
  return normalized;
}

function parsePaths(value) {
  if (!value || value === true) throw new Error('请提供 --paths "文件,目录"。');
  const paths = String(value)
    .split(',')
    .map(normalizePath)
    .filter(Boolean);
  if (paths.length === 0) throw new Error('至少认领一个文件或目录。');
  return [...new Set(paths)];
}

function overlaps(left, right) {
  if (left === '*' || right === '*') return true;
  return left === right || left.startsWith(`${right}/`) || right.startsWith(`${left}/`);
}

function atomicJson(path, data) {
  const temporary = `${path}.${process.pid}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(data, null, 2)}\n`);
  renameSync(temporary, path);
}

function git(args, fallback = '') {
  try {
    return execFileSync('git', args, {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return fallback;
  }
}

function claimFiles() {
  ensureRuntime();
  return readdirSync(claimsRoot)
    .filter((name) => name.endsWith('.json'))
    .map((name) => {
      const path = resolve(claimsRoot, name);
      try {
        return { path, claim: JSON.parse(readFileSync(path, 'utf8')) };
      } catch {
        return { path, claim: { actor: name, invalid: true, expiresAt: '1970-01-01' } };
      }
    });
}

function claimState(item) {
  if (item.claim.invalid) return 'invalid';
  return Date.parse(item.claim.expiresAt) > Date.now() ? 'active' : 'stale';
}

function appendEvent(event) {
  appendFileSync(eventsFile, `${JSON.stringify({ at: nowIso(), ...event })}\n`);
}

function actorClaim(actor) {
  return claimFiles().find((item) => item.claim.actor === actor);
}

function status(brief = false) {
  ensureRuntime();
  const head = git(['rev-parse', '--short', 'HEAD'], 'NO-GIT-BASELINE');
  const worktree = git(['status', '--short'], 'not a git repository');
  const claims = claimFiles();
  console.log(`KOSX collaboration | HEAD ${head}`);
  console.log(`真源: SOURCE_OF_TRUTH.md → docs/DECISIONS.md → docs/V1_SPEC.md → index.html + assets/`);
  if (!brief) {
    console.log('\n工作区:');
    console.log(worktree || 'clean');
  }
  console.log('\n认领:');
  if (claims.length === 0) console.log('none');
  for (const item of claims) {
    console.log(
      `- ${item.claim.actor} [${claimState(item)}] ${item.claim.task ?? 'unknown task'} :: ${(item.claim.paths ?? []).join(', ')} :: expires ${item.claim.expiresAt}`,
    );
  }
  if (!brief && existsSync(handoffFile)) {
    const headings = readFileSync(handoffFile, 'utf8')
      .split('\n')
      .filter((line) => line.startsWith('## '))
      .slice(-5);
    console.log('\n最近交接:');
    console.log(headings.length ? headings.join('\n') : 'none');
  }
}

function claim(args) {
  const actor = validateActor(args.actor);
  const task = String(args.task || '').trim();
  if (!task) throw new Error('请提供 --task "任务名"。');
  const paths = parsePaths(args.paths);
  withLock(() => {
    const existing = actorClaim(actor);
    if (existing && claimState(existing) === 'active') {
      throw new Error(`${actor} 已有有效认领；先 done 或 release。`);
    }
    if (existing) rmSync(existing.path, { force: true });
    const conflicts = claimFiles().filter(
      (item) =>
        claimState(item) === 'active' &&
        item.claim.actor !== actor &&
        paths.some((path) => item.claim.paths.some((other) => overlaps(path, other))),
    );
    if (conflicts.length) {
      const detail = conflicts
        .map((item) => `${item.claim.actor}: ${item.claim.paths.join(', ')}`)
        .join('; ');
      throw new Error(`认领范围冲突：${detail}`);
    }
    const startedAt = nowIso();
    const data = {
      schemaVersion: 1,
      actor,
      task,
      paths,
      startedAt,
      heartbeatAt: startedAt,
      expiresAt: expiresIso(),
      baselineCommit: git(['rev-parse', 'HEAD'], null),
      dirtyAtStart: git(['status', '--short'], ''),
    };
    atomicJson(resolve(claimsRoot, `${actor}.json`), data);
    appendEvent({ type: 'claim', actor, task, paths });
    console.log(`${actor} 已认领：${paths.join(', ')}`);
    if (data.dirtyAtStart) console.log('提示：开工时工作区已有未提交变化，请勿覆盖他人内容。');
  });
}

function heartbeat(args) {
  const actor = validateActor(args.actor);
  withLock(() => {
    const item = actorClaim(actor);
    if (!item || claimState(item) !== 'active') throw new Error(`${actor} 没有有效认领。`);
    item.claim.heartbeatAt = nowIso();
    item.claim.expiresAt = expiresIso();
    atomicJson(item.path, item.claim);
    appendEvent({ type: 'heartbeat', actor });
    console.log(`${actor} 认领已续期 ${leaseMinutes} 分钟。`);
  });
}

function statusPaths() {
  const raw = git(['status', '--porcelain'], '');
  return raw
    .split('\n')
    .filter(Boolean)
    .map((line) => line.slice(3).split(' -> ').at(-1));
}

function inScope(path, paths) {
  return paths.some((scope) => overlaps(path, scope));
}

function done(args) {
  const actor = validateActor(args.actor);
  const summary = String(args.summary || '').trim();
  if (!summary) throw new Error('请提供 --summary "实际完成内容"。');
  const checks = String(args.checks || '未报告').trim();
  withLock(() => {
    const item = actorClaim(actor);
    if (!item) throw new Error(`${actor} 没有认领记录。`);
    const changed = statusPaths().filter((path) => inScope(path, item.claim.paths));
    const timestamp = nowIso();
    const entry = [
      '',
      `## ${timestamp} · ${actor} · ${summary}`,
      '',
      `- 任务：${item.claim.task}`,
      `- 认领范围：${item.claim.paths.map((path) => `\`${path}\``).join('、')}`,
      `- 范围内变化：${changed.length ? changed.map((path) => `\`${path}\``).join('、') : '未检测到；如有生成物请另行说明'}`,
      `- 检查：${checks}`,
      `- 开工基线：${item.claim.baselineCommit ?? '无 Git 基线'}`,
      '',
    ].join('\n');
    appendFileSync(handoffFile, entry);
    rmSync(item.path, { force: true });
    appendEvent({ type: 'done', actor, summary, checks, changed });
    console.log(`已写入 docs/CHANGE_HANDOFF.md，并释放 ${actor} 的认领。`);
  });
}

function release(args) {
  const actor = validateActor(args.actor);
  const reason = String(args.reason || '未说明').trim();
  withLock(() => {
    const item = actorClaim(actor);
    if (!item) throw new Error(`${actor} 没有认领记录。`);
    rmSync(item.path, { force: true });
    appendEvent({ type: 'release', actor, reason, task: item.claim.task });
    console.log(`已释放 ${actor}：${reason}`);
  });
}

function doctor() {
  const required = [
    'AGENTS.md',
    'SYNC_START_HERE.md',
    'SOURCE_OF_TRUTH.md',
    'docs/V1_SPEC.md',
    'docs/DECISIONS.md',
    'docs/CHANGE_HANDOFF.md',
  ];
  const failures = required.filter((path) => !existsSync(resolve(projectRoot, path)));
  if (!git(['rev-parse', '--is-inside-work-tree'], '')) failures.push('Git baseline');
  const active = claimFiles().filter((item) => claimState(item) === 'active');
  for (let left = 0; left < active.length; left += 1) {
    for (let right = left + 1; right < active.length; right += 1) {
      if (
        active[left].claim.paths.some((path) =>
          active[right].claim.paths.some((other) => overlaps(path, other)),
        )
      ) {
        failures.push(`重叠认领 ${active[left].claim.actor}/${active[right].claim.actor}`);
      }
    }
  }
  if (failures.length) {
    console.error(`collab doctor failed: ${failures.join(', ')}`);
    process.exitCode = 1;
    return;
  }
  console.log('collab doctor passed');
}

function help() {
  console.log(`
Usage:
  node scripts/collab.mjs status [--brief]
  node scripts/collab.mjs doctor
  node scripts/collab.mjs claim --actor codex --task "..." --paths "src/data,docs/DECISIONS.md"
  node scripts/collab.mjs heartbeat --actor codex
  node scripts/collab.mjs done --actor codex --summary "..." --checks "npm run check"
  node scripts/collab.mjs release --actor codex --reason "..."
`);
}

const [command = 'status', ...rawArgs] = process.argv.slice(2);
const args = parseArgs(rawArgs);

try {
  if (command === 'status') status(Boolean(args.brief));
  else if (command === 'doctor') doctor();
  else if (command === 'claim') claim(args);
  else if (command === 'heartbeat') heartbeat(args);
  else if (command === 'done') done(args);
  else if (command === 'release') release(args);
  else help();
} catch (error) {
  console.error(`collab error: ${error.message}`);
  process.exitCode = 1;
}
