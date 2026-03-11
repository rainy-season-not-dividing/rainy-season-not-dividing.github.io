<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
    <nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
      <router-link to="/" class="text-lg font-semibold text-primary-600 dark:text-primary-400">
        {{ siteConfig.name }}
      </router-link>
      <ul class="flex items-center gap-6 text-sm">
        <li><router-link to="/" class="nav-link">首页</router-link></li>
        <li><router-link to="/about" class="nav-link">关于</router-link></li>
        <li><router-link to="/research" class="nav-link">科研经历</router-link></li>
        <li><router-link to="/projects" class="nav-link">竞赛/编程经历</router-link></li>
        <li><router-link to="/skills" class="nav-link">技能/开源</router-link></li>
        <li><router-link to="/blog" class="nav-link">博客</router-link></li>
        <li><router-link to="/cv" class="nav-link">简历</router-link></li>
        <li><router-link to="/contact" class="nav-link">联系</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400;
}
.nav-link.router-link-active {
  @apply font-medium text-primary-600 dark:text-primary-400;
}
</style>
