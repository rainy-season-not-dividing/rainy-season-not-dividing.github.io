<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">个人信息</h1>
    <p class="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
      我是 {{ siteConfig.name }}，{{ siteConfig.education.school }} {{ siteConfig.education.major }} 专业在读，
      预计 {{ siteConfig.education.period }}。绩点 {{ siteConfig.education.gpa }}，排名 {{ siteConfig.education.rank }}。
    </p>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      当前更明确的研究主线是
      <strong>AI系统 / 边缘智能 / 多模态应用 / 云边协同 / 工程落地</strong>。
      我围绕真实工业与传感器场景，持续进行多模态感知、边缘部署与系统设计相关研究，形成了
      <strong>1 篇已见刊会议论文</strong> 与 <strong>2 项发明专利（实质审查中）</strong>。
    </p>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      与此同时，我也具备比较扎实的系统实现能力。独立或协作完成过高并发、缓存、消息系统、搜索与服务端联调相关项目，
      熟悉 Spring Boot、MySQL、Redis、RabbitMQ、ElasticSearch 等技术栈。
      这部分能力对我而言不是与科研割裂的“另一条线”，而是后续做 AI 系统、部署优化与工程落地的重要支撑。
    </p>

    <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-white">教育背景</h2>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
      <li><strong>学校：</strong>{{ siteConfig.education.school }}（211 院校）</li>
      <li><strong>专业：</strong>{{ siteConfig.education.major }}</li>
      <li><strong>学历：</strong>{{ siteConfig.education.degree }}</li>
      <li><strong>绩点：</strong>{{ siteConfig.education.gpa }}，排名 {{ siteConfig.education.rank }}</li>
      <li><strong>毕业时间：</strong>{{ siteConfig.education.period }}</li>
    </ul>

    <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-white">个人特质</h2>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      我更适合做“模型 + 系统 + 部署 + 落地”结合型工作，既愿意从真实问题出发做研究，也愿意把方案真正实现成可运行的系统。
      在导师视角下，我希望自己不是“只会调模型”或“只会写后端”的单一类型，而是能在科研与工程之间建立连接的复合型学生。
    </p>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>
