export interface ResearchItem {
  id: string
  title: string
  period: string
  role: string
  tags: string[]
  summary: string
  details: string
  links?: { paper?: string; pdf?: string; code?: string }
  status: '进行中' | '已结题' | '已发表'
}

export const researchItems: ResearchItem[] = [
  {
    id: 'dsammf-transformer',
    title: '基于 DSAMMF-Transformer 架构的涂层刀具磨损实时监测',
    period: '2024 - 2025',
    role: '学生第一作者',
    tags: ['智能制造', '边缘计算', '时序建模', 'Transformer', '多模态融合'],
    status: '已发表',
    summary:
      '提出 DSAMMF-Transformer：动态加权融合多源信号，并引入动态稀疏注意力降低复杂度，实现高精度、低时延的边缘端实时监测。',
    details: `
## 研究动机

刀具磨损早期难检测且工况动态变化明显；同时，现有深度模型/Transformer 推理开销较大，难以实时部署到边缘设备。

## 方法概述

- **动态阶段感知融合**：对振动/电流/声学信号按磨损阶段进行动态加权融合，提高对不同阶段与动态工况的适应性。
- **动态稀疏注意力**：保留 top-k 关键信息，将注意力复杂度由 \\(O(n^2)\\) 降至近似 \\(O(n\\log n)\\)，在资源受限场景下更易落地。

## 实验与结果

- 误差指标：MAE 约 **0.027**
- 推理时延：约 **20ms → 9ms（-55%）**
- 论文由 **ACM ICPS** 出版并被 **EI Compendex** 检索

## 我的贡献

作为学生第一作者，完成数据收集、模型构建、实验验证与优化迭代等工作。
    `.trim(),
    links: {
      paper: '',
      pdf: ''
    }
  },
  {
    id: 'llm-edge-compression',
    title: '基于大模型网络层融合压缩的传感器边端系统部署系统和方法',
    period: '2024 - 至今',
    role: '学生第一作者（专利）',
    tags: ['大模型', '模型压缩', '边端协同', '多模态'],
    status: '进行中',
    summary:
      '面向传感器边端部署的大模型资源约束与精度矛盾，提出网络层异构融合的轻量化方案，并按层组特性与设备负载进行动态边端协同部署。',
    details: `
## 问题背景

传感器边端设备通常算力/存储/功耗受限，但多模态任务对精度要求高，导致「资源」与「精度」矛盾突出。

## 核心思路

- **按网络层组特性进行异构融合与压缩**：在减参的同时尽量保留关键特征表达能力。
- **动态协同部署**：依据设备负载与层组特性，对推理链路进行边端协同划分，提高部署适应性与资源利用率。

## 我的贡献

学生第一作者，完成专利创新点构思、技术方案梳理与专利撰写，目前处于**实质审查**阶段。
    `.trim(),
    links: {}
  },
  {
    id: 'llm-multimodal-fusion',
    title: '大模型优化的集成传感器多模态数据边缘计算系统及方法',
    period: '2024 - 至今',
    role: '学生第一作者（专利）',
    tags: ['多模态融合', '动态权重', '边缘计算', '大模型驱动'],
    status: '进行中',
    summary:
      '针对多模态融合策略简单、权重固定、扩展难等问题，提出大模型驱动的融合策略与动态权重调整机制，提升任务适应性与新模态扩展能力。',
    details: `
## 痛点

传统多模态融合常见问题：融合策略单一、权重固定、加入新模态需要大量重构与重新训练，迁移成本高。

## 方法概述

- **大模型参与预处理与编码设计**：在边缘端做更合理的信息组织与压缩。
- **模态选择与融合顺序**：按方差/信息熵/相关性等指标确定核心模态与融合顺序，逐步融合。
- **动态权重**：结合验证集精确率与协同矩阵等反馈信号，动态调整不同模态权重，提升鲁棒性与可扩展性。

## 我的贡献

学生第一作者，完成专利创新点构思与撰写，目前处于**实质审查**阶段。
    `.trim(),
    links: {}
  }
]

export function getResearchById(id: string) {
  return researchItems.find((x) => x.id === id)
}

export function getResearchSorted() {
  const score = (s: ResearchItem['status']) => (s === '已发表' ? 2 : s === '进行中' ? 1 : 0)
  return [...researchItems].sort((a, b) => {
    const d = score(b.status) - score(a.status)
    if (d !== 0) return d
    return b.period.localeCompare(a.period)
  })
}

