export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  url: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: '157246339',
    title: 'Springcloud初学',
    date: '2026-02-10',
    summary: '面向初学者的 Spring Cloud 入门梳理：整体架构、常见组件定位与一个最小可运行的微服务拆分思路。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/157246339',
    content: `
## 主要内容概括

- Spring Cloud 解决什么问题：服务拆分后如何做**注册发现、负载均衡、配置管理、网关、容错**等。
- 常见组件的职责边界（你在项目里该把能力放到哪里）。
- 一个最小 Demo 的搭建步骤与配置要点：从单体到微服务的落地路径。

## 建议读法

先理解「为什么需要这些组件」，再跟着搭一遍最小项目，最后结合自己的业务逐步加能力。
    `.trim()
  },
  {
    slug: '152554495',
    title: 'rabbitMQ续谈',
    date: '2025-10-05',
    summary: '围绕 RabbitMQ 的核心概念与可靠性：交换机/队列/绑定、确认机制、消息堆积与常见排查思路。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/152554495',
    content: `
## 主要内容概括

- RabbitMQ 核心模型：**Exchange / Queue / RoutingKey / Binding** 的关系与常见用法。
- 可靠性与一致性：生产者确认、消费者确认、重试与死信的基本思路。
- 性能与稳定性：消息堆积时如何判断瓶颈在生产、网络还是消费端，以及常见的优化方向。
    `.trim()
  },
  {
    slug: '152445935',
    title: '序列化和反序列化（redis为例）',
    date: '2025-10-03',
    summary: '解释 Redis 场景下序列化/反序列化的必要性与常见方案：JSON、JDK、Kryo 等，以及兼容性与性能取舍。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/152445935',
    content: `
## 主要内容概括

- 为什么需要序列化：对象如何在网络/缓存中存储与传输。
- 常见方案对比：可读性、体积、速度、跨语言与版本兼容。
- 实战注意点：字段变更带来的兼容性问题、序列化安全与性能优化建议。
    `.trim()
  },
  {
    slug: '151332685',
    title: 'DIY项目-校遇',
    date: '2025-09-09',
    summary: '对“校遇”项目的梳理：业务模块拆分、关键技术选型（缓存/消息/检索/实时通信）与优化点。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/151332685',
    content: `
## 主要内容概括

- 项目背景与核心功能：动态流、任务流转、通知/消息等。
- 技术选型：Redis（缓存与数据结构应用）、RabbitMQ（异步解耦）、ES（检索）、WebSocket（实时消息）。
- 性能优化点：热点数据缓存、并发一致性与接口延迟优化的思路。
    `.trim()
  },
  {
    slug: '151230340',
    title: '苍穹外卖优化-续',
    date: '2025-09-06',
    summary: '继续记录外卖系统的性能优化：缓存设计、热点查询治理、下单链路稳定性与压测指标的观察方式。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/151230340',
    content: `
## 主要内容概括

- 缓存策略：如何选 key、设置 TTL、以及避免穿透/击穿/雪崩。
- 下单链路：异步化与削峰、幂等与一致性、失败补偿与重试。
- 压测与指标：QPS、P99 延迟与错误率如何定位问题、验证优化有效性。
    `.trim()
  },
  {
    slug: '151113297',
    title: '苍穹外卖优化过程遇到的问题',
    date: '2025-09-04',
    summary: '整理外卖优化过程中遇到的坑：缓存一致性、并发异常、事务边界、消息可靠性等典型问题与解决思路。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/151113297',
    content: `
## 主要内容概括

- 缓存一致性：更新/失效时机、双写问题与常见兜底方案。
- 并发问题：重复下单、超卖、锁粒度选择与死锁排查。
- 消息队列与异步：消息丢失、重复消费、幂等与补偿策略。
    `.trim()
  },
  {
    slug: '150015419',
    title: '黑马redis项目跟做01',
    date: '2025-08-11',
    summary: 'Redis 项目跟做笔记：数据结构选型、缓存基本模式、常见问题（穿透/击穿/雪崩）与实现要点。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/150015419',
    content: `
## 主要内容概括

- Redis 常用数据结构与典型业务映射。
- Cache-Aside 的落地步骤与注意事项。
- 常见缓存问题的“现象 → 原因 → 方案”式总结，适合复盘与查漏补缺。
    `.trim()
  },
  {
    slug: '149578712',
    title: '苍穹外卖重拾02--细节点',
    date: '2025-07-25',
    summary: '外卖项目复盘的细节篇：关键接口实现细节、边界条件处理、以及更贴近工程实践的注意事项。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149578712',
    content: `
## 主要内容概括

- 关键业务链路的细节梳理：参数校验、异常处理与日志定位。
- 缓存/事务/并发的“边界条件”处理（工程里最容易踩坑的部分）。
- 适合对照代码逐段复盘，提升实现的鲁棒性。
    `.trim()
  },
  {
    slug: '149487626',
    title: 'Linux--基于菜鸟的二次学习',
    date: '2025-07-21',
    summary: 'Linux 二次学习笔记：常用命令、权限/用户、进程与网络排查等，偏实用导向。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149487626',
    content: `
## 主要内容概括

- 常用命令与常见场景：文件/目录、文本处理、权限与用户管理。
- 进程与端口排查：定位“服务起不来/端口被占用/CPU 飙高”等问题。
- 日常开发/部署中高频用到的 Linux 操作集合。
    `.trim()
  },
  {
    slug: '149436639',
    title: '苍穹外卖重拾01',
    date: '2025-07-20',
    summary: '外卖项目重拾第一篇：整体架构与主要模块、以及后续优化的切入点。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149436639',
    content: `
## 主要内容概括

- 项目整体结构与模块划分：你需要先建立“全局地图”。
- 核心业务链路：从请求到落库/缓存/消息的主路径。
- 后续优化方向：热点、慢查询、缓存一致性与高并发下单的治理思路。
    `.trim()
  },
  {
    slug: '149252901',
    title: 'vue3--基于菜鸟的二次学习',
    date: '2025-07-10',
    summary: 'Vue 3 学习笔记：Composition API、响应式、组件通信与常见开发模式的回顾。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149252901',
    content: `
## 主要内容概括

- Vue 3 核心变化：Composition API 与响应式机制的关键点。
- 组件开发：props/emits、插槽、状态管理的基本实践。
- 常见坑点与最佳实践：适合快速回忆与上手。
    `.trim()
  },
  {
    slug: '149233352',
    title: 'js--源自菜鸟的二次学习02',
    date: '2025-07-10',
    summary: 'JavaScript 基础回顾（②）：常用语法/对象/数组等核心知识点的梳理与示例。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149233352',
    content: `
## 主要内容概括

- JS 常用内置对象与数组方法的用法与注意点。
- 结合示例理解常见概念，便于做题或写业务时快速查找。
    `.trim()
  },
  {
    slug: '149215930',
    title: 'js--源自菜鸟的二次学习01',
    date: '2025-07-09',
    summary: 'JavaScript 基础回顾（①）：变量/类型/运算与基础语法的系统复习。',
    url: 'https://blog.csdn.net/2303_79435934/article/details/149215930',
    content: `
## 主要内容概括

- JS 基本语法与类型系统的复习：基础但高频。
- 配合示例理解易混点（类型转换、作用域等），打好后续学习基础。
    `.trim()
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsSorted() {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1))
}
