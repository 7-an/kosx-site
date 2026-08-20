# KOSX.ai 官网

KOSX 组织官网的本地共享项目。静态多页面站，无框架、无依赖安装。

## 目录

```
index.html        # 首页、全站样式/脚本，以及六个子页面的内容模板
members/ 等      # npm run build 生成的六个静态子页面（不要手改）
assets/logo/      # KOSX / KOS 品牌素材
assets/vendor/    # 开屏粒子模块（vendored Three.js + VOIDTYPE 移植）
docs/             # 决策记录、V1 规格、变更交接
scripts/          # 静态路由构建、协作协议、检查与单文件导出
.collab/          # 运行时认领与事件（被 Git 忽略）
vercel.json       # Vercel 无井号路径映射
sitemap.xml       # 构建生成的正式域名 sitemap
```

## 本地预览

```bash
npm run dev
# 打开 http://127.0.0.1:8765
```

可直接刷新 `/members`、`/activities` 等路径；不再使用 `#/members`。

## 修改前必读

任何 Agent（Codex / Kimi K3）开工前：读 `SYNC_START_HERE.md`，运行 `npm run collab:status` + `npm run collab:doctor`，用 `collab:claim` 认领范围；完成后 `npm run check` + `collab:done` 写回。

## 检查

```bash
npm run check
```

命令会先运行 `npm run build`，再逐页校验脚本、资源、唯一主视图/H1、真实导航链接，以及独立 title、description、canonical、sitemap 和 robots。

## 导出单文件预览版

```bash
node scripts/export-single-file.mjs            # 输出到桌面，文件名带当天日期
```

把图片与开屏粒子模块（IIFE 内联，绕开 `file://` 对 ES Module 的限制）打包成一个 HTML，双击即可打开，适合直接发给人看。

## 在线预览（GitHub Pages）

- 地址：https://7-an.github.io/kosx-site/
- 仓库：https://github.com/7-an/kosx-site（public，main 分支根目录即站点；物理子目录兼容 GitHub Pages）
- 发布方式：推送到 `main` 后 GitHub Pages 自动重建，约 1 分钟生效。

## Vercel

仓库已包含 `vercel.json`。导入 Vercel 后，`/members` 等地址会映射到对应静态文件；页面本身不依赖服务器端框架。

## 上线前清单（V1 后）

- [ ] 各页面正式文案替换占位
- [ ] 活动照片与详情
- [ ] X 内容抓取
- [ ] 绑定正式域名并提交 sitemap / SEO 提审
