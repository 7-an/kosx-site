# Changelog

## 0.3.0 · 2026-08-19

- 开屏 V3：纯黑底 + voidtype 粒子聚合成「BUILD SOMETHING REAL.」（三行下行阶梯错位）；KOSX Logo 居中独奏后飞入页首；粒子定型后驻留静止，底部双箭头脉动指引，滚动/上滑/键盘进入首页；无 Skip 按钮、无网格、无光晕曙光、无 3C。
- 工程：vendored Three.js + VOIDTYPE 移植模块（`assets/vendor/`，许可见 `THIRD_PARTY_NOTICES.md`），动态 import + IIFE 全局双路径；新增 `scripts/export-single-file.mjs` 单文件导出。

## 0.2.0 · 2026-08-19

- 开屏改版：移除 KOS 母品牌，改为引导线 + 扫描线「扫出」KOSX Logo（clip-path 擦除与扫描边同步）。
- 去 AI 味：大标题改衬线混排（Latin 窄黑 + 中文宋体），删除自我解释/实现细节文案，页脚去开发水印。
- 上线 GitHub Pages 在线预览：https://7-an.github.io/kosx-site/

## 0.1.0 · 2026-08-18

- 从 Codex 可视化目录迁入 V1 原型：单文件 `index.html`（7 个 hash 视图）+ `assets/logo/` 品牌素材。
- 已有功能：深色 VI 主题、KOS→KOSX 开屏品牌动画（橙金光效、柔和淡出、移动端缩短、reduced-motion 跳过）、首页紧凑目录入口、成员/活动/合作伙伴/搞钱研究所/KOSX Lab/联系我们视图。
- 建立 Codex ↔ Kimi 双 Agent 同步协议（`.collab` 认领 + 交接回执）。
