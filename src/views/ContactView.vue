<template>
  <div class="mx-auto max-w-2xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">联系我</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">欢迎通过以下方式联系。</p>

    <ul class="mt-10 space-y-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <li class="flex items-center gap-4">
        <span class="text-gray-500 dark:text-gray-400">邮箱</span>
        <a :href="`mailto:${siteConfig.links.email}`" class="text-primary-600 hover:underline dark:text-primary-400">
          {{ siteConfig.links.email }}
        </a>
      </li>
      <li class="flex items-center gap-4">
        <span class="text-gray-500 dark:text-gray-400">电话</span>
        <a :href="`tel:${siteConfig.phone}`" class="text-primary-600 hover:underline dark:text-primary-400">
          {{ siteConfig.phone }}
        </a>
      </li>
      <li class="flex items-center gap-4">
        <span class="text-gray-500 dark:text-gray-400">所在地</span>
        <span class="text-gray-700 dark:text-gray-200">{{ siteConfig.location }}</span>
      </li>
      <li class="flex items-center gap-4">
        <span class="text-gray-500 dark:text-gray-400">GitHub</span>
        <a :href="siteConfig.links.github" target="_blank" rel="noopener" class="text-primary-600 hover:underline dark:text-primary-400">
          {{ siteConfig.links.github }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>
