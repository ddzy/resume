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

<style scoped lang="scss">
.resume-header {
  display: grid;
  grid-template-columns: auto minmax(180px, 0.8fr) minmax(180px, 1fr) minmax(200px, 1.1fr);
  gap: 28px;
  align-items: center;
  padding: 34px;
  color: #eff8f7;
  background: #123b3a;
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(18, 59, 58, 0.18);
}

.avatar {
  display: block;
  width: 104px;
  height: 104px;
  border: 4px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.eyebrow {
  margin-bottom: 6px;
  color: #9cc6bf;
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 3px;
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.1;
}

.role {
  color: #c9e4df;
  font-size: 1.1rem;
}

.quick-facts {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 7px 16px;
  font-size: 0.9rem;

  dt {
    color: #9cc6bf;
  }

  dd {
    margin: 0;
  }
}

.contacts {
  display: grid;
  gap: 6px;
  font-size: 0.84rem;

  span {
    display: inline-block;
    width: 68px;
    color: #9cc6bf;
  }

  a {
    color: #eff8f7;
  }
}

@media (max-width: 1000px) {
  .resume-header {
    grid-template-columns: auto 1fr 1fr;
  }

  .contacts {
    grid-column: 2 / -1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .resume-header {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 25px 21px;
    border-radius: 14px;
  }

  .avatar {
    width: 82px;
    height: 82px;
  }

  .contacts {
    grid-column: auto;
    grid-template-columns: 1fr;
  }
}
</style>
