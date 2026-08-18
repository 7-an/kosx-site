# KOSX.ai 官网 · V1 规格合同

本文件是 V1 的信息架构、内容与交互合同。只有新决定改变产品时才更新，并同步在 `DECISIONS.md` 留痕。

## 定位

KOSX 组织官网（`kosx.ai`）的本地预览版。推翻旧站重做，当前为单文件静态原型：信息架构、排版、VI 深色主题与开屏动画已确认；各页面正式文案与真实数据待客户补充。

## 技术形态

- 单文件 `index.html` + `assets/logo/` 本地素材，无构建、无框架、无第三方库。
- hash 路由：视图间切换不刷新页面；`routes` 数组是路由真源。
- 本地预览：`npm run dev`（`http://127.0.0.1:8765`）。

## 信息架构（7 个视图）

| 路由 | 名称 | 内容要点 |
|---|---|---|
| `home` | 首页 | Hero（定位语 + CTA）、目录入口（搞钱研究所/AI Workshop/灵感市集/KOSX Lab/成员/活动）、合作伙伴露出、最新动态 |
| `members` | 成员 | Core Team、Mentors、Builders；信息可公开，真实数据待补 |
| `activities` | 活动 | 线上、线下、Something New、VersionX；照片与详情后续上传 |
| `partners` | 合作伙伴 | 合作方展示 |
| `cash-cow-club` | 搞钱研究所 | 内容更新、周报与对外输出；旗下 AI Workshop、灵感市集 |
| `kosx-lab` | KOSX Lab | 将想法推进为真实项目 |
| `contact-us` | 联系我们 | 加入/合作表单与联系方式 |

规则：新增视图必须同时注册 `data-view`、`data-route` 导航和 `routes` 数组；`npm run check` 会校验一一对应。

## 视觉合同

- 主题：深色 VI（近黑底 `--paper`、浅色文字 `--ink`、橙金 `--signal`），`color-scheme: dark`。
- Logo：深色底一律使用 White 版本（`KOSX logo White.png` / `KOSX ICON White.png`）；Black 版本仅备浅色物料使用。
- 气质：大厂式紧凑——首屏克制、密度适中；边界柔和（细分割线、适中圆角），不生硬。
- 不使用大面积渐变堆砌、不模仿模板化 SaaS；动效克制。

## 开屏动画合同

- 序列：KOS parent logo 浮现 → 与 KOSX logo 建立连接（对角线柔和淡出）→ KOSX logo 居中停留 → 黑场淡出、首页渐入。
- 光效：橙金色，右下角克制弧光；由 CSS 生成，不用参考图素材。
- 降级：`prefers-reduced-motion` 直接跳过；手机端缩短时长。
- 只在进入首页时播放，视图内路由切换不重播。

## 响应式与可访问性

- 移动端优先；手机（约 390px）导航与首页栏目需单独核对。
- 保留 skip-link、语义化标签、aria 标注；键盘焦点可见。

## 内容红线

- 正式文案、成员、活动、合作伙伴、X 数据缺失时保持空状态；禁止虚构文案、数据、截图与评价。
- 外链必须是真实地址；未知链接宁缺毋假。

## V1 之后（暂不实现）

- X（Twitter）内容自动抓取。
- 活动相册与详情页。
- 正式部署与 SEO 提审（sitemap/结构化数据）。
