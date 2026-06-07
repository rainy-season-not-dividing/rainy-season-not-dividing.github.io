<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">个人信息</h1>
    <p class="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
      我是 {{ siteConfig.name }}，{{ siteConfig.education.school }} {{ siteConfig.education.major }} 专业在读，
      在读时间 {{ siteConfig.education.period }}。绩点 {{ siteConfig.education.gpa }}，排名 {{ siteConfig.education.rank }}。
    </p>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      我目前主要关注
      <strong>边缘智能 / 多模态智能 / 云边协同 / 智能体系统 / 模型部署</strong>等方向，
      并且持续进行多模态建模、深度学习实验、高效推理优化与部署实践，具备基于 Python、PyTorch 等工具
      进行模型设计、训练与分析的实践经验。我围绕真实工业与传感器场景，持续进行多模态感知、边缘部署与系统设计相关研究，形成了
      <strong>1 篇已见刊EI检索会议论文</strong> 与 <strong>2 项发明专利（实质审查中）</strong>。
    </p>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      除科研经历外，我近期在实习项目中也接触并参与了多智能体应用系统相关工作，对智能体系统中的任务规划、知识检索、记忆机制、上下文管理以及多模块协同等问题有了更直接的实践理解。
      此前我也做过高并发后端、缓存优化、消息队列和搜索系统相关项目，并有
      Linux 云服务器部署、服务配置与项目上线实践。这些经历帮助我更好地理解智能体应用从原型设计到系统落地过程中的性能、可靠性、部署运维与工程集成问题。
    </p>

    <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-white">教育背景</h2>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
      <li><strong>学校：</strong>{{ siteConfig.education.school }}（211 院校）</li>
      <li><strong>专业：</strong>{{ siteConfig.education.major }}</li>
      <li><strong>学历：</strong>{{ siteConfig.education.degree }}</li>
      <li><strong>绩点：</strong>{{ siteConfig.education.gpa }}，排名 {{ siteConfig.education.rank }}</li>
      <li><strong>在读时间：</strong>{{ siteConfig.education.period }}</li>
    </ul>

    <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-white">个人特质</h2>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      我习惯先明确目标再拆解执行，遇到没接触过的问题会主动查资料、动手验证，不轻易搁置。
      我对“模型 + 系统 + 部署 + 落地”的结合型工作很感兴趣，既愿意从真实问题出发做研究，也愿意把方案真正实现成可运行的系统。
    </p>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>

