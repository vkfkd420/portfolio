// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: 'Frontend Developer Portfolio - Kang Hyun-min',
      meta: [
        { name: 'description', content: '4년차 프론트엔드 개발자 강현민의 포트폴리오입니다.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }
      ]
    }
  }
})
