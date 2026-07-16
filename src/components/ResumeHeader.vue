<script setup lang="ts">
import { profile } from '../data/resume'
</script>

<template>
  <header class="resume-header">
    <a class="avatar" href="https://github.com/ddzy/resume" target="_blank" rel="noopener noreferrer" aria-label="查看简历源码">
      <img :src="profile.avatarUrl" alt="段朝阳" />
    </a>
    <div class="header-intro">
      <p class="eyebrow">个人简历</p>
      <h1>{{ profile.name }}</h1>
      <p class="role">{{ profile.role }}</p>
    </div>
    <dl class="quick-facts">
      <template v-for="([label, value]) in profile.facts" :key="label">
        <dt>{{ label }}</dt>
        <dd>{{ value }}</dd>
      </template>
    </dl>
    <nav class="contacts" aria-label="联系方式">
      <template v-for="([label, value, href]) in profile.contacts" :key="label">
        <a v-if="href" :href="href" :target="href.startsWith('http') ? '_blank' : undefined" :rel="href.startsWith('http') ? 'noopener noreferrer' : undefined">
          <span>{{ label }}</span>{{ value }}
        </a>
        <p v-else><span>{{ label }}</span>{{ value }}</p>
      </template>
    </nav>
  </header>
</template>
