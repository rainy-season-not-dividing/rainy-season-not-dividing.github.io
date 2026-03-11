<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">论文与专利</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">会议论文、发明专利等学术成果。</p>

    <div class="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        会议论文一篇已见刊；发明专利两篇已受理。具体题目与期刊/会议名称可在简历或后续更新中查看。
      </p>
    </div>

    <ul class="mt-10 space-y-6">
      <li
        v-for="pub in publications"
        :key="pub.id"
        class="flex flex-wrap items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800"
      >
        <span
          class="rounded px-2.5 py-1 text-xs font-medium"
          :class="
            pub.type === '专利'
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
              : 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300'
          "
        >
          {{ pub.type }}
        </span>
        <div class="min-w-0 flex-1">
          <h2 class="font-medium text-gray-900 dark:text-white">{{ pub.title }}</h2>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ pub.authors.join(', ') }} · {{ pub.venue }} · {{ pub.year }}
          </p>
          <p v-if="pub.level" class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ pub.level }}</p>
        </div>
        <a v-if="pub.links.pdf" :href="pub.links.pdf" target="_blank" rel="noopener" class="text-sm text-primary-600 hover:underline dark:text-primary-400">
          PDF
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { publications } from '@/data/publications'
</script>
