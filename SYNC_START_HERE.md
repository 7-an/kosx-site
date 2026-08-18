# KOSX.ai 官网 · 双 Agent 同步入口

这套协议解决 Codex 与 Kimi K3 在同一个本地项目中并行工作时的版本漂移。它不能让两个独立聊天自动互相读心，但能保证任何一方开始修改前，都先看到另一方已经改了什么、正在改什么、哪些文件不能碰。

## 每次开始任务

```bash
cd /Users/ansyn/Documents/Codex/kosx-site
npm run collab:status
npm run collab:doctor
```

然后认领要修改的最小范围：

```bash
# Kimi 示例
npm run collab:claim -- \
  --actor kimi-k3 \
  --task "调整首页入口卡密度" \
  --paths "index.html"

# Codex 示例
npm run collab:claim -- \
  --actor codex \
  --task "补充成员正式文案" \
  --paths "index.html,docs/DECISIONS.md"
```

认领有 90 分钟有效期。长任务每 30–60 分钟续一次：

```bash
npm run collab:heartbeat -- --actor kimi-k3
```

## 并行边界

- 本项目主体是单个 `index.html`，大多数修改都会碰到它，因此同一时间原则上只有一个 Agent 认领 `index.html`。
- 可以并行：一方改 `index.html`，另一方只改 `docs/` 或只添加 `assets/` 新素材。
- 不可以并行：两人同时认领 `index.html`。
- `--paths "*"` 代表独占整个项目，只用于大迁移或发布收尾。
- 发现重叠认领时，脚本会拒绝后来的认领。
- 认领只防止范围冲突，不替代 Git；每轮仍需检查 `git status` 和 `git diff`。

## 每次完成任务

先运行检查，再写回交接：

```bash
npm run check
npm run collab:done -- \
  --actor kimi-k3 \
  --summary "完成首页入口卡密度与手机端导航调整" \
  --checks "npm run check; 390/1280 视口人工核对"
```

`collab:done` 会：

1. 读取该 Agent 的认领范围。
2. 把任务、范围、变化文件和检查结果追加到 `docs/CHANGE_HANDOFF.md`。
3. 释放认领，让下一位接手。

如果任务放弃：

```bash
npm run collab:release -- --actor kimi-k3 --reason "需求变更，未修改代码"
```

## 用户改变决定时

任何 Agent 收到用户新决定，按此顺序处理：

1. 在 `docs/DECISIONS.md` 追加决定，写日期、来源、替代哪条旧决定。
2. 更新 `docs/V1_SPEC.md` 中受影响的合同。
3. 再修改代码与素材。
4. 用 `collab:done` 写回实现结果。

只在聊天里记住，不算同步完成。

## 给 Kimi K3 的开场指令

```text
这是 KOSX.ai 官网的共享项目，位于 /Users/ansyn/Documents/Codex/kosx-site。请先在项目根目录阅读 AGENTS.md、SYNC_START_HERE.md、SOURCE_OF_TRUTH.md 和 docs/V1_SPEC.md，然后运行 npm run collab:status 与 npm run collab:doctor。

在修改任何文件前，必须用 npm run collab:claim -- --actor kimi-k3 --task "任务名" --paths "逗号分隔的文件或目录" 认领最小范围。若脚本提示与 Codex 重叠，不要修改该范围。

完成后运行 npm run check，并用 npm run collab:done -- --actor kimi-k3 --summary "实际完成内容" --checks "实际检查" 写回交接。不要只在聊天里汇报，不要用旧附件覆盖项目目录。
```

## 给 Codex 的开场指令

```text
KOSX 官网已搬到共享项目 /Users/ansyn/Documents/Codex/kosx-site，旧的 ~/.codex/visualizations/2026/08/12/019ff5c6-0c1a-7ba1-b4f7-0dcc09ef47b9/ 只是历史快照，不要再改那里。先读项目根目录 AGENTS.md 和 SYNC_START_HERE.md，运行 npm run collab:status。把当前代码、docs/DECISIONS.md、docs/V1_SPEC.md 和最近 CHANGE_HANDOFF 当作真源，不要用旧聊天或旧 brief 回退 Kimi 已实现的功能。编辑前用 actor=codex 认领范围，完成后用 collab:done 写回。
```
