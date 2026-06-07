export interface SkillGroup {
  name: string
  summary: string
  items: string[]
}

export interface CodeHighlight {
  title: string
  summary: string
  items: string[]
  note: string
}

export const skillGroups: SkillGroup[] = [
  {
    name: '编程语言与工具基础',
    summary: '主要围绕 Python、PyTorch 和实验分析，服务于多模态建模、边缘优化和相关研究实践。',
    items: ['Python', 'NumPy / Pandas', 'scikit-learn', 'PyTorch', '实验记录与结果分析']
  },
  {
    name: '模型构建与训练流程',
    summary: '覆盖从任务识别、基线选择到训练、验证、调参与误差分析的完整流程。',
    items: ['任务建模与基线设计', '损失函数 / 优化器 / 学习率调度', 'Early Stopping', '验证集评估', '错误分析与实验对比']
  },
  {
    name: '多模态与时序建模',
    summary: '围绕多传感器、多模态和序列问题开展建模与实验。',
    items: ['多模态样本构建', '图像-文本交互融合', 'BiLSTM / Transformer 实践', '动态权重与特征融合', '时序信号建模']
  },
  {
    name: '边缘部署与模型优化',
    summary: '关注资源约束下的精度、时延权衡以及部署可行性。',
    items: ['动态量化', '知识蒸馏', '注意力头剪枝', '轻量骨干网络比较', '高效推理评估', '边缘指标评估与候选模型选择']
  },
  {
    name: '智能体系统与大模型应用实践',
    summary: '来自近期多智能体实习与大模型应用项目实践，关注智能体系统中的任务组织、信息获取与上下文管理。',
    items: ['多智能体协作流程', '任务规划', '知识检索', '记忆机制', '上下文管理', '大模型应用系统实现']
  },
  {
    name: '云服务器部署与云边协同',
    summary: '结合后端工程、边缘部署和云端服务经验，关注模型与应用在云端、边缘端之间的部署和协同运行。',
    items: ['Linux 云服务器部署', 'Docker', 'Nginx / 反向代理', '服务进程管理', '云边协同部署理解', '推理服务与后端接口集成']
  },
  {
    name: '工程实现支撑',
    summary: '用于支撑系统实现、推理服务和工程落地。',
    items: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ / Kafka', 'ElasticSearch', 'Docker', 'Linux']
  }
]

export const codeHighlights: CodeHighlight[] = [
  {
    title: '边缘模型优化实验线',
    summary: '围绕边缘设备约束，持续比较量化、蒸馏、剪枝和候选模型选择对精度、时延和资源占用的影响。',
    items: [
      '动态量化效果对比与误差拆分',
      '蒸馏训练与监督训练对照实验',
      '注意力头剪枝后的性能恢复',
      '输入长度 / Batch Size / 候选模型的边缘权衡分析'
    ],
    note: '对应本地目录：edge_model_step_by_step'
  },
  {
    title: '多模态建模实验线',
    summary: '从基础配对样本构建出发，逐步扩展到预训练图像编码器、交互融合、文本编码与误差分析。',
    items: [
      '多模态配对样本构建与基线实现',
      '预训练图像编码器接入',
      '交互式融合结构对比',
      'BiLSTM 文本编码、Prompt 模板与 Hard Negative 实验'
    ],
    note: '对应本地目录：multimodal_step_by_step'
  },
  {
    title: '轻量骨干网络比较',
    summary: '围绕 MobileOne 等轻量骨干网络进行结构选择和边缘性能比较，强调“模型选型”而不是只看单点精度。',
    items: [
      'Cross-backbone Benchmark',
      'Minimal Variant Benchmark',
      '精度 / 时延权衡可视化',
      '为后续端侧部署和模型选型提供依据'
    ],
    note: '对应本地目录：round2_edge_mobileone'
  },
  {
    title: '实验记录与复盘体系',
    summary: '为表格、视觉、文本、多模态和边缘任务建立结构化实验记录，方便复盘和后续研究延展。',
    items: [
      '统一记录任务、数据划分、模型结构与超参数',
      '沉淀实验观察与下一步动作',
      '便于横向比较不同模型与策略',
      '为后续模型优化和应用提供依据'
    ],
    note: '对应本地目录：experiment_records'
  }
]

