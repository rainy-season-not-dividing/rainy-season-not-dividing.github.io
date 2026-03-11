<template>
  <div class="mx-auto max-w-3xl px-4 py-12" v-if="post">
    <router-link to="/blog" class="text-sm text-primary-600 hover:underline dark:text-primary-400">←
      返回博客列表</router-link>
    <h1 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">{{ post.title }}</h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400">{{ post.date }}</p>
    <div
      class="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-300">
      本页为内容概览，阅读全文请跳转至 CSDN 原文。
    </div>
    <div class="mt-6">
      <MarkdownContent :content="post.content" />
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      <a :href="post.url" target="_blank" rel="noopener"
        class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
        去 CSDN 阅读原文
      </a>
      <router-link to="/blog"
        class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-700">
        返回列表
      </router-link>
    </div>
    <div class="mt-12 border-t border-gray-200 pt-6 dark:border-slate-700">
      <router-link to="/blog" class="text-primary-600 hover:underline dark:text-primary-400">← 返回博客列表</router-link>
    </div>
  </div>
  <div v-else class="mx-auto max-w-3xl px-4 py-12 text-center">
    <p class="text-gray-500 dark:text-gray-400">文章未找到</p>
    <router-link to="/blog"
      class="mt-4 inline-block text-primary-600 hover:underline dark:text-primary-400">返回博客列表</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { getPostBySlug } from '@/data/posts'
import MarkdownContent from '@/components/MarkdownContent.vue'

const route = useRoute()
const post = computed(() => getPostBySlug(route.params.slug as string))
</script>
