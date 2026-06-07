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
    id: 'multi-agent-internship',
    title: '多智能体应用系统实习项目',
    period: '2026.05 - 至今',
    institution: '实习项目',
    description: '参与多智能体相关应用系统实践，围绕任务规划、知识检索、记忆机制与上下文管理等问题开展需求理解、流程梳理和功能实现，重点关注智能体能力如何与真实业务流程、系统接口和工程部署结合。',
    contributions: [
      '参与多智能体系统相关模块的需求分析与流程梳理，理解任务拆解、工具调用、上下文传递和多轮协作中的关键约束',
      '接触并参与知识检索、记忆机制与上下文管理相关工作，关注信息组织、历史状态维护和结果可追溯性',
      '结合后端接口、数据流转和服务部署需求，理解大模型/智能体应用从原型到系统落地过程中的工程问题',
      '在项目实践中形成对智能体系统、模型应用和工程集成更直接的理解'
    ],
    techStack: ['多智能体系统', '大模型应用', '任务规划', '知识检索', '记忆机制', '上下文管理', '系统集成'],
    links: {},
    status: '进行中',
    featured: true
  },
  {
    id: 'dsamm-transformer-tool-wear',
    title: 'DSAMM-Transformer 刀具磨损多模态监测项目',
    period: '2025.03 - 2026.06',
    institution: '会议论文 / 科研项目',
    description: '面向涂层刀具磨损实时监测场景，构建多源传感器时序数据处理、模型训练、推理评估与结果分析流程。项目以振动、电流、声学/工艺信号为输入，设计基于动态多模态融合与动态稀疏注意力的 DSAMM-Transformer 模型，用于预测刀具磨损状态，并评估其在实时监测与边缘部署场景下的效率表现。',
    contributions: [
      '构建原始加工过程数据处理流程，按实验组切分长时序传感器数据，生成长度为 256 的滑动窗口样本，并完成振动、电流、声学/工艺特征的组织与标准化',
      '实现多模态时序数据集与训练管线，支持振动、电流、声学/工艺三路输入拼接、标签归一化、训练/验证集划分、NaN 处理与批量加载',
      '设计 DSAMM-Transformer 主体结构，包含动态多模态融合模块、top-k 动态稀疏注意力、残差连接、LayerNorm、FFN 与回归预测头',
      '实现基于磨损阶段的动态融合策略，使模型能够根据样本阶段选择不同融合权重，增强不同磨损阶段下的多传感器表征能力',
      '完成模型训练与评估，使用 HuberLoss、AdamW、学习率调度、梯度裁剪和 TensorBoard 日志记录，跟踪 MSE、MAE、R2、推理延迟与内存占用等指标',
      '实验中模型 MAE 达到约 0.027-0.028，推理延迟降至约 9ms，为实时监测和边缘侧部署提供了效率评估依据'
    ],
    techStack: ['PyTorch', 'Transformer', '多模态时序建模', '动态多模态融合', '动态稀疏注意力', 'HuberLoss', 'AdamW', 'TensorBoard', '推理效率评估'],
    links: {},
    status: '已发表',
    featured: true
  },
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
  /*
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
  */
]


