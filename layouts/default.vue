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
        </ul>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Kang Hyun-min. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

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
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
