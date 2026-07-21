<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { skillGroups } from '../data/resume'

function renderInlineMarkdown(source: string) {
  return DOMPurify.sanitize(marked.parseInline(source, { async: false }), {
    USE_PROFILES: { html: true },
  })
}
</script>

<template>
  <section v-for="group in skillGroups" :key="group.title" class="skill-group">
    <h3>{{ group.title }}</h3>
    <ol>
      <li v-for="item in group.itemsMarkdown" :key="item" v-html="renderInlineMarkdown(item)" />
    </ol>
  </section>
</template>

<style scoped lang="scss">
.skill-group {
  padding: 15px 0;
  border-top: 1px solid #e3ecea;

  &:first-of-type {
    padding-top: 0;
    border-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  h3 {
    margin-bottom: 8px;
    color: var(--color-ink);
    font-size: 1rem;
  }

  li {
    margin-bottom: 7px;
    color: #41505a;
    font-size: 0.87rem;
    line-height: 1.65;

    :deep(strong) {
      color: #234946;
      font-weight: 700;
    }

    :deep(code) {
      padding: 0.12em 0.36em;
      color: #0f5d57;
      background: #e4f4f1;
      border-radius: 4px;
      font-family: 'DM Mono', monospace;
      font-size: 0.82em;
    }
  }
}
</style>
