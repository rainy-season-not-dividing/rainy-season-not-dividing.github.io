<template>
  <div class="mx-auto max-w-3xl px-4 py-12" v-if="item">
    <router-link to="/research" class="text-sm text-primary-600 hover:underline dark:text-primary-400">
      ← 返回科研经历
    </router-link>

    <div class="mt-6">
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
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ item.title }}</h1>
      </div>
      <p class="mt-2 text-gray-500 dark:text-gray-400">{{ item.period }} · {{ item.role }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="t in item.tags"
          :key="t"
          class="rounded bg-primary-50 px-2 py-1 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
        >
          {{ t }}
        </span>
      </div>
    </div>

    <div class="mt-8">
      <MarkdownContent :content="item.details" />
    </div>

    <div v-if="hasLinks" class="mt-10 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">相关链接</h2>
      <ul class="mt-4 space-y-2 text-sm">
        <li v-if="item.links?.paper">
          <a :href="item.links.paper" target="_blank" rel="noopener" class="text-primary-600 hover:underline dark:text-primary-400">Paper</a>
        </li>
        <li v-if="item.links?.pdf">
          <a :href="item.links.pdf" target="_blank" rel="noopener" class="text-primary-600 hover:underline dark:text-primary-400">PDF</a>
        </li>
        <li v-if="item.links?.code">
          <a :href="item.links.code" target="_blank" rel="noopener" class="text-primary-600 hover:underline dark:text-primary-400">Code</a>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="mx-auto max-w-3xl px-4 py-12 text-center">
    <p class="text-gray-500 dark:text-gray-400">科研经历未找到</p>
    <router-link to="/research" class="mt-4 inline-block text-primary-600 hover:underline dark:text-primary-400">返回科研经历</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownContent from '@/components/MarkdownContent.vue'
import { getResearchById } from '@/data/research'

const route = useRoute()
const item = computed(() => getResearchById(route.params.id as string))
const hasLinks = computed(() => {
  const l = item.value?.links
  return !!(l?.paper || l?.pdf || l?.code)
})
</script>

