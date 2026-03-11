<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">简历</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">在线查看或下载 PDF。</p>

    <div class="mt-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <p class="text-gray-600 dark:text-gray-300">
        如需完整版简历（含教育、项目、获奖、论文与专利等），请下载 PDF。
      </p>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener"
        class="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
      >
        下载简历 PDF
      </a>
    </div>

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
  </div>
</template>

<script setup lang="ts">
import { awards, volunteer } from '@/data/awards'
</script>
