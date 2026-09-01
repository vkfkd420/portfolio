export const useTheme = () => {
  const theme = useState('theme', () => 'light')

  const applyTheme = (value) => {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const current = document.documentElement.getAttribute('data-theme')
      theme.value = current === 'dark' ? 'dark' : 'light'
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, initTheme, toggleTheme }
}
