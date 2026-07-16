<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { projects } from '../data/resume'

function renderMarkdown(source: string) {
  return DOMPurify.sanitize(marked.parse(source, { async: false }), {
    USE_PROFILES: { html: true },
  })
}
</script>

<template>
  <div class="project-list">
    <article v-for="project in projects" :key="project.name" class="project-card">
      <h3>{{ project.name }}</h3>
      <div class="project-description">
        <strong>项目介绍：</strong>
        <div class="markdown-body" v-html="renderMarkdown(project.detailsMarkdown)" />
      </div>
      <p v-for="link in project.links" :key="link.href"><strong>{{ link.label }}</strong> <a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.text }}</a></p>
      <p><strong>所用技术：</strong>{{ project.technologies }}</p>
    </article>
  </div>
</template>

<style scoped lang="scss">
.project-list {
  display: grid;
  gap: 14px;
}

.project-card {
  padding: 18px;
  background: #f7faf9;
  border: 1px solid #e2ecea;
  border-radius: 12px;

  h3 {
    margin-bottom: 9px;
    color: var(--color-ink);
    font-size: 1rem;
  }

  p {
    margin-bottom: 8px;
    color: #41505a;
    font-size: 0.87rem;
    line-height: 1.68;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #234946;
  }
}

.project-description {
  margin-bottom: 8px;
  color: #41505a;
  font-size: 0.87rem;
  line-height: 1.68;
}

.markdown-body {
  :deep(p),
  :deep(ul),
  :deep(ol),
  :deep(pre) {
    margin: 0 0 8px;
  }

  :deep(p:last-child),
  :deep(ul:last-child),
  :deep(ol:last-child),
  :deep(pre:last-child) {
    margin-bottom: 0;
  }

  :deep(code) {
    padding: 0.12em 0.36em;
    color: #0f5d57;
    background: #e4f4f1;
    border-radius: 4px;
    font-family: 'DM Mono', monospace;
    font-size: 0.82em;
  }

  :deep(pre) {
    overflow-x: auto;
    padding: 12px;
    color: #d9f3ee;
    background: #123b3a;
    border-radius: 8px;
  }

  :deep(pre code) {
    padding: 0;
    color: inherit;
    background: transparent;
  }
}
</style>
