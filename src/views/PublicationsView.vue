<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">论文与专利</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">围绕多模态感知、边缘部署与系统落地形成的论文与专利成果。</p>

    <div class="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        当前形成 1 篇已见刊会议论文与 2 项发明专利（实质审查中）。这些工作并非彼此割裂，而是围绕“多模态感知 + 边缘部署 + 系统设计”的同一研究主线展开。
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
          <p v-if="pub.abstract" class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {{ pub.abstract }}
          </p>
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
