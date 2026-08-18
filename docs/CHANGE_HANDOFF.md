# KOSX.ai 官网 · 变更交接

由 `npm run collab:done` 追加，不重写历史。

## 2026-08-18T19:35:00+08:00 · kimi-k3 · 项目初始化：从 Codex 可视化目录迁入

- 任务：把 Codex 对话「kosx」中的网站预览版完整扒取为共享项目
- 来源快照：`~/.codex/visualizations/2026/08/12/019ff5c6-0c1a-7ba1-b4f7-0dcc09ef47b9/`（`index.html` 64808 字节，mtime 2026-08-15 11:17；`assets/logo/` 5 个 PNG）
- 落地内容：`index.html` + `assets/` 原样迁入；新增同步协议（`AGENTS.md`、`SYNC_START_HERE.md`、`SOURCE_OF_TRUTH.md`、`KIMI_START_HERE.md`、`CODEX_START_HERE.md`、`.collab/`、`scripts/collab.mjs`）、`scripts/check.mjs`、`docs/`（DECISIONS/V1_SPEC/CHANGE_HANDOFF）、`README.md`、`CHANGELOG.md`
- 检查：`npm run check`、`npm run collab:doctor`、本地 `http://127.0.0.1:8765` 人工确认
- 说明：原可视化目录自此冻结为历史快照，不再修改
