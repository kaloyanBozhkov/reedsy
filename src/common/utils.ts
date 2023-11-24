/// <reference lib="dom" />

export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== 'undefined' && useRelativeOnFE) return ''

  if (import.meta.env?.PUBLIC_DOMAIN && import.meta.env?.NODE_ENV !== 'development')
    return import.meta.env?.PUBLIC_DOMAIN.includes('http')
      ? import.meta.env?.PUBLIC_DOMAIN
      : `https://${import.meta.env?.PUBLIC_DOMAIN}`

  return `http://localhost:${import.meta.env?.VITE_PORT ?? 5173}`
}

export const formatDate = (d: Date) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
