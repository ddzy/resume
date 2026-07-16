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

<style scoped lang="scss">
.timeline {
  border-left: 2px solid #b9d4cf;
  padding-left: 18px;
}

.timeline-item {
  position: relative;
  padding-bottom: 26px;

  &::before {
    position: absolute;
    top: 5px;
    left: -25px;
    width: 12px;
    height: 12px;
    background: #16817a;
    border: 3px solid #e4f4f1;
    border-radius: 50%;
    content: '';
  }

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-period {
  margin-bottom: 5px;
  color: var(--color-muted);
  font-family: 'DM Mono', monospace;
  font-size: 0.76rem;
}

h3 {
  margin-bottom: 10px;
  color: var(--color-ink);
  font-size: 1rem;
}

.field-label {
  margin-bottom: 4px;
  color: var(--color-muted);
  font-size: 0.82rem;
  font-weight: 600;
}

li {
  margin-bottom: 7px;
  color: #41505a;
  font-size: 0.87rem;
  line-height: 1.65;
}

@media (max-width: 680px) {
  .timeline {
    padding-left: 15px;
  }

  .timeline-item::before {
    left: -22px;
  }
}
</style>
