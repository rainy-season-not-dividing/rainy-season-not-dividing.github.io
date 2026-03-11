<template>
  <div class="prose prose-slate dark:prose-invert max-w-none" v-html="html"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps<{ content: string }>()

const html = computed(() => marked(props.content, { gfm: true }))
</script>
