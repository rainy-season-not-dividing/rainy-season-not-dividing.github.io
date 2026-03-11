<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">科研经历</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">科研项目、论文与专利相关经历（支持展开查看详情）。</p>

    <ul class="mt-10 space-y-6">
      <li
        v-for="item in items"
        :key="item.id"
        class="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
      >
        <router-link :to="`/research/${item.id}`" class="block">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded px-2.5 py-1 text-xs font-medium"
              :class="
                item.status === '已发表'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                  : item.status === '进行中'
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                    : 'bg-gray-100 text-gray-600 dark:bg-slate-600 dark:text-gray-300'
              "
            >
              {{ item.status }}
            </span>
            <h2 class="min-w-0 flex-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
              {{ item.title }}
            </h2>
          </div>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ item.period }} · {{ item.role }}</p>
          <p class="mt-3 text-gray-600 dark:text-gray-300">{{ item.summary }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="t in item.tags"
              :key="t"
              class="rounded bg-primary-50 px-2 py-1 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
            >
              {{ t }}
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getResearchSorted } from '@/data/research'
const items = getResearchSorted()
</script>

