<script setup lang="ts">
import { projects } from '../data/resume'
</script>

<template>
  <div class="project-list">
    <article v-for="project in projects" :key="project.name" class="project-card">
      <h3>{{ project.name }}</h3>
      <p><strong>项目介绍：</strong>{{ project.description }}</p>
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
</style>
