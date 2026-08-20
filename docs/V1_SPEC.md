# KOSX.ai 官网 · V1 规格合同

本文件是 V1 的信息架构、内容与交互合同。只有新决定改变产品时才更新，并同步在 `DECISIONS.md` 留痕。

## 定位

KOSX 组织官网（`kosx.ai`）的静态多页面原型。推翻旧站重做，信息架构、排版、VI 深色主题与开屏动画已确认；各页面正式文案与真实数据待客户补充。

## 技术形态

- `index.html` + `assets/` 为内容、样式、交互和素材真源；无框架、无依赖安装。`npm run build` 生成六个子页面目录、`sitemap.xml` 与 `robots.txt`。
- 真实静态路径：导航使用可抓取的 `<a href>`；页面刷新时直接返回对应 HTML，不依赖 JavaScript 状态或 hash。
- 每个路径必须有独立 `title`、`meta description`、canonical 与唯一 H1；正式域名 canonical 为 `https://kosx.ai`。
- 旧 `#/members` 等地址只保留一次性兼容跳转，不再作为站内链接生成。
- 本地预览：`npm run dev`（先构建，再访问 `http://127.0.0.1:8765`）。

## 信息架构（7 个视图）

| 路由 | 名称 | 内容要点 |
|---|---|---|
| `/` | 首页 | Hero（定位语 + CTA）→ 合作伙伴信任带（流动、无编号）→ 01 我们是谁（大标题 + Mission/Vision）→ 02 我们如何创造价值（三个主入口：社群与内容/项目与交付/人与网络）→ 03 Insights from X → 04 最新活动（自动流动卡片，内容槽留空）|
| `/members` | 成员 | Core Team、Mentors、Builders；信息可公开，真实数据待补 |
| `/activities` | 活动 | 线上、线下、Something New、VersionX；照片与详情后续上传 |
| `/partners` | 合作伙伴 | 合作方展示 |
| `/cash-cow-club` | 搞钱研究所 | 内容更新、周报与对外输出；旗下 AI Workshop、灵感市集 |
| `/kosx-lab` | KOSX Lab | 将想法推进为真实项目 |
| `/contact-us` | 联系我们 | 加入/合作表单与联系方式 |

规则：新增一级页面必须同时登记 `data-view`、`data-route` 导航、构建页配置、检查页配置和 sitemap；`npm run check` 会逐页校验。

## 视觉合同

- 主题：深色 VI（近黑底 `--paper`、浅色文字 `--ink`、橙金 `--signal`），`color-scheme: dark`。
- 字体：全站统一标准黑体系栈（`Helvetica Neue / PingFang SC / Microsoft YaHei / Noto Sans CJK SC / Arial`，系统字体，不引入字体文件）；大标题字重 500、字距 -.02~-.03em。不用衬线/窄体混排（跨平台渲染不可控，2026-08-19 老师反馈后回退）。
- Logo：深色底一律使用 White 版本（`KOSX logo White.png` / `KOSX ICON White.png`）；Black 版本仅备浅色物料使用。
- 气质：大厂式紧凑——首屏克制、密度适中；模块化 + 大留白分隔（2026-08-20 起板块间不用 1px 横线、卡片不用描边，只用深色底 + 圆角 + 留白），不生硬、不堆砌工程感纹理（坐标纸网格禁用）。
- 文案原则：不写自我解释（「详细内容进入对应页面」式）、不写实现细节（「接入失败时保留入口」式）、不留开发水印；正式文案缺失时用「文案」占位，不虚构。
- 不使用大面积渐变堆砌、不模仿模板化 SaaS；动效克制。

## 开屏动画合同

- 序列：纯黑场（#000，无网格无光晕）→ KOSX Logo 单独在正中央淡入、停留约 1 秒 → Logo 直接飞向左上角成为页首 Logo → 数万颗粒子从右侧飘入聚合成「BUILD SOMETHING REAL.」（三行下行阶梯错位：BUILD 居左、SOMETHING 居中、REAL. 居右；粒子画面中不再有 Logo）→ **驻留**：粒子定型后完全静止（仅指针扰动回弹），底部双箭头持续脉动 → 用户下滑/上滑/键盘（Enter·Space·↓）→ 粒子淡出、黑场淡出、首页渐入。
- 进入方式：无自动前进、无 Skip 按钮；滚轮下滑、触摸上滑、点击双箭头、键盘均可进入。
- 画面元素只有纯黑底 + 粒子 + Logo：无网格、无光晕、无曙光（2026-08-19 用户决定），无 Connect/Create/Collaborate（首页底部与页脚已有，不进开屏）。
- 粒子：VOIDTYPE 移植模块（Three.js vendored，见 `THIRD_PARTY_NOTICES.md`），白色颗粒、纯黑底。
- 降级：WebGL 不可用或模块加载失败 → 静态 Logo + SLOGAN 短停；`prefers-reduced-motion` 直接静态版。
- 只在进入首页时播放；六个子路径直接显示内容，不播放开屏。无 Skip 按钮，双箭头、下滑手势与键盘进入。

## 响应式与可访问性

- 移动端优先；手机（约 390px）导航与首页栏目需单独核对。
- 保留 skip-link、语义化标签、aria 标注；键盘焦点可见。

## 内容红线

- 正式文案、成员、活动、合作伙伴、X 数据缺失时保持空状态；禁止虚构文案、数据、截图与评价。
- 外链必须是真实地址；未知链接宁缺毋假。

## V1 之后（暂不实现）

- X（Twitter）内容自动抓取。
- 活动相册与详情页。
- 正式文案完成后的结构化数据与 SEO 提审。
