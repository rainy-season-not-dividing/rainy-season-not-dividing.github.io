export interface Award {
  id: string
  name: string
  level: string
  time: string
  role?: string
  link?: string
}

export const awards: Award[] = [
  { id: '1', name: '国家励志奖学金', level: '国家级', time: '2024' },
  { id: '2', name: '校三好学生', level: '校级', time: '2024' },
  { id: '3', name: '“西门子杯”智能制造挑战赛自由探索赛道', level: '华中一赛区省特等奖', time: '2024' },
  { id: '4', name: '中国高校计算机大赛 - 网络技术挑战赛', level: '国家二等奖', time: '2024' },
  { id: '5', name: '全国大学生数学竞赛（非数 A 类）', level: '三等奖', time: '2024' }
]

export const volunteer = [
  { name: '院「萌芽」社区服务志愿者' },
  { name: '院一对一迎新服务志愿者' }
]
