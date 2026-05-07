<template>
  <div class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">技术与代码</h1>
    <p class="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">
      这里整理了我在科研与工程实践中使用的技术能力与代码内容，主要包括
      <span class="font-medium text-gray-900 dark:text-white">Python / PyTorch、多模态建模、边缘优化</span>
      以及系统实现相关经验。
    </p>

    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">研究相关技术能力</h2>
          <!-- <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">按研究与工程场景组织，便于快速查看当前较稳定的能力结构。</p> -->
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
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Python / 模型实战代码</h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        这些代码主要围绕任务建模、实验比较和结果复盘展开，并逐步延伸到多模态和边缘优化方向。
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
          <!-- <p class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ item.note }}</p> -->
        </article>
      </div>
    </section>

    <section class="mt-10 rounded-xl border border-primary-100 bg-primary-50/60 p-6 dark:border-primary-900/40 dark:bg-primary-900/10">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">概况</h2>
      <p class="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
        当前的工作方向集中在多模态建模、边缘模型优化、轻量网络选型和实验记录管理。此外，我在 Java 后端开发和系统实现方面也有较完整的实践经验。
      </p>
      <p class="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
        公开仓库会优先整理结构更完整、表达更统一、与当前研究方向更相关的部分记录。
      </p>
    </section>

    <section class="mt-10 rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">GitHub 与公开代码</h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        GitHub 中持续整理个人项目与学习代码，后续会优先补充多模态、边缘优化和研究相关实现。
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
