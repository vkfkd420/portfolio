<template>
  <section class="section project-detail-page">
    <div class="container">
      <NuxtLink to="/#projects" class="back-link">← 프로젝트 목록으로</NuxtLink>

      <template v-if="project">
        <h1 class="project-title detail-title">{{ project.title }}</h1>
        <p class="project-subtitle">{{ project.subtitle }}</p>

        <dl class="meta-grid" v-if="project.period || project.role">
          <template v-if="project.period">
            <dt>수행 기간</dt>
            <dd>{{ project.period }}</dd>
          </template>
          <template v-if="project.role">
            <dt>담당 역할</dt>
            <dd>{{ project.role }}</dd>
          </template>
        </dl>

        <div class="tech-stack">
          <span v-for="tag in project.tags" :key="tag" class="tech-tag">{{ tag }}</span>
        </div>

        <div class="project-image-area detail-gallery" v-if="project.images.length">
          <div class="project-img-gallery">
            <div v-for="(img, index) in project.images" :key="index" class="img-wrapper">
              <img
                :src="img"
                :alt="`${project.title} screenshot ${index + 1}`"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div class="project-details">
          <h2 class="detail-section-title">핵심 성과</h2>
          <ul>
            <li v-for="(desc, index) in project.descriptions" :key="index" v-html="desc"></li>
          </ul>
        </div>

        <div class="detail-section" v-if="project.tasks && project.tasks.length">
          <h2 class="detail-section-title">주요 업무</h2>
          <ul class="detail-list">
            <li v-for="(task, index) in project.tasks" :key="index">{{ task }}</li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { projects as projectsData } from '~/data/projects.js'
import { getProjectImages } from '~/utils/projectImages.js'

const route = useRoute()
const found = projectsData.find((p) => p.slug === route.params.slug)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const project = {
  ...found,
  images: getProjectImages(found.imageFolder, found.imageOrder)
}

useSeoMeta({
  title: `${project.title} - Kang Hyun-min Portfolio`,
  description: project.subtitle,
  ogTitle: `${project.title} - Kang Hyun-min Portfolio`,
  ogDescription: project.subtitle
})
</script>

<style scoped>
.project-detail-page {
  padding-top: 160px;
}

.back-link {
  display: inline-block;
  margin-bottom: 32px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--accent-color);
}

.detail-title {
  font-size: 2rem;
  margin-bottom: 8px;
}

.project-subtitle {
  margin-bottom: 20px;
}

.meta-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 16px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.meta-grid dt {
  color: var(--text-secondary);
  font-weight: 500;
  white-space: nowrap;
}

.meta-grid dd {
  color: var(--text-color);
}

.detail-gallery {
  margin-top: 32px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-secondary);
}

.project-details {
  margin-top: 32px;
}

.detail-section {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.detail-section-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-list li {
  position: relative;
  padding-left: 16px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.detail-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}
</style>
