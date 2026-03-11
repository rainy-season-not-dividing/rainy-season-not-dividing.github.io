<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 dark:from-slate-800 dark:to-slate-900">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <div class="mb-6 inline-block h-32 w-32 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-4xl font-bold text-primary-600 dark:text-primary-400">
          {{ siteConfig.name.charAt(0) }}
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          {{ siteConfig.name }}
        </h1>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">
          {{ siteConfig.tagline }}
        </p>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          {{ siteConfig.jobTarget }}
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in siteConfig.tags"
            :key="tag"
            class="rounded-full bg-primary-100 px-4 py-1.5 text-sm text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/research"
            class="rounded-lg bg-primary-600 px-6 py-2.5 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            查看科研经历
          </router-link>
          <router-link
            to="/contact"
            class="rounded-lg border border-gray-300 px-6 py-2.5 text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            联系我
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">快速导航</h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <router-link
            to="/research"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
          >
            <span class="text-2xl">📂</span>
            <h3 class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">科研经历</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">科研项目、论文与专利</p>
          </router-link>
          <router-link
            to="/projects"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
          >
            <span class="text-2xl">📄</span>
            <h3 class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">竞赛/编程经历</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">工程项目与竞赛奖项</p>
          </router-link>
          <router-link
            to="/skills"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
          >
            <span class="text-2xl">🔧</span>
            <h3 class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">技能与开源</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">技术栈与 GitHub</p>
          </router-link>
          <router-link
            to="/blog"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
          >
            <span class="text-2xl">✍️</span>
            <h3 class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">技术博客</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">原创技术文章</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="border-t border-gray-200 py-16 dark:border-slate-700">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">最新动态</h2>
        <ul class="mt-8 space-y-4">
          <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
            <span class="text-sm text-gray-500 dark:text-gray-400">2025.03</span>
            <span>个人主页上线，集成项目经历与博客。</span>
          </li>
          <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
            <span class="text-sm text-gray-500 dark:text-gray-400">2025.02</span>
            <span>校遇项目完成，支撑 3000+ 并发 0 错误。</span>
          </li>
          <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
            <span class="text-sm text-gray-500 dark:text-gray-400">2025.01</span>
            <span>会议论文见刊，发明专利两篇已受理。</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>
