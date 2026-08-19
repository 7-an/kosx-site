import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// 生成可直接双击打开的单文件预览版：
// 1. assets/ 图片内嵌为 base64
// 2. 粒子模块经 esbuild 转成 IIFE 内联（file:// 下 ES Module 会被浏览器拦截）
// 用法：node scripts/export-single-file.mjs [输出路径]

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outPath =
  process.argv[2] ||
  `/Users/ansyn/Desktop/KOSX官网预览-${new Date().toISOString().slice(0, 10)}.html`;

const esbuildCandidates = [
  '/Users/ansyn/Documents/Codex/vegas-liu-site/node_modules/.bin/esbuild',
  '/Users/ansyn/Documents/Codex/first-node-project/node_modules/.bin/esbuild',
];
const esbuild = esbuildCandidates.find((p) => existsSync(p));
if (!esbuild) {
  console.error('未找到 esbuild（需要 vegas-liu-site 或 first-node-project 的 node_modules）');
  process.exit(1);
}

let html = readFileSync(resolve(projectRoot, 'index.html'), 'utf8');

// 1. 内嵌图片
const refs = [...new Set([...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map((m) => m[1]))];
for (const ref of refs) {
  const b64 = readFileSync(resolve(projectRoot, ref)).toString('base64');
  html = html.split(`"${ref}"`).join(`"data:image/png;base64,${b64}"`);
}

// 2. 粒子模块转 IIFE 内联
const iife = execFileSync(esbuild, [
  resolve(projectRoot, 'assets/vendor/intro-particles.js'),
  '--bundle',
  '--format=iife',
  '--minify',
  '--global-name=KOSXIntroParticles',
]);
const anchor = '<script>\n    const introRoot = document.documentElement;';
if (!html.includes(anchor)) {
  console.error('未找到开屏脚本锚点，导出中止');
  process.exit(1);
}
// 用函数式替换，避免压缩代码中的 `$&` 被当作「匹配文本」展开
html = html.replace(anchor, () => `<script>\n${iife}</script>\n  ${anchor}`);

if (/src="assets\/|href="assets\//.test(html)) {
  console.error('还有未内嵌的资源引用');
  process.exit(1);
}

writeFileSync(outPath, html);
console.log(`已导出 ${outPath}（${(readFileSync(outPath).length / 1024).toFixed(0)} KB，内嵌 ${refs.length} 个图片 + 粒子模块）`);
