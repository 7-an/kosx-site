import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(projectRoot, 'index.html');
const canonicalRoot = 'https://kosx.ai';

const pages = [
  {
    route: 'home',
    output: 'index.html',
    title: 'KOSX.ai｜把事情做成的创造者网络',
    description: 'KOSX.ai 连接 AI 时代的创造者，通过社群发现人才，以真实项目组织协作。',
    canonical: `${canonicalRoot}/`,
  },
  {
    route: 'members',
    output: 'members/index.html',
    title: '成员｜KOSX.ai',
    description: '了解 KOSX.ai 的核心团队、Mentors 与 Builders 网络。',
    canonical: `${canonicalRoot}/members`,
  },
  {
    route: 'activities',
    output: 'activities/index.html',
    title: '活动｜KOSX.ai',
    description: '查看 KOSX.ai 的线上、线下、Something New 与 VersionX 活动。',
    canonical: `${canonicalRoot}/activities`,
  },
  {
    route: 'partners',
    output: 'partners/index.html',
    title: '合作伙伴｜KOSX.ai',
    description: '了解与 KOSX.ai 共同建设生态与提供资源的合作伙伴。',
    canonical: `${canonicalRoot}/partners`,
  },
  {
    route: 'cash-cow-club',
    output: 'cash-cow-club/index.html',
    title: '搞钱研究所｜KOSX.ai',
    description: 'KOSX.ai 搞钱研究所：内容更新、AI Workshop 与灵感市集。',
    canonical: `${canonicalRoot}/cash-cow-club`,
  },
  {
    route: 'kosx-lab',
    output: 'kosx-lab/index.html',
    title: 'KOSX Lab｜KOSX.ai',
    description: 'KOSX Lab 将内外部想法推进为真实项目，展示项目角色与状态。',
    canonical: `${canonicalRoot}/kosx-lab`,
  },
  {
    route: 'contact-us',
    output: 'contact-us/index.html',
    title: '联系我们｜KOSX.ai',
    description: '加入 KOSX.ai，或发起企业、平台、活动与生态合作。',
    canonical: `${canonicalRoot}/contact-us`,
  },
];

const source = readFileSync(sourcePath, 'utf8');

function extractView(html, route) {
  const dataViewAt = html.indexOf(`data-view="${route}"`);
  if (dataViewAt < 0) throw new Error(`找不到 data-view="${route}"`);

  const start = html.lastIndexOf('<section', dataViewAt);
  const sectionTag = /<\/?section\b[^>]*>/g;
  sectionTag.lastIndex = start;
  let depth = 0;
  let match;

  while ((match = sectionTag.exec(html))) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(start, sectionTag.lastIndex);
  }

  throw new Error(`data-view="${route}" 的 section 未闭合`);
}

function setMeta(html, page) {
  return html
    .replace(/<html lang="zh-CN" data-page="[^"]+">/, `<html lang="zh-CN" data-page="${page.route}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${page.description}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${page.canonical}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${page.title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${page.description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${page.canonical}">`);
}

function routeHref(targetRoute, currentRoute) {
  if (targetRoute === 'home') return currentRoute === 'home' ? './' : '../';
  return currentRoute === 'home' ? `./${targetRoute}` : `../${targetRoute}`;
}

function rewriteRouteLinks(html, currentRoute) {
  return html.replace(/<a\b[^>]*\bdata-route="([^"]+)"[^>]*>/g, (tag, targetRoute) => {
    let next = tag.replace(/\saria-current="page"/g, '');
    next = next.replace(/\shref="[^"]*"/, ` href="${routeHref(targetRoute, currentRoute)}"`);
    if (targetRoute === currentRoute) next = next.replace(/>$/, ' aria-current="page">');
    return next;
  });
}

function renderPage(page) {
  const homeView = extractView(source, 'home');
  const selectedView = extractView(source, page.route).replace(
    /<section class="view(?: is-active)?"/,
    '<section class="view is-active"',
  );

  let html = source.replace(homeView, selectedView);
  html = html.replace(/\n\s*<template id="route-templates">[\s\S]*?<\/template>\n/, '\n');
  html = setMeta(html, page);
  html = rewriteRouteLinks(html, page.route);

  if (page.route !== 'home') {
    html = html
      .replaceAll('src="assets/', 'src="../assets/')
      .replaceAll('href="assets/', 'href="../assets/')
      .replaceAll('import("./assets/', 'import("../assets/');
  }

  return html;
}

for (const page of pages.filter((item) => item.route !== 'home')) {
  const outputPath = resolve(projectRoot, page.output);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderPage(page));
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((page) => `  <url><loc>${page.canonical}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve(projectRoot, 'sitemap.xml'), sitemap);
writeFileSync(resolve(projectRoot, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${canonicalRoot}/sitemap.xml\n`);

console.log(`build complete: ${pages.length} 个静态路径（首页 + ${pages.length - 1} 个子页面）`);
