// https://nuxt.com/docs/api/configuration/nuxt-config
import { projects } from './data/projects.js'

const siteUrl = 'https://vkfkd420.github.io/portfolio/'
const siteTitle = 'Frontend Developer Portfolio - Kang Hyun-min'
const siteDescription = '5년차 프론트엔드 개발자 강현민의 포트폴리오입니다. Vue.js, Nuxt.js, Spring 기반 웹/앱 서비스 개발 경험을 소개합니다.'
const ogImageUrl = `${siteUrl}og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/layout.css',
    '~/assets/css/components/hero.css',
    '~/assets/css/components/skills.css',
    '~/assets/css/components/experience.css',
    '~/assets/css/components/projects.css',
    '~/assets/css/components/contact.css'
  ],
  app: {
    head: {
      title: siteTitle,
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { name: 'description', content: siteDescription },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: '강현민, 프론트엔드 개발자, Frontend Developer, Vue.js, Nuxt.js, 포트폴리오, Portfolio' },
        { name: 'author', content: 'Kang Hyun-min' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#3b82f6' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteTitle },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImageUrl },
        { property: 'og:locale', content: 'ko_KR' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImageUrl }
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }
      ],
      script: [
        {
          // Sets the theme before first paint to avoid a light/dark flash on load.
          innerHTML: "(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          type: 'text/javascript',
          tagPosition: 'head'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: projects.map((p) => `/projects/${p.slug}`)
    }
  }
})
