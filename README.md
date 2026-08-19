# KOSX.ai 官网（本地预览版）

KOSX 组织官网的本地共享项目。单文件静态站，无构建、无依赖安装。

## 目录

```
index.html        # 全部页面（7 个 hash 视图）、样式与脚本
assets/logo/      # KOSX / KOS 品牌素材
docs/             # 决策记录、V1 规格、变更交接
scripts/          # collab.mjs 协作协议、check.mjs 检查
.collab/          # 运行时认领与事件（被 Git 忽略）
```

## 本地预览

```bash
npm run dev
# 打开 http://127.0.0.1:8765
```

## 修改前必读

任何 Agent（Codex / Kimi K3）开工前：读 `SYNC_START_HERE.md`，运行 `npm run collab:status` + `npm run collab:doctor`，用 `collab:claim` 认领范围；完成后 `npm run check` + `collab:done` 写回。

## 检查

```bash
npm run check
```

校验内联脚本语法、`assets/` 引用存在、`data-route` 与 `data-view` 一一对应、基础 SEO 标签。

## 在线预览（GitHub Pages）

- 地址：https://7-an.github.io/kosx-site/
- 仓库：https://github.com/7-an/kosx-site（public，main 分支根目录即站点）
- 发布方式：推送到 `main` 后 GitHub Pages 自动重建，约 1 分钟生效。

## 上线前清单（V1 后）

- [ ] 各页面正式文案替换占位
- [ ] 活动照片与详情
- [ ] X 内容抓取
- [ ] 部署到正式域名并做 SEO 提审
