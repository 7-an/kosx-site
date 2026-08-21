# KOSX.ai 官网 · 变更交接

由 `npm run collab:done` 追加，不重写历史。

## 2026-08-18T19:35:00+08:00 · kimi-k3 · 项目初始化：从 Codex 可视化目录迁入

- 任务：把 Codex 对话「kosx」中的网站预览版完整扒取为共享项目
- 来源快照：`~/.codex/visualizations/2026/08/12/019ff5c6-0c1a-7ba1-b4f7-0dcc09ef47b9/`（`index.html` 64808 字节，mtime 2026-08-15 11:17；`assets/logo/` 5 个 PNG）
- 落地内容：`index.html` + `assets/` 原样迁入；新增同步协议（`AGENTS.md`、`SYNC_START_HERE.md`、`SOURCE_OF_TRUTH.md`、`KIMI_START_HERE.md`、`CODEX_START_HERE.md`、`.collab/`、`scripts/collab.mjs`）、`scripts/check.mjs`、`docs/`（DECISIONS/V1_SPEC/CHANGE_HANDOFF）、`README.md`、`CHANGELOG.md`
- 检查：`npm run check`、`npm run collab:doctor`、本地 `http://127.0.0.1:8765` 人工确认
- 说明：原可视化目录自此冻结为历史快照，不再修改

## 2026-08-18T12:14:48.261Z · kimi-k3 · 开屏改版：移除 KOS，改为引导线+扫描线把 KOSX Logo 扫出来（clip-path 擦除），保留曙光/入位页首/手机缩短/reduced-motion

- 任务：开屏动画改版：去掉 KOS，KOSX 直接出场，保留线条酷感
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；Edge 无头截图 1280x800 5 个时间点 + 390x844 4 个时间点逐帧核对；修复扫描边被 clip-path 裁掉的问题
- 开工基线：def16a6dd57306c2dcaaa1dbdddefdbf59b108a0

## 2026-08-18T12:38:43.648Z · kimi-k3 · 去 AI 味：大标题改衬线混排（Latin 窄黑+中文宋体），删除 4 处自我解释/实现细节文案，页脚去开发水印；排查并确认移动端截图为无头浏览器伪影，真实布局无溢出

- 任务：去 AI 味：衬线大标题 + 删除自我解释文案 + 页脚瘦身
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；Edge 截图 1280x800 首页+成员页 + 390x844 首页；puppeteer 实测 390 视口 scrollWidth=390 无溢出
- 开工基线：def16a6dd57306c2dcaaa1dbdddefdbf59b108a0

## 2026-08-19T07:10:39.286Z · kimi-k3 · 上线 GitHub Pages 在线预览（7-an/kosx-site），README/CHANGELOG 记录部署方式

- 任务：记录 GitHub Pages 部署信息
- 认领范围：`README.md`、`CHANGELOG.md`
- 范围内变化：`README.md`
- 检查：线上 200；Logo 资源 200；Edge 截图与本地逐字节一致
- 开工基线：4864261e237b9694b1d1cc7384e8ed6cb7ce6b6e

## 2026-08-19T08:25:29.437Z · kimi-k3 · 开屏 V3：voidtype 粒子聚合成 BUILD SOMETHING REAL + Logo 居上收位页首，无 3C、无曙光光影；vendored Three.js ESM 动态加载，IIFE 全局回退，WebGL 失败/reduced-motion 均有静态降级；新增单文件导出脚本

- 任务：开屏 V3：voidtype 粒子聚合成 BUILD SOMETHING REAL + Logo 收位
- 认领范围：`index.html`、`assets`、`scripts/check.mjs`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`AGENTS.md`、`README.md`、`THIRD_PARTY_NOTICES.md`
- 范围内变化：`README.md`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`、`THIRD_PARTY_NOTICES.md`、`assets/vendor/`
- 检查：npm run check 通过；puppeteer 实测 1280x800 与 390x844 开屏全程（聚合/停留/收位/落定）；http 动态 import 与 file:// IIFE 两条加载路径均验证；修复动态 import 缺 ./ 前缀与导出脚本 $& 替换陷阱两个 bug
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T08:35:06.424Z · kimi-k3 · 开屏 V3 定稿：Logo 先单独居中停一拍，再上移让位、粒子飘入聚合 SLOGAN；移除曙光；重新导出单文件版（Desktop 2026-08-19）

- 任务：开屏两拍结构：Logo 居中独奏后粒子飘入
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面 4 帧 + 手机 3 帧逐帧核对（独奏/飘入/聚合/收位/落定）
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T08:43:20.491Z · kimi-k3 · Logo 居中独奏约 1 秒后直接从中央飞向左上角页首位，粒子聚合期间画面不再有 Logo；更新文档并重新导出单文件版

- 任务：开屏：Logo 独奏后直接飞入页首，粒子幕不再出现 Logo
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面 4 帧 + 手机 3 帧逐帧核对
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T08:51:07.883Z · kimi-k3 · 开屏粒子文案改三行下行阶梯错位（BUILD 居左 / SOMETHING 居中 / REAL. 居右，步进 1.2 倍字号），采样与自适应缩放同步支持错位；粒子模块源码收进 assets/vendor/intro-particles.src.mjs

- 任务：开屏粒子文案改三行错位阶梯排版
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`README.md`
- 范围内变化：`README.md`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`、`assets/vendor/`
- 检查：npm run check 通过；esbuild 重打包；puppeteer 桌面+手机聚合完成帧核对；单文件版重新导出
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T09:15:00.156Z · kimi-k3 · 开屏改驻留式：粒子定型后静止不再自动前进，去 Skip 按钮，底部双箭头脉动指引，滚动/上滑/键盘进入首页；粒子模块停掉环境漂移

- 任务：开屏改驻留式：定型后停住、去 Skip、加下滑标签、滚动进首页
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`、`assets/vendor/`
- 检查：npm run check 通过；puppeteer 桌面驻留 8 秒不前进 + 滚轮进入、手机上滑进入、reduced-motion 驻留与进入均验证；双箭头区域截图核对
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T09:20:01.548Z · kimi-k3 · 开屏改纯黑：移除网格纹理与橙色中心光，底色 #000

- 任务：开屏改纯黑：去网格与中心光
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 独奏帧与驻留帧截图核对（纯黑 + 白粒子 + 双箭头）
- 开工基线：c45ef3961e80041cce42e755e601c8ff503115f0

## 2026-08-19T09:38:06.317Z · kimi-k3 · 大标题字体回退标准黑体栈（PingFang/雅黑/Noto Sans CJK），字重升 500；替代衬线混排方案

- 任务：大标题字体回退到标准黑体系栈
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 首页+成员页截图核对；单文件版重新导出
- 开工基线：94690f178ee8df8b0bee0421ef07f6a3bd116fc9

## 2026-08-20T07:58:57.916Z · kimi-k3 · 首页合作伙伴区改无限流动横幅（marquee）：纯 CSS 无缝循环 + 两端渐隐 + 悬停暂停 + 减弱动效静态；合作伙伴页保留网格做详细视图

- 任务：首页合作伙伴区改无限流动横幅（marquee）
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面两帧（循环位移验证）+ 手机一帧核对；单文件版重新导出
- 开工基线：3ad583e20b6dd45e7260435e945e2e08a8235c35

## 2026-08-20T08:55:08.455Z · kimi-k3 · 首页重构（GPT 方案）：合作伙伴并入 Hero 信任带（慢速流动+右侧查看全部+手机静态两行）、我们是谁扶正为大标题、六入口降三入口（社群与内容/项目与交付/人与网络），章节重排为 01 About / 02 How KOSX Works / 03 Insights / 04 Latest

- 任务：首页重构：合作伙伴并入 Hero 信任带、我们是谁扶正、六入口降三入口
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面首屏+中段+手机信任带截图核对；单文件版重新导出
- 开工基线：7aadefdb0b135e1ababdc3ef5df24fab454fb377

## 2026-08-20T09:24:20.780Z · kimi-k3 · 首页去线留空：hero 去坐标纸网格，板块间 1px 横线全移除改大留白，入口卡/card/成员卡/表单/活动卡/Insights 面板全部去描边（圆角 16、hover 底色微亮），保留行级列表细分隔线

- 任务：首页去线留空：拆格子降工程感
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面首屏+中段+手机截图核对；单文件版重新导出
- 开工基线：7aadefdb0b135e1ababdc3ef5df24fab454fb377

## 2026-08-20T09:40:26.166Z · kimi-k3 · 去指路标签：删信任带「查看全部合作伙伴」链接（流动带整体可点进合作伙伴页）、删最新活动「查看全部 ↗」（活动卡可点进活动页），.text-link 类移除

- 任务：删指路标签：信任带链接、查看全部等，模块自身可点
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 截图核对 + 点击信任带验证跳转 #/partners；单文件版重新导出
- 开工基线：7aadefdb0b135e1ababdc3ef5df24fab454fb377

## 2026-08-20T09:59:24.105Z · kimi-k3 · 最新活动改自动流动卡片（minimaxi 结构：空图片槽+序号/分类+空文案槽，36s 循环、悬停暂停）；子页面分割线全部移除（page-hero/page-intro/section/content-row/导航底边/页脚），与首页同一去线语言

- 任务：最新活动改自动流动卡片（minimaxi 结构，内容槽留空）
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过；puppeteer 桌面活动区两帧（流动位移）+ 成员页去线截图核对；单文件版重新导出
- 开工基线：7aadefdb0b135e1ababdc3ef5df24fab454fb377

## 2026-08-20T10:21:54.004Z · codex · 将 7 个 hash 视图迁移为真实静态路径：站内入口改为可抓取链接，生成六个物理子页面、独立 SEO 元数据、sitemap/robots，并加入旧 hash 兼容跳转与 Vercel 映射；保留现有首页、流动模块和粒子开屏

- 任务：将 hash 路由迁移为七个可刷新静态路径并补齐 SEO 基础
- 认领范围：`*`
- 范围内变化：`GENTS.md`、`CHANGELOG.md`、`README.md`、`SOURCE_OF_TRUTH.md`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`、`package.json`、`scripts/check.mjs`、`activities/`、`cash-cow-club/`、`contact-us/`、`kosx-lab/`、`members/`、`partners/`、`robots.txt`、`scripts/build-routes.mjs`、`sitemap.xml`、`vercel.json`
- 检查：npm run check；git diff --check；collab:doctor；浏览器逐页刷新 7 路径；旧 /#/members 跳转；390x844 与 1280x800 无横向溢出；子页面不开屏；控制台无 error/warning；临时 HTTP /members 301→/members/ 200 且 Logo 资源 200
- 开工基线：b54463d8e8866031ee2ba7d2f0ad778dcb5b71f6

## 2026-08-20T10:28:16.972Z · codex · 已将静态多页面迁移提交 c9e6220 推送至 GitHub main，并完成 GitHub Pages 线上验收：首页粒子实际渲染，六个静态深链可刷新，旧 hash 缓存刷新后跳转正常

- 任务：发布静态多页面迁移到 GitHub Pages 并线上验收
- 认领范围：`*`
- 范围内变化：未检测到；如有生成物请另行说明
- 检查：GitHub Pages run 32358940593 success；线上首页 title/canonical/nav/粒子 canvas；六个深链逐页 H1/当前导航/Logo/无溢出；控制台无 error/warning；旧 ?v=c9e6220#/members 跳转 /kosx-site/members/
- 开工基线：b54463d8e8866031ee2ba7d2f0ad778dcb5b71f6

## 2026-08-20T10:35:42.946Z · codex · 首页粒子开屏增加 5 秒自动进入 Hero：保留滚轮、上滑、双箭头和键盘提前进入；手动进入会清除自动计时，reduced-motion 与静态降级同样受 5 秒上限

- 任务：首页粒子开屏 5 秒后自动进入 Hero
- 认领范围：`*`
- 范围内变化：`ctivities/index.html`、`cash-cow-club/index.html`、`contact-us/index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`、`kosx-lab/index.html`、`members/index.html`、`partners/index.html`
- 检查：npm run check；git diff --check；浏览器 4.2s 仍驻留、5.2s 开始淡出、6.3s Hero 完成；1.8s 手动提前进入后 5s 不重复触发；控制台无 error/warning
- 开工基线：d7a7923985a6e6e4e89f3f1f314d0d67b8513a9f

## 2026-08-20T10:46:52.338Z · codex · 首页增加 5 秒自动进入 Hero；支持直接双击 index.html 时加载粒子兼容包并跳转物理子页面；线上继续保留无井号干净路径，已发布 GitHub Pages

- 任务：本地 file 预览兼容与 GitHub Pages 发布
- 认领范围：`index.html`、`assets/vendor/intro-particles.iife.js`、`scripts/check.mjs`、`README.md`、`AGENTS.md`、`THIRD_PARTY_NOTICES.md`、`docs`、`activities/index.html`、`cash-cow-club/index.html`、`contact-us/index.html`、`kosx-lab/index.html`、`members/index.html`、`partners/index.html`
- 范围内变化：未检测到；如有生成物请另行说明
- 检查：npm run check；git diff --check；collab:doctor；本地 HTTP 首页粒子与 5 秒自动进入；成员深链；GitHub Pages run 32360452440 success；线上首页粒子、5 秒进入与 /members/ 深链
- 开工基线：d7a7923985a6e6e4e89f3f1f314d0d67b8513a9f

## 2026-08-21T03:58:42.390Z · kimi-k3 · Hero 改版（设计师方向）：内容垂直水平居中、620px 固定高、右上角中文/EN 切换（localStorage 记忆）、背景留空、单 Explore 按钮下滑到三入口；kicker/角标/底部行移除；1440/1920/375 三视口核对

- 任务：Hero 改版：内容居中、620px、中英切换按钮、背景留空
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run build + check 通过（7 静态路径）；puppeteer 1440/1920/375 截图 + 中英切换功能验证；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T04:10:46.199Z · kimi-k3 · 语言切换改裸文字样式（中文 / EN 选中下划线细线）；EN Hero 按设计稿排版：Wellness 后断行、文字块居中内左对齐、按钮居中

- 任务：语言切换改裸文字样式 + EN Hero 按设计稿排版（左对齐文字块居中、Wellness 后断行）
- 认领范围：`index.html`
- 范围内变化：`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 EN/CN + 375 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T04:19:20.158Z · kimi-k3 · EN Hero 标题/副文案/按钮三元素改全部居中对齐（用户确认不走设计稿的左对齐块）

- 任务：EN Hero 三元素居中对齐
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 1440 与 375 截图核对
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T04:35:45.861Z · kimi-k3 · Hero 下新增两页：行动页（居中断言 + 探索项目/加入团队两个留白大卡，mantle 式大留白节奏）+ 品牌素材预留空页；Explore 改下滑到行动页；手机端双卡堆叠、禁用强制换行

- 任务：Hero 下新增两页：行动双卡页 + 品牌素材预留页
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 与 375 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T05:11:13.354Z · kimi-k3 · 我们是谁重组：头像簇+Built by 这些人+品牌方流动带融入（不白做）+媒体 bento（Featured/活动回顾照片卡/四渠道格）+底部活动流动带；独立 Insights 与最新活动板块取消

- 任务：我们是谁重组：头像簇+Built by+品牌带+媒体 bento+活动流
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 双段 + 375 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T05:19:12.167Z · kimi-k3 · 我们是谁：去 01/About KOSX 编号标签，标题与头像簇 Built by 行居中（按参考图）

- 任务：我们是谁标题去编号并居中
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 1440 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T05:33:10.761Z · kimi-k3 · 我们如何创造价值改 bento：去编号标题居中，左高卡社群与内容+中列项目与交付/人与网络+右高橙色加入 CTA，素材槽留空，圆角统一 12px（两个 bento 区对齐）

- 任务：我们如何创造价值改 bento：去编号、标题居中、圆角12、空素材槽
- 认领范围：`index.html`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 与 375 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T05:52:51.088Z · kimi-k3 · works bento 布局调整：加入 KOSX CTA 从高卡缩小为右下角小卡（横向箭头+文字），人与网络右上，社群与内容/项目与交付两张高卡在左中

- 任务：works bento：CTA 缩小到右下角
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 1440 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T06:17:15.538Z · kimi-k3 · 板块间距整体拉大：各板块上下留白提至 56–128px 区间（去线后的呼吸感），重点撑开活动带与我们如何创造价值之间的距离；子页面与页脚同步

- 任务：板块间距整体拉大（去线后的留白呼吸）
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 1440 交界处与关于区截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T06:43:44.023Z · kimi-k3 · 页脚改版：粒子大 Logo（复用开屏粒子模块，新增 textScale 参数）+ 黑橙渐变底 + 左大字右链接列布局；静态降级保留；双格式重打包

- 任务：页脚改版：粒子大 Logo + 黑橙渐变底 + EigenCloud 式布局
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`、`docs/V1_SPEC.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 与 375 页脚截图核对（粒子 is-live 实测为真）；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T06:56:03.673Z · kimi-k3 · 页脚粒子 Logo 改不规则打散排布：粒子模块新增 scatter 模式（逐字母预设位置/缩放/旋转），K/O/S/X 四字母错落

- 任务：页脚粒子 Logo 打散成不规则排布
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 1440 页脚截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T07:05:26.008Z · kimi-k3 · 修复刷新两 bug：scrollRestoration=manual 刷新回顶部（Hero）；子页面刷新（reload）也重播开屏，站内跳转载子页面不播

- 任务：修复刷新不重放开屏 + 刷新后滚动位置不回顶部
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 实测：首页刷新重播+scrollY=0、子页面 navigate 不播、子页面 reload 重播+scrollY=0
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T07:11:11.226Z · kimi-k3 · 子页面刷新（reload）直接重定向回首页并随首页重播开屏，不再停在子页面

- 任务：刷新一律回首页 Hero
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 实测 /members/ 刷新后 path=/、intro-pending=true、scrollY=0
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T07:32:29.649Z · kimi-k3 · 页脚粒子画布扩为全页脚（字母仍在左侧成型，扰动全域响应）；链接层 z-index 在上可点；移动端链接列自适配

- 任务：页脚粒子层扩为全屏，链接层浮于其上
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 1440 右侧划动扰动 + 链接点击跳转 /members/ + 375 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T07:38:59.652Z · kimi-k3 · 页脚字母排布回到首个打散版的宽幅构图（K 大居左上、O 中上、S 中下、X 中右），保留全页脚画布扩散

- 任务：页脚字母排布回到首个打散版构图
- 认领范围：`assets/vendor`、`docs/DECISIONS.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`
- 检查：npm run check 通过；puppeteer 1440 截图核对；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T07:53:11.341Z · kimi-k3 · 修复页脚粒子动不了（模块改挂到整个页脚，事件冒泡可达）；字母构图回到首个打散版（textRegionWidth 锚定左区，场仍全页脚）

- 任务：修页脚粒子交互失效 + 字母构图回调
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 截图验证静态构图 + 划动后字母被打散 + 右侧划动尾迹；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T08:07:52.311Z · kimi-k3 · 中英切换扩为全站：Hero data 属性 + 13 个复合标题 innerHTML 对 + 约 90 条词典文本节点对调 + title 翻译；localStorage 全站共享；占位词与人名项目名不译

- 任务：中英切换扩为全站
- 认领范围：`index.html`、`docs/DECISIONS.md`
- 范围内变化：`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过（含 build）；puppeteer 验证首页 about 英文、成员页英文、联系我们页中文还原；单文件版重新导出
- 开工基线：507fcc15996e86dc69a00efc039bc5f16d497d15

## 2026-08-21T09:32:34.352Z · kimi-k3 · 页脚粒子聚合浮现改为每会话只播一次（playEntrance 开关 + sessionStorage 记录）；之后页面直接成形

- 任务：页脚粒子聚合动画只播一次（session 级）
- 认领范围：`index.html`、`assets/vendor`、`docs/DECISIONS.md`
- 范围内变化：`assets/vendor/intro-particles.iife.js`、`assets/vendor/intro-particles.js`、`assets/vendor/intro-particles.src.mjs`、`docs/DECISIONS.md`、`index.html`
- 检查：npm run check 通过；puppeteer 实测首页首见播聚合、成员页再见直接成形；单文件版重新导出
- 开工基线：62e001b6689f45ddc5d33df2522379a261becf97
