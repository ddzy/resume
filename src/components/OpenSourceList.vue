<script setup lang="ts">
import { openSourceProjects } from '../data/resume'
</script>

<template>
  <div class="open-source-list">
    <article
      v-for="project in openSourceProjects"
      :key="project.name"
      class="open-source-card"
    >
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <dl aria-label="GitHub 仓库统计">
        <div><dt>Star</dt><dd>{{ project.stars }}</dd></div>
        <div><dt>Fork</dt><dd>{{ project.forks }}</dd></div>
      </dl>
      <div class="project-actions" :aria-label="`${project.name} 项目入口`">
        <a :href="project.githubHref" target="_blank" rel="noopener noreferrer">GitHub 仓库</a>
        <a v-if="project.previewHref" :href="project.previewHref" target="_blank" rel="noopener noreferrer">在线预览</a>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.open-source-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.open-source-card {
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  gap: 10px;
  min-height: 156px;
  padding: 18px;
  background: #f7faf9;
  border: 1px solid #e2ecea;
  border-radius: 12px;
  transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;

  &:hover,
  &:focus-within {
    border-color: #9bc7bf;
    box-shadow: 0 8px 18px rgba(32, 59, 56, 0.1);
    transform: translateY(-2px);

    .project-actions {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }

  h3 {
    margin: 0;
    color: var(--color-ink);
    font-family: 'DM Mono', monospace;
    font-size: 0.9rem;
  }

  p {
    margin: 0;
    color: #41505a;
    font-size: 0.82rem;
    line-height: 1.6;
  }

  dl {
    display: flex;
    gap: 16px;
    align-self: end;
    margin: 0;
  }

  dl div {
    display: flex;
    gap: 5px;
    align-items: baseline;
  }

  dt {
    color: var(--color-muted);
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
  }

  dd {
    margin: 0;
    color: var(--color-ink);
    font-family: 'DM Mono', monospace;
    font-size: 0.88rem;
    font-weight: 700;
  }
}

.project-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 160ms ease, transform 160ms ease;

  a {
    flex: 1;
    padding: 7px 8px;
    color: #eff8f7;
    background: #155e75;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;

    &:hover,
    &:focus-visible {
      color: #fff;
      background: #0f4c5c;
      text-decoration: none;
    }

    + a {
      color: #155e75;
      background: #e0f2f1;

      &:hover,
      &:focus-visible {
        color: #0f4c5c;
        background: #c8e7e1;
      }
    }
  }
}

@media (max-width: 1000px) {
  .open-source-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .open-source-list {
    grid-template-columns: 1fr;
  }

  .project-actions {
    pointer-events: auto;
    opacity: 1;
    transform: none;
  }
}
</style>
