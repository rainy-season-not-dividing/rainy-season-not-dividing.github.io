<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">技能与开源</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">技术栈概览与 GitHub 开源参与。</p>

    <div class="mt-10 space-y-8">
      <section v-for="group in skillGroups" :key="group.name" class="rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">{{ group.name }}</h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-slate-600 dark:text-gray-200"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>

    <section class="mt-10 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">开源与 GitHub</h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        个人项目与学习笔记托管于 GitHub，欢迎交流。
      </p>
      <a
        :href="siteConfig.links.github"
        target="_blank"
        rel="noopener"
        class="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      >
        <span>前往 GitHub</span>
        <span>→</span>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
import { skillGroups } from '@/data/skills'
</script>
