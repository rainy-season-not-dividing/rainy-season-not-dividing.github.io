export interface ProjectLink {
  paper?: string
  code?: string
  demo?: string
  video?: string
}

export interface Project {
  id: string
  title: string
  period: string
  advisor?: string
  institution?: string
  description: string
  contributions: string[]
  techStack: string[]
  image?: string
  links: ProjectLink
  status: '进行中' | '已结题' | '已发表'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'xiao-yu',
    title: '校遇 - 校园场景社交服务平台',
    period: '2025.09 - 2025.10',
    institution: '团队协作（2 后端 + 2 前端）',
    description: '团队开发校园场景社交服务平台，覆盖动态展示、任务流转、实时消息等核心场景。针对「动态页高延迟、并发下单数据不一致」等痛点优化，使系统支撑 3000+ 并发时错误率为 0，核心接口性能提升 200 倍以上。',
    contributions: [
      '统筹 4 人团队分工，拆解需求为动态/通知/认证/用户/好友/任务 6 大模块，2 个月内完成全量开发与联调并打包 App 推广运营',
      '动态页优化：Redis 缓存 + 自定义序列化器，布隆过滤器防穿透、随机过期防雪崩，50 并发下 QPS 从 11 提升至 2818，P99 从 12.1s 降至 51ms',
      '并发订单：库存校验-订单创建-库存扣减封装为 MySQL 事务，行锁串行化，500 并发下下单错误率 0%，数据一致性 100%',
      'RabbitMQ+WebSocket 消息异步推送，ElasticSearch 支持动态精准检索'
    ],
    techStack: ['SpringBoot 3.5', 'MySQL 8.0', 'MyBatis-Plus', 'Redis', 'ElasticSearch', 'RabbitMQ', 'WebSocket', '阿里云 OSS'],
    links: {},
    status: '已结题',
    featured: true
  },
  {
    id: 'dianping',
    title: '仿大众点评 - 高并发后端',
    period: '2025.07',
    description: '独立开发仿大众点评的高并发应用，核心解决分布式环境下的性能、一致性及线程安全问题。',
    contributions: [
      '秒杀系统：Redis+Lua 脚本原子扣减库存与资格校验，Redisson 分布式锁一人一单，Redis Stream 异步下单削峰填谷，解决超卖与集群安全',
      '缓存方案：Cache-Aside 缓存商户信息，空值缓存、随机过期、分布式锁应对穿透/雪崩/击穿，降低数据库压力约 80%',
      '基于 Redis 实现分布式 Session、GEO 附近商户、Set/ZSet 关注点赞、BitMap 签到、HyperLogLog UV 统计'
    ],
    techStack: ['SpringBoot', 'MySQL', 'MyBatis-Plus', 'Redis', 'Redisson', 'Redis Stream'],
    links: {},
    status: '已结题',
    featured: true
  },
  {
    id: 'waimai',
    title: '外卖后台管理系统',
    period: '2025.05',
    description: '独立开发餐饮系统后端，实现员工、菜品、订单全链路管理。后期独立重构与二次迭代，针对「开发效率低、热点查询压力大、高并发下单异常」三大痛点优化，在保障业务完整性的同时，将系统性能与并发承载能力提升 5 倍以上。',
    contributions: [
      'Redis 多级缓存 + RabbitMQ 异步下单，解决常见缓存问题，实现 1000 并发 0 异常、QPS 增加 3 倍、P99 延迟下降约 90%',
      'Spring Cache + Redis 缓存菜品，@Cacheable/@CacheEvict 保证一致性，菜品查询从 100ms+ 降至 15ms，数据库读请求减少约 70%'
    ],
    techStack: ['SpringBoot', 'MySQL', 'MyBatis', 'Redis', 'RabbitMQ', 'Spring Cache', '阿里云 OSS'],
    links: {},
    status: '已结题',
    featured: true
  }
]
