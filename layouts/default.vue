<template>
  <div>
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="container">
        <NuxtLink to="/" class="logo">HYUN<span>MIN.</span></NuxtLink>
        <button class="mobile-menu-btn" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li v-for="link in links" :key="link.hash">
            <a :href="link.hash" @click="closeMenu">{{ link.text }}</a>
          </li>
          <li>
            <button
              class="theme-toggle-btn"
              type="button"
              :aria-label="theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'"
              @click="toggleTheme"
            >
              {{ theme === 'dark' ? '☀️' : '🌙' }}
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Kang Hyun-min. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const { theme, initTheme, toggleTheme } = useTheme()

const links = [
  { text: 'About', hash: '#about' },
  { text: 'Skills', hash: '#skills' },
  { text: 'Experience', hash: '#experience' },
  { text: 'Projects', hash: '#projects' },
  { text: 'Contact', hash: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
