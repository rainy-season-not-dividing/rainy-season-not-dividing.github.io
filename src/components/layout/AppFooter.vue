<template>
  <footer class="border-t border-gray-200 bg-gray-100 py-8 dark:border-slate-700 dark:bg-slate-800">
    <div class="mx-auto max-w-5xl px-4 text-center text-sm text-gray-600 dark:text-gray-400">
      <div class="flex justify-center gap-6 mb-4">
        <a v-if="siteConfig.links.github" :href="siteConfig.links.github" target="_blank" rel="noopener" class="hover:text-primary-600">GitHub</a>
        <a :href="`mailto:${siteConfig.links.email}`" class="hover:text-primary-600">邮箱</a>
      </div>
      <p>© {{ new Date().getFullYear() }} {{ siteConfig.name }} · Built with Vue 3 + Vite + Tailwind</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>
