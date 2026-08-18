# Source of Truth

## 当前状态

- 当前阶段：V1 原型（信息架构 + 排版 + 开屏动画）已从 Codex 可视化目录迁入本项目，进入双 Agent 并行迭代。
- 当前代码基线：以本项目 Git `main` 最新提交为准。
- 当前实现：单文件静态站 `index.html`（7 个 hash 视图）+ `assets/logo/` 品牌素材，深色 VI 主题。
- 历史快照：`~/.codex/visualizations/2026/08/12/019ff5c6-0c1a-7ba1-b4f7-0dcc09ef47b9/` 是迁入前的 Codex 工作副本，仅作证据留存，任何 Agent 不得再修改或从那里恢复代码。

## 文件职责

| 文件 | 职责 | 修改规则 |
|---|---|---|
| `docs/DECISIONS.md` | 用户已确认决定 | 只追加或显式标注替代关系 |
| `docs/V1_SPEC.md` | V1 信息架构、内容与交互合同 | 只有新决定改变产品时更新 |
| `index.html`、`assets/` | 当前实际实现 | 修改前先认领范围 |
| `docs/CHANGE_HANDOFF.md` | 每轮 Agent 变更回执 | 由 `collab:done` 追加，不重写历史 |
| `CHANGELOG.md` | 面向版本的结果摘要 | 形成可验收版本时更新 |
| `README.md` | 开发、维护与 QA 操作说明 | 工程流程变化时同步 |
| `.collab/` | 本机实时认领与事件 | 运行时状态，不作为产品事实 |

## 冲突处理

1. 最新用户决定高于所有旧材料。
2. 决定改变页面时，同时更新 `DECISIONS.md`、`V1_SPEC.md` 和受影响代码。
3. 代码与文档不一致时，不直接选旧文档覆盖代码；先把差异写进当前任务交接。
4. 外部 Agent 的聊天回复只有在写回项目文件后才算完成同步。

## 历史材料

思维导图《网站KOSX.ai.xmind》、《KOSX_Intro.md》、《KOSX.ai VI物料效果册.pdf》、旧站 `https://kosx.ai` 和聊天记录只作证据来源，不再作为施工入口。所有接手者从 `SYNC_START_HERE.md` 开始。
