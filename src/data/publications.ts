export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: '期刊' | '会议' | '预印本' | '专利'
  level?: string
  citations?: number
  abstract?: string
  links: { pdf?: string; code?: string; slides?: string; bibtex?: string }
}

export const publications: Publication[] = [
  {
    id: 'paper-1',
    title: '基于 DSAMM-Transformer 架构的涂层刀具磨损实时监测',
    authors: ['朱雄雄', '等'],
    venue: 'ACM International Conference on Physical Science (ICPS)',
    year: 2025,
    type: '会议',
    level: 'EI 检索',
    abstract:
      '面向刀具磨损实时监测场景，设计 DSAMM-Transformer 多模态监测模型，融合振动、电流与声学信号，并引入动态稀疏注意力，将复杂度由 O(n²) 降至 O(n√n)。在公开工业数据集上实现 MAE≈0.027，并将推理时延由约 20ms 降至约 9ms，具备边缘实时部署价值。',
    links: {}
  },
  {
    id: 'patent-1',
    title: '基于大模型网络层融合压缩的传感器边端系统部署系统和方法',
    authors: ['朱雄雄', '等'],
    venue: '国家知识产权局',
    year: 2025,
    type: '专利',
    level: '发明专利（实质审查中）',
    abstract:
      '面向传感器边端部署中模型压缩易损失关键特征、跨设备协同复杂以及资源受限下精度与效率难以平衡的问题，设计基于网络层融合压缩的大模型部署方案，并结合 DFS 依赖分组、特性值分类与负载感知动态调度，实现更高效的边端协同部署。',
    links: {}
  },
  {
    id: 'patent-2',
    title: '大模型优化的集成传感器多模态数据边缘计算系统及方法',
    authors: ['朱雄雄', '等'],
    venue: '国家知识产权局',
    year: 2025,
    type: '专利',
    level: '发明专利（实质审查中）',
    abstract:
      '针对集成传感器多模态融合中策略简单、权重固定、新模态扩展难等问题，设计大模型优化的多模态边缘计算系统，通过模态特定编码、动态核心模态选择、相关性驱动融合与跨模态任务处理，提升系统适应性、扩展性与边缘场景下的计算效率。',
    links: {}
  }
]
