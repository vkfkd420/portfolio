<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      
      <!-- Project Tabs (Swiper) -->
      <div class="category-tabs">
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
          </div>
        </article>
      </div>

      <!-- Image Modal -->
      <div v-if="selectedImage" class="image-modal" @click="closeModal">
        <div class="modal-content">
          <img :src="selectedImage" alt="Expanded project image" />
          <button class="close-btn" @click.stop="closeModal">&times;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import kiumi1 from '~/assets/img/projects/kiumi/kiumi-1.png'
import kiumi2 from '~/assets/img/projects/kiumi/kiumi-2.png'
import kiumi3 from '~/assets/img/projects/kiumi/kiumi-3.png'
import masterclass1 from '~/assets/img/projects/masterclass/masterclass-1.png'
import masterclass2 from '~/assets/img/projects/masterclass/masterclass-2.png'
import masterclass3 from '~/assets/img/projects/masterclass/masterclass-3.png'
import investmentSecret1 from '~/assets/img/projects/investment-secret/investment-secret-1.png'
import investmentSecret2 from '~/assets/img/projects/investment-secret/investment-secret-2.png'
import investmentSecret3 from '~/assets/img/projects/investment-secret/investment-secret-3.png'
import noshow1 from '~/assets/img/projects/noshow/noshow-1.png'
import noshow2 from '~/assets/img/projects/noshow/noshow-2.png'
import noshow3 from '~/assets/img/projects/noshow/noshow-3.png'
import noshow4 from '~/assets/img/projects/noshow/noshow-4.png'
import noshow5 from '~/assets/img/projects/noshow/noshow-5.png'
import rassiAdmin1 from '~/assets/img/projects/rassi-admin/rassi-admin-1.png'
import rassiAdmin2 from '~/assets/img/projects/rassi-admin/rassi-admin-2.png'
import companyIntro1 from '~/assets/img/projects/company-intro/company-intro-1.png'
import companyIntro2 from '~/assets/img/projects/company-intro/company-intro-2.png'
import companyIntro3 from '~/assets/img/projects/company-intro/company-intro-3.png'
import companyIntro4 from '~/assets/img/projects/company-intro/company-intro-4.png'
import companyIntro5 from '~/assets/img/projects/company-intro/company-intro-5.png'
import internalAdmin1 from '~/assets/img/projects/internal-admin/internal-admin-1.png'
import internalAdmin2 from '~/assets/img/projects/internal-admin/internal-admin-2.png'
import internalAdmin3 from '~/assets/img/projects/internal-admin/internal-admin-3.png'


const activeProjectIndex = ref(0)
const selectedImage = ref(null)

const projects = [
  {
    title: "키우미 (AI 챗봇 자산관리)",
    subtitle: "키움증권 협업 / LLM을 연동한 주식 관련 채팅 프로그램 개발",
    tags: ["Vue.js (집중)", "Spring"],
    category: "Mobile/Hybrid",
    images: [kiumi3, kiumi1, kiumi2],
    descriptions: [
      "<strong>채팅 화면 기능 구현:</strong> Vue.js를 활용하여 LLM 응답을 사용자에게 직관적으로 보여주는 실시간 채팅 인터페이스 기능 구현",
      "<strong>모바일 최적화:</strong> 안드로이드/iOS 대응 및 다양한 디바이스 환경에서 안정적으로 작동하는 모바일 화면 최적화 주도",
      "<strong>성능 개선:</strong> 비동기적으로 들어오는 응답 데이터를 처리하고 화면 렌더링 성능 개선 작업 수행"
    ]
  },
  {
    title: "마스터클래스",
    subtitle: "국책과제 관련 교육 플랫폼 프론트엔드 시스템 구축",
    tags: ["Vue.js", "Spring"],
    category: "Web Service",
    images: [masterclass1, masterclass2, masterclass3],
    descriptions: [
      "<strong>화면 구현 및 개발 전담:</strong> 설계된 화면을 바탕으로 프로젝트 전체 화면 및 기능 구현",
      "<strong>권한 및 기능 제어 로직:</strong> 사용자/관리자 권한에 따른 화면 접근 및 기능 활성화 제어 로직을 REST API 연동 기반으로 정확하게 구현",
      "<strong>반응형 웹 구축:</strong> 다양한 해상도 및 디바이스 환경 대응을 위한 반응형 웹 구현을 통해 모든 환경에서 안정적인 화면 제공"
    ]
  },
  {
    title: "투자의 비책",
    subtitle: "주식 정보 제공 및 시황 관련 페이지 개발 및 운영",
    tags: ["Vue.js", "Spring", "Oracle"],
    category: "Web Service",
    images: [investmentSecret1, investmentSecret2, investmentSecret3],
    descriptions: [
      "<strong>데이터 처리 최적화:</strong> Oracle DB 쿼리 분석 및 최적화를 통해 핵심 데이터 로딩 시간 단축",
      "<strong>신규 기능 구현:</strong> 주식 시세 및 관련 정보 조회 기능 구현, Spring 기반 API 개발로 데이터 제공 안정성 확보"
    ]
  },
  {
    title: "노쇼노",
    subtitle: "보증금 기반의 약속 관리 서비스 페이지 개발",
    tags: ["Vue.js", "Spring", "Oracle"],
    category: "Web Service",
    images: [noshow1, noshow2, noshow3, noshow4, noshow5],
    descriptions: [
      "<strong>프론트엔드 개발:</strong> 약속 생성, 보증금 관리, 진행 현황 등 핵심 사용자 기능 화면 구현",
      "<strong>안정적인 트랜잭션:</strong> 보증금 처리 및 약속 상태 변경에 필요한 백엔드 로직 및 DB 트랜잭션 안정성 확보"
    ]
  },
  {
    title: "라씨 매매비서 (관리자)",
    subtitle: "주식 매매비서 서비스 운영을 위한 관리자 페이지",
    tags: ["Spring", "Oracle"],
    category: "Admin",
    images: [rassiAdmin2, rassiAdmin1],
    descriptions: [
      "<strong>운영 효율 증대:</strong> 회원 리스트 조회 및 서비스 관리를 효율적으로 수행할 수 있도록 기능 개선, 운영팀 업무 효율 향상"
    ]
  },
  {
    title: "씽크풀 기업 소개 페이지",
    subtitle: "회사 소개 웹 및 모바일 페이지 개발 및 유지보수",
    tags: ["Vue.js", "Spring"],
    category: "Web Service",
    images: [companyIntro5, companyIntro2, companyIntro3, companyIntro4, companyIntro1],
    descriptions: [
      "<strong>크로스 플랫폼 대응:</strong> 웹 및 모바일 환경에서 일관성 있고 반응성이 뛰어난 UI/UX 구현"
    ]
  },
  {
    title: "씽크풀 내부 관리자 시스템",
    subtitle: "내부 시스템 운영을 위한 관리자 페이지",
    tags: ["Spring", "Oracle"],
    category: "Admin",
    images: [internalAdmin3, internalAdmin1, internalAdmin2],
    descriptions: [
      "<strong>시스템 안정성 기여:</strong> 내부 툴의 안정적인 운영을 위한 백엔드 로직 수정 및 오류 처리 담당"
    ]
  }
]

const activeProject = computed(() => {
  return projects[activeProjectIndex.value]
})

const selectProject = (index) => {
  activeProjectIndex.value = index
}

const openModal = (img) => {
  selectedImage.value = img
  document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
}

const closeModal = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
}
</script>
