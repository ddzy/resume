<script setup lang="ts">
import { experiences } from '../data/resume'
</script>

<template>
  <div class="timeline">
    <article v-for="experience in experiences" :key="experience.company" class="timeline-item">
      <p class="timeline-period">{{ experience.period }}</p>
      <h3>{{ experience.company }}</h3>
      <p class="field-label">主要业务</p>
      <ol>
        <li v-for="responsibility in experience.responsibilities" :key="responsibility">{{ responsibility }}</li>
      </ol>
    </article>
  </div>
</template>
