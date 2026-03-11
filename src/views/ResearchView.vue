<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">竞赛/编程经历</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">工程项目、系统优化与编程相关经历。</p>

    <div class="mt-10 space-y-8">
      <article
        v-for="p in projects"
        :key="p.id"
        class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <div class="flex flex-wrap items-center gap-2">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">{{ p.title }}</h2>
          <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-slate-600 dark:text-gray-300">
            {{ p.period }}
          </span>
          <span
            class="rounded-full px-2.5 py-0.5 text-xs"
            :class="
              p.status === '已发表'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                : p.status === '进行中'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-slate-600 dark:text-gray-300'
            "
          >
            {{ p.status }}
          </span>
        </div>
        <p v-if="p.institution" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ p.institution }}</p>
        <p class="mt-4 text-gray-600 dark:text-gray-300">{{ p.description }}</p>
        <ul class="mt-4 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
          <li v-for="(c, i) in p.contributions" :key="i">{{ c }}</li>
        </ul>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="t in p.techStack"
            :key="t"
            class="rounded bg-primary-50 px-2 py-1 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
          >
            {{ t }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'
</script>
