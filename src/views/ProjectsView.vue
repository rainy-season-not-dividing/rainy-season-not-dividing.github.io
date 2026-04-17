<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">技术积累</h1>
    <p class="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">
      这一页优先展示和当前科研主线直接相关的技术能力与代码积累，重点放在
      <span class="font-medium text-gray-900 dark:text-white">AI系统、边缘智能、多模态应用与工程落地</span>
      上。Java 后端能力继续保留，但作为系统实现支撑，不再作为主展示主线。
    </p>

    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">研究相关技术能力</h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">按导师视角组织，而不是单纯堆技术名词。</p>
        </div>
      </div>
      <div class="mt-6 grid gap-6 md:grid-cols-2">
        <section
          v-for="group in skillGroups"
          :key="group.name"
          class="rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ group.name }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ group.summary }}</p>
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
    </section>

    <section class="mt-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">代表性 Python / 模型代码积累</h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        本地代码并不是零散练习，而是沿着“任务建模 → 实验比较 → 结果复盘 → 向边缘与多模态延展”的路线持续积累。
      </p>
      <div class="mt-6 grid gap-6 md:grid-cols-2">
        <article
          v-for="item in codeHighlights"
          :key="item.title"
          class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ item.summary }}</p>
          <ul class="mt-4 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li v-for="point in item.items" :key="point">{{ point }}</li>
          </ul>
          <p class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ item.note }}</p>
        </article>
      </div>
    </section>

    <section class="mt-10 rounded-xl border border-primary-100 bg-primary-50/60 p-6 dark:border-primary-900/40 dark:bg-primary-900/10">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">说明</h2>
      <p class="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
        为避免把个人网站做成纯求职型后端作品集，这里公开展示优先聚焦和保研方向一致的技术积累。工程类后端项目仍保留在
        “竞赛/编程经历” 页面，用来证明系统实现和落地能力；研究相关的 Python、模型和神经网络内容则在本页前置展示。
      </p>
      <p class="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
        目前部分代码仍在本地持续整理，公开仓库会优先选择结构更完整、表达更统一、和研究主线更一致的内容逐步开放。
      </p>
    </section>

    <section class="mt-10 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">GitHub 与公开代码</h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        公开仓库主要作为精选展示入口，后续会优先补充边缘模型优化、多模态实验和研究相关代码整理。
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
import { codeHighlights, skillGroups } from '@/data/skills'
import { siteConfig } from '@/data/site'
</script>
