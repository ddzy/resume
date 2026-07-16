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
