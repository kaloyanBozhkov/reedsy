/// <reference lib="dom" />

export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== 'undefined' && useRelativeOnFE) return ''

  if (process.env?.PUBLIC_DOMAIN && process.env?.NODE_ENV !== 'development')
    return process.env?.PUBLIC_DOMAIN.includes('http')
      ? process.env?.PUBLIC_DOMAIN
      : `https://${process.env?.PUBLIC_DOMAIN}`

  return `http://localhost:${process.env?.VITE_PORT ?? 5173}`
}

export const formatDate = (d: Date) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
