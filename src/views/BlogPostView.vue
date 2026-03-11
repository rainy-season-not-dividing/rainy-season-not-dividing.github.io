<template>
  <div class="mx-auto max-w-3xl px-4 py-12" v-if="post">
    <router-link to="/blog" class="text-sm text-primary-600 hover:underline dark:text-primary-400">← 返回博客列表</router-link>
    <h1 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">{{ post.title }}</h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400">{{ post.date }}</p>
    <div class="mt-8">
      <MarkdownContent :content="post.content" />
    </div>
    <div class="mt-12 border-t border-gray-200 pt-6 dark:border-slate-700">
      <router-link to="/blog" class="text-primary-600 hover:underline dark:text-primary-400">← 返回博客列表</router-link>
    </div>
  </div>
  <div v-else class="mx-auto max-w-3xl px-4 py-12 text-center">
    <p class="text-gray-500 dark:text-gray-400">文章未找到</p>
    <router-link to="/blog" class="mt-4 inline-block text-primary-600 hover:underline dark:text-primary-400">返回博客列表</router-link>
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
