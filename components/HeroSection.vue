<template>
  <header class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <span class="subtitle">{{ displayedSubtitle }}<span class="typing-cursor"></span></span>
        <h1 class="title">Clean Code,<br>Clear Experience.</h1>
        <p class="description">
          더 나은 협업과 유지보수를 위해 정돈된 코드를 만들고자 끊임없이 노력하는,<br>
          <span class="highlight-year">{{ careersYear }}년차</span> 프론트엔드 개발자 강현민입니다.
        </p>
        <a href="#contact" class="btn">Get in Touch</a>
      </div>
      <div class="hero-image">
        <img src="~/assets/img/hero-avatar.jpg" alt="Developer Avatar" class="avatar-shimmer" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const fullSubtitle = "Frontend Developer Kang Hyun-min"
const displayedSubtitle = ref("")

const careersYear = computed(() => {
  const startDate = new Date('2022-02-01')
  const today = new Date()
  
  let years = today.getFullYear() - startDate.getFullYear()
  const m = today.getMonth() - startDate.getMonth()
  
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--
  }
  
  // N년차 = 만 N년 + 1
  return years + 1
})

const typeSubtitle = async () => {
  for (let i = 0; i < fullSubtitle.length; i++) {
    displayedSubtitle.value += fullSubtitle[i]
    await new Promise(resolve => setTimeout(resolve, 100))
  }
}

onMounted(() => {
  typeSubtitle()
})
</script>
