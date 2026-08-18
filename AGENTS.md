# KOSX.ai 官网 · 多 Agent 项目规则

本文件对 Codex、Kimi K3 和其他接手本项目的 Agent 同时生效。

## 开工前固定顺序

1. 阅读 `SYNC_START_HERE.md`。
2. 阅读 `SOURCE_OF_TRUTH.md` 与 `docs/V1_SPEC.md`。
3. 运行 `npm run collab:status`，查看当前基线、未提交改动、正在占用的范围和最近交接。
4. 编辑前必须认领范围，例如：

   ```bash
   npm run collab:claim -- --actor kimi-k3 --task "调整首页 Hero" --paths "index.html"
   ```

5. 如果范围与另一 Agent 的有效认领重叠，停止修改该范围；改做不重叠任务或等待对方完成。

聊天记录、附件、旧 zip、旧截图和 Agent 自己的记忆都不是当前真源。

## 真源优先级

1. 用户（安寻或 KOSX 负责人）最新明确拍板，并已写入 `docs/DECISIONS.md`
2. `docs/V1_SPEC.md`
3. 当前实际源码 `index.html` 与 `assets/`
4. `docs/CHANGE_HANDOFF.md`
5. `CHANGELOG.md` 与 `README.md`
6. 历史交接、聊天和外部附件

若最新用户决定尚未写入决策记录，先补记录，再修改代码。若文档与代码冲突，不自动回退代码：先判断是未实现、实现漂移还是文档过时，并写入交接。

## 已锁定的产品边界

- 网站定位：KOSX 组织官网，推翻旧站重做，不是旧站的改版。
- 信息架构：首页 + 成员、活动、合作伙伴、搞钱研究所、KOSX Lab、联系我们，共 7 个视图。
- 视觉：深色 VI 主题（近黑底 + 橙金 signal），来自《KOSX.ai VI物料效果册》。
- 开屏：KOS parent logo 过渡到 KOSX logo 的品牌动画，橙金光效、柔和淡出；尊重 `prefers-reduced-motion`。
- 首页气质：大厂式紧凑——首屏克制，内容丰富度放在子页面。
- 正式文案、活动照片、X 抓取数据缺失时保持空状态，不虚构内容、不伪造数据。
- 成员信息已确认可公开展示。
- 当前线上站 `https://kosx.ai` 仅作对照，不作为设计来源复制。

## 工程规则

- 单文件静态站：`index.html` + `assets/`，无构建、无框架、无依赖安装。
- 不增加后端、数据库、登录、CMS、分析追踪、第三方 JS 库，除非用户另行明确批准。
- 路由为 hash 视图切换，新增页面必须同时注册 `data-view`、`data-route` 和 `routes` 数组。
- 图片只用 `assets/` 内本地文件；新增素材先确认版权来源。
- 每次修改后运行 `npm run check`，并用 `collab:done` 写回交接。
