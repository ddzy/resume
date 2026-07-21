<script setup lang="ts">
import ExperienceList from './components/ExperienceList.vue'
import OpenSourceList from './components/OpenSourceList.vue'
import ProjectList from './components/ProjectList.vue'
import ResumeHeader from './components/ResumeHeader.vue'
import SkillList from './components/SkillList.vue'
import { careerObjective, githubStats, skillTagGroups } from './data/resume'
</script>

<template>
  <main class="page-shell">
    <ResumeHeader />

    <section class="overview-grid" aria-label="技能与开源概览">
      <article class="panel skill-overview">
        <p class="section-kicker">技能分布</p>
        <h2>掌握技术</h2>
        <div class="skill-tag-groups">
          <section v-for="group in skillTagGroups" :key="group.title" class="skill-tag-group">
            <h3>{{ group.title }}</h3>
            <div class="tag-list">
              <span v-for="tag in group.tags" :key="tag">{{ tag }}</span>
            </div>
          </section>
        </div>
      </article>
      <article class="panel github-overview">
        <p class="section-kicker">Github统计</p>
        <h2>开源参与</h2>
        <dl>
          <div v-for="([label, value]) in githubStats" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></div>
        </dl>
      </article>
    </section>

    <section class="panel open-source-panel" aria-labelledby="open-source-title">
      <div class="open-source-heading">
        <div>
          <p class="section-kicker">Open source</p>
          <h2 id="open-source-title">开源项目</h2>
        </div>
        <a href="https://github.com/ddzy" target="_blank" rel="noopener noreferrer">查看 GitHub →</a>
      </div>
      <OpenSourceList />
    </section>

    <section class="content-grid">
      <article class="panel experience-panel">
        <div class="section-heading"><p class="section-kicker">Experience</p><h2>工作经验</h2></div>
        <ExperienceList />
      </article>

      <article class="panel projects-panel">
        <div class="section-heading"><p class="section-kicker">Projects</p><h2>项目经历</h2></div>
        <ProjectList />
      </article>

      <aside class="side-column">
        <article class="panel skills-panel">
          <div class="section-heading"><p class="section-kicker">Skills</p><h2>掌握技能</h2></div>
          <SkillList />
        </article>
        <article class="panel objective-panel">
          <p class="section-kicker">Objective</p><h2>求职意向</h2>
          <dl><div v-for="([label, value]) in careerObjective" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></div></dl>
        </article>
      </aside>
    </section>
  </main>
</template>

<style scoped lang="scss">
.page-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 32px auto 64px;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  margin-top: 20px;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.3fr) minmax(270px, 0.82fr);
  gap: 20px;
  margin-top: 20px;
  align-items: start;
}

.open-source-panel {
  margin-top: 20px;
}

.open-source-heading {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin-bottom: 20px;
  }

  a {
    flex: 0 0 auto;
    padding-top: 2px;
    font-size: 0.86rem;
  }
}

.panel {
  padding: 28px;
  background: var(--color-panel);
  border: 1px solid var(--color-panel-border);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(32, 59, 56, 0.06);

  h2 {
    margin-bottom: 22px;
    color: var(--color-ink);
    font-size: 1.25rem;
  }
}

.section-kicker {
  margin-bottom: 6px;
  color: #568b87;
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.overview-grid h2 {
  margin-bottom: 20px;
}

.skill-tag-groups {
  display: grid;
  gap: 14px;
}

.skill-tag-group {
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 12px;
  align-items: start;

  h3 {
    padding-top: 7px;
    color: var(--color-muted);
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.04em;
  }
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 6px 10px;
    color: #155e75;
    background: #e0f2f1;
    border-radius: 999px;
    font-family: 'DM Mono', monospace;
    font-size: 0.82rem;
  }
}

.github-overview {
  dl {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  dl div {
    padding: 12px;
    background: #f1f7f6;
    border-radius: 10px;
  }

  dt {
    color: #5c6f72;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
  }

  dd {
    margin: 3px 0 0;
    color: var(--color-ink);
    font-size: 1.45rem;
    font-weight: 700;
  }
}

.section-heading {
  margin-bottom: 4px;
}

.side-column {
  display: grid;
  gap: 20px;
}

.objective-panel {
  dl {
    display: grid;
    gap: 15px;
  }

  dl div {
    display: grid;
    gap: 3px;
  }

  dt {
    color: var(--color-muted);
    font-size: 0.82rem;
  }

  dd {
    margin: 0;
    color: var(--color-ink);
    font-weight: 600;
  }
}

@media (max-width: 1000px) {
  .content-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .side-column {
    grid-column: 1 / -1;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 0.55fr);
  }
}

@media (max-width: 680px) {
  .page-shell {
    width: min(100% - 24px, 560px);
    margin: 12px auto 36px;
  }

  .overview-grid,
  .content-grid,
  .side-column {
    grid-template-columns: 1fr;
  }

  .overview-grid,
  .content-grid {
    gap: 12px;
    margin-top: 12px;
  }

  .open-source-panel {
    margin-top: 12px;
  }

  .panel {
    padding: 22px 18px;
    border-radius: 14px;
  }

  .skill-tag-group {
    grid-template-columns: 1fr;
    gap: 6px;

    h3 {
      padding-top: 0;
    }
  }
}
</style>
