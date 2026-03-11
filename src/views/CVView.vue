<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">获奖荣誉</h1>

    <section class="mt-10 space-y-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">获奖与荣誉</h2>
      <ul class="space-y-2 text-gray-600 dark:text-gray-300">
        <li v-for="a in awards" :key="a.id">
          <strong>{{ a.name }}</strong> · {{ a.level }}（{{ a.time }}）
        </li>
      </ul>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">志愿服务</h2>
      <ul class="space-y-1 text-gray-600 dark:text-gray-300">
        <li v-for="(v, i) in volunteer" :key="i">{{ v.name }}</li>
      </ul>
    </section>

    <p class="mt-2 text-gray-600 dark:text-gray-400">为保护隐私，本站不提供简历文件直链下载。</p>

    <div class="mt-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <p class="text-gray-600 dark:text-gray-300">
        如需完整版简历（含教育、科研、项目、获奖等），欢迎通过联系方式与我沟通获取。
      </p>
      <router-link to="/contact"
        class="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
        联系我获取简历
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { awards as awardsData, volunteer as volunteerData } from '@/data/awards'

const awards = awardsData
const volunteer = volunteerData
</script>
