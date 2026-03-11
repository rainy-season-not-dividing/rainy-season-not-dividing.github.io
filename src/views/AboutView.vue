<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">个人信息</h1>
    <p class="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
      我是 {{ siteConfig.name }}，{{ siteConfig.education.school }} {{ siteConfig.education.major }} 专业在读，
      预计 {{ siteConfig.education.period }}。绩点 {{ siteConfig.education.gpa }}，排名 {{ siteConfig.education.rank }}。
    </p>
    <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
      求职意向为 <strong>Java 后端开发</strong>。在校期间独立或协作完成多个高并发、分布式相关项目，
      熟悉 Spring Boot、MySQL、Redis、RabbitMQ 等常用技术栈，具备一定的系统设计与性能优化经验。
      曾获国家励志奖学金、校三好学生、西门子杯国家二等奖、网络技术挑战赛国家二等奖等荣誉，
      并有会议论文与发明专利经历。
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
      乐于在项目中承担从需求拆解、技术选型到实现与优化的完整链路，
      具备团队协作与文档整理习惯。业余通过技术博客与开源参与持续学习。
    </p>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>
