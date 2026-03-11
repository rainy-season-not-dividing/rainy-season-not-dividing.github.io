<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">技术博客</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">项目复盘与技术总结。</p>

    <ul class="mt-10 space-y-6">
      <li
        v-for="post in sortedPosts"
        :key="post.slug"
        class="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800"
      >
        <router-link :to="`/blog/${post.slug}`" class="block">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            {{ post.title }}
          </h2>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</p>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{{ post.summary }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getPostsSorted } from '@/data/posts'
const sortedPosts = getPostsSorted()
</script>
