import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

const defaultWindow = window

interface ConfigurableWindow {
  window?: Window
}

const useMediaQuery = (query: string, { window = defaultWindow }: ConfigurableWindow = {}) => {
  const matches = ref(false)

  const handler = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  let mediaQuery: MediaQueryList | undefined

  const cleanup = () => {
    if (mediaQuery) mediaQuery.removeEventListener('change', handler)
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener('change', handler)
    matches.value = mediaQuery.matches
  })

  onUnmounted(() => {
    cleanup()
    mediaQuery = undefined
  })

  watchEffect(() => {
    cleanup()
    mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener('change', handler)
    matches.value = mediaQuery.matches
  })

  return matches
}

export default useMediaQuery
