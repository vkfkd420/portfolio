const imageModules = import.meta.glob('~/assets/img/projects/**/*.png', { eager: true, import: 'default' })

export function getProjectImages(folder, order) {
  return order
    .map((n) => {
      const key = Object.keys(imageModules).find((path) => path.endsWith(`/${folder}/${folder}-${n}.png`))
      return key ? imageModules[key] : null
    })
    .filter(Boolean)
}
