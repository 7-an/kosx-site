# Kimi K3 Start Here

你接手的是已运行并验收过的 V1 原型，不是从零做概念稿。

公共规则与长期逻辑不维护在本文件。请依次读取：

1. `AGENTS.md`
2. `SYNC_START_HERE.md`
3. `SOURCE_OF_TRUTH.md`
4. `docs/V1_SPEC.md`
5. `docs/DECISIONS.md`
6. `docs/CHANGE_HANDOFF.md` 最近一条

然后运行：

```bash
npm run collab:status
npm run collab:doctor
```

修改前用 `actor=kimi-k3` 认领最小文件范围；完成后运行 `npm run check` 并用 `collab:done` 写回。不要从旧附件、旧可视化目录或 zip 覆盖当前目录。
