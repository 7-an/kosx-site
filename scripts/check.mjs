import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = resolve(projectRoot, 'index.html');
const failures = [];

if (!existsSync(indexPath)) {
  console.error('check failed: 缺少 index.html');
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');

// 1. 内联 <script> 语法检查
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
scripts.forEach((code, index) => {
  try {
    new vm.Script(code);
  } catch (error) {
    failures.push(`第 ${index + 1} 个 <script> 语法错误：${error.message}`);
  }
});

// 2. 本地资源引用必须存在
const refs = [...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map((m) => m[1]);
for (const ref of new Set(refs)) {
  if (!existsSync(resolve(projectRoot, ref))) failures.push(`资源缺失：${ref}`);
}

// 3. data-route 与 data-view 必须一一对应
const routes = [...html.matchAll(/data-route="([^"]+)"/g)].map((m) => m[1]);
const views = [...html.matchAll(/data-view="([^"]+)"/g)].map((m) => m[1]);
for (const route of new Set(routes)) {
  if (!views.includes(route)) failures.push(`导航 ${route} 没有对应的 data-view`);
}
for (const view of new Set(views)) {
  if (!routes.includes(view)) failures.push(`页面 ${view} 没有对应导航入口`);
}

// 4. 基础 SEO 标签
if (!/<title>[^<]+<\/title>/.test(html)) failures.push('缺少 <title>');
if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push('缺少 meta description');

if (failures.length) {
  console.error(`check failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`check passed: ${scripts.length} 个脚本、${new Set(refs).size} 个资源、${new Set(views).size} 个页面视图`);
