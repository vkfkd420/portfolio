export default {
  ssr: false,
  target: 'static', // 정적 웹사이트임을 명시
  router: {
    base: '/portfolio/' // github repository 이름 넣기
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: '~/assets/js/jquery.min.js', defer: true },
      // { src: '~/assets/js/jquery.scrolly.min.js', defer: true },
      // { src: '~/assets/js/browser.min.js', defer: true },
      // { src: '~/assets/js/breakpoints.min.js', defer: true },
      // { src: '~/assets/js/util.js', defer: true },
      // { src: '~/assets/js/main.js', defer: true }
      // 추가적인 스크립트를 필요에 따라 설정
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
