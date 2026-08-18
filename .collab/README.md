# `.collab` 运行时目录

- `claims/*.json`：各 Agent 当前认领范围，90 分钟过期。
- `events.jsonl`：本机认领、续租、完成和释放事件。
- `.lock/`：脚本短时互斥锁。

以上运行时文件被 Git 忽略，不承载产品事实。长期决定写入 `docs/DECISIONS.md`，完成回执写入 `docs/CHANGE_HANDOFF.md`。

不要手工修改 claim。使用 `npm run collab:*`。

