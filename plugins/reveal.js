export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el) {
      el.classList.add('hidden')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('hidden')
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.15 })
      observer.observe(el)
    }
  })
})
