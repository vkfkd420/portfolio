<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Projects</h2>

      <!-- Project Tabs (Swiper) -->
      <div class="category-tabs" v-reveal>
        <swiper
          :slides-per-view="'auto'"
          :space-between="12"
          :free-mode="true"
          class="category-swiper"
        >
          <swiper-slide
            v-for="(project, index) in projects"
            :key="project.title"
            class="category-slide"
            :class="{ active: activeProjectIndex === index }"
            @click="selectProject(index)"
          >
            {{ project.title }}
          </swiper-slide>
        </swiper>
      </div>

      <!-- Active Project Display -->
      <div class="projects-display" v-if="activeProject">
        <article class="project-card fade-in" :key="activeProject.title">
          <!-- Image Display -->
          <div class="project-image-area" v-if="activeProject.images && activeProject.images.length">
            <div class="project-img-gallery">
              <div
                v-for="(img, index) in activeProject.images"
                :key="index"
                class="img-wrapper"
              >
                <img
                  :src="img"
                  :alt="activeProject.title + ' screenshot ' + (index + 1)"
                  loading="lazy"
                  decoding="async"
                  @click="openModal(img)"
                />
              </div>
            </div>
          </div>
          <!-- Image Placeholder (Fallback) -->
          <div class="project-image-placeholder" v-else>
            <div class="placeholder-content">
              <span>{{ activeProject.title }} Image</span>
            </div>
          </div>

          <header class="project-header">
            <h3 class="project-title">{{ activeProject.title }}</h3>
            <span class="project-subtitle">{{ activeProject.subtitle }}</span>
            <div class="tech-stack">
              <span v-for="tag in activeProject.tags" :key="tag" class="tech-tag">{{ tag }}</span>
            </div>
          </header>
          <div class="project-details">
            <ul>
              <li v-for="(desc, index) in activeProject.descriptions" :key="index" v-html="desc"></li>
            </ul>
            <NuxtLink :to="`/projects/${activeProject.slug}`" class="detail-link">
              자세히 보기 →
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Image Modal -->
      <div
        v-if="selectedImage"
        class="image-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="`${activeProject?.title} 이미지 확대 보기`"
        @click="closeModal"
      >
        <div class="modal-content" @click.stop>
          <img :src="selectedImage" alt="Expanded project image" />
          <button ref="closeBtnRef" class="close-btn" aria-label="닫기" @click="closeModal">&times;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projects as projectsData } from '~/data/projects.js'
import { getProjectImages } from '~/utils/projectImages.js'

const activeProjectIndex = ref(0)
const selectedImage = ref(null)
const closeBtnRef = ref(null)
let lastFocusedEl = null

const projects = projectsData.map((project) => ({
  ...project,
  images: getProjectImages(project.imageFolder, project.imageOrder)
}))

const activeProject = computed(() => {
  return projects[activeProjectIndex.value]
})

const selectProject = (index) => {
  activeProjectIndex.value = index
}

const openModal = (img) => {
  lastFocusedEl = document.activeElement
  selectedImage.value = img
  document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  nextTick(() => closeBtnRef.value?.focus())
}

const closeModal = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
  lastFocusedEl?.focus()
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && selectedImage.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
