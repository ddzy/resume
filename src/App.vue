<script setup lang="ts">
import ExperienceList from './components/ExperienceList.vue'
import ProjectList from './components/ProjectList.vue'
import ResumeHeader from './components/ResumeHeader.vue'
import { careerObjective, githubStats, openSource, skillGroups, skillTags } from './data/resume'
</script>

<template>
  <main class="page-shell">
    <ResumeHeader />

    <section class="overview-grid" aria-label="技能与开源概览">
      <article class="panel skill-overview">
        <p class="section-kicker">技能分布</p>
        <h2>掌握技术</h2>
        <div class="tag-list">
          <span v-for="skill in skillTags" :key="skill">{{ skill }}</span>
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
          <section v-for="group in skillGroups" :key="group.title" class="skill-group">
            <h3>{{ group.title }}</h3>
            <ol><li v-for="item in group.items" :key="item">{{ item }}</li></ol>
          </section>
          <section class="skill-group">
            <h3>开源</h3>
            <ol>
              <li v-for="([name, href, description]) in openSource" :key="name"><a :href="href" target="_blank" rel="noopener noreferrer">{{ name }}</a> {{ description }}</li>
            </ol>
          </section>
        </article>
        <article class="panel objective-panel">
          <p class="section-kicker">Objective</p><h2>求职意向</h2>
          <dl><div v-for="([label, value]) in careerObjective" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></div></dl>
        </article>
      </aside>
    </section>
  </main>
</template>
