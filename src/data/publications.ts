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
    title: '基于 DSAMMF-Transformer 架构的涂层刀具磨损实时监测',
    authors: ['朱雄雄', '等'],
    venue: 'ACM International Conference on Physical Science (ICPS)',
    year: 2025,
    type: '会议',
    level: 'EI 检索',
    abstract:
      '提出 DSAMMF-Transformer 架构，对多源振动/电流/声学信号进行动态加权融合，并引入动态稀疏注意力，将复杂度由 O(n²) 降至 O(n log n)，在保持 MAE≈0.027 的同时将推理延迟由约 20ms 降至 9ms，具备边缘实时部署价值。',
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
      '面向大模型在传感器边端部署的资源受限与多模态精度矛盾，提出基于网络层异构融合的轻量化方法，并按层组特性与设备负载进行动态边端协同部署，在减参保特征的前提下提升资源利用率与部署适应性。',
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
      '针对集成传感器多模态融合中策略简单、权重固定、新模态扩展难等问题，提出大模型驱动的多模态边缘计算系统：大模型参与预处理与编码设计，按方差/信息熵/相关性确定核心模态与融合顺序，并结合小数据集微调与验证集表现自适应调整模态权重。',
    links: {}
  }
]
