import create from 'vue-zustand'

interface ThemeStore {
  darkMode: boolean
  controls: {
    initialize: () => void
    toggleDarkMode: () => void
  }
}

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: false,
  controls: {
    initialize: () => {
      const isDarkMode =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

      set({
        darkMode: isDarkMode,
      })
    },
    toggleDarkMode: (darkMode) => {
      set((prev) => {
        const darkMode = !prev.darkMode

        localStorage.theme = darkMode ? 'dark' : 'light'

        return {
          darkMode,
        }
      })
    },
  },
}))
