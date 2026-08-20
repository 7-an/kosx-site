import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

const pages = [
  { route: 'home', file: 'index.html', canonical: 'https://kosx.ai/' },
  { route: 'members', file: 'members/index.html', canonical: 'https://kosx.ai/members' },
  { route: 'activities', file: 'activities/index.html', canonical: 'https://kosx.ai/activities' },
  { route: 'partners', file: 'partners/index.html', canonical: 'https://kosx.ai/partners' },
  { route: 'cash-cow-club', file: 'cash-cow-club/index.html', canonical: 'https://kosx.ai/cash-cow-club' },
  { route: 'kosx-lab', file: 'kosx-lab/index.html', canonical: 'https://kosx.ai/kosx-lab' },
  { route: 'contact-us', file: 'contact-us/index.html', canonical: 'https://kosx.ai/contact-us' },
];

const titles = new Set();

for (const page of pages) {
  const filePath = resolve(projectRoot, page.file);
  if (!existsSync(filePath)) {
    failures.push(`${page.route} 缺少静态文件：${page.file}`);
    continue;
  }

  const html = readFileSync(filePath, 'utf8');
  const visibleHtml = html.replace(/<template id="route-templates">[\s\S]*?<\/template>/, '');

  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  scripts.forEach((code, index) => {
    try {
      new vm.Script(code);
    } catch (error) {
      failures.push(`${page.file} 第 ${index + 1} 个脚本语法错误：${error.message}`);
    }
  });

  const refs = [...html.matchAll(/(?:src|href)="((?:\.\.\/)?assets\/[^"]+)"/g)].map((match) => match[1]);
  for (const ref of new Set(refs)) {
    if (!existsSync(resolve(dirname(filePath), ref))) failures.push(`${page.file} 资源缺失：${ref}`);
  }

  const views = [...visibleHtml.matchAll(/data-view="([^"]+)"/g)].map((match) => match[1]);
  if (views.length !== 1 || views[0] !== page.route) {
    failures.push(`${page.file} 应只包含 ${page.route} 主视图，实际为：${views.join(', ') || '无'}`);
  }
  if (!new RegExp(`<section class="view is-active"[^>]*data-view="${page.route}"`).test(visibleHtml)) {
    failures.push(`${page.file} 的 ${page.route} 主视图未激活`);
  }
  const h1Count = (visibleHtml.match(/<h1\b/g) || []).length;
  if (h1Count !== 1) failures.push(`${page.file} 应有且仅有一个 H1，实际 ${h1Count} 个`);

  const routedElements = [...visibleHtml.matchAll(/<([a-z][\w-]*)\b[^>]*data-route="([^"]+)"[^>]*>/gi)];
  for (const match of routedElements) {
    if (match[1].toLowerCase() !== 'a') failures.push(`${page.file} 的 ${match[2]} 入口不是 <a href>`);
    if (!/\shref="(?!#)[^"]+"/.test(match[0])) failures.push(`${page.file} 的 ${match[2]} 入口缺少干净 href`);
  }
  if (/href="#\//.test(html)) failures.push(`${page.file} 仍包含 hash 路由链接`);

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title) failures.push(`${page.file} 缺少 title`);
  else if (titles.has(title)) failures.push(`${page.file} 的 title 与其他页面重复：${title}`);
  else titles.add(title);

  if (!/<meta name="description" content="[^"]+">/.test(html)) failures.push(`${page.file} 缺少 meta description`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  if (canonical !== page.canonical) failures.push(`${page.file} canonical 错误：${canonical || '缺少'}`);
  if (!new RegExp(`<html lang="zh-CN" data-page="${page.route}">`).test(html)) failures.push(`${page.file} data-page 错误`);
}

const sitemapPath = resolve(projectRoot, 'sitemap.xml');
const robotsPath = resolve(projectRoot, 'robots.txt');
const vercelPath = resolve(projectRoot, 'vercel.json');
if (!existsSync(sitemapPath)) failures.push('缺少 sitemap.xml');
else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const page of pages) {
    if (!sitemap.includes(`<loc>${page.canonical}</loc>`)) failures.push(`sitemap.xml 缺少 ${page.canonical}`);
  }
}
if (!existsSync(robotsPath)) failures.push('缺少 robots.txt');
else if (!readFileSync(robotsPath, 'utf8').includes('https://kosx.ai/sitemap.xml')) failures.push('robots.txt 未指向 sitemap.xml');

if (!existsSync(vercelPath)) failures.push('缺少 vercel.json');
else {
  try {
    const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'));
    const rewriteSources = new Set((vercel.rewrites || []).map((item) => item.source));
    for (const page of pages.filter((item) => item.route !== 'home')) {
      if (!rewriteSources.has(`/${page.route}`)) failures.push(`vercel.json 缺少 /${page.route} 映射`);
    }
  } catch (error) {
    failures.push(`vercel.json 不是有效 JSON：${error.message}`);
  }
}

if (failures.length) {
  console.error(`check failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`check passed: ${pages.length} 个静态路径、独立 title/description/canonical、可抓取导航与本地资源`);
