/// <reference lib="dom" />

// eslint-disable-next-line
// @ts-nocheck
const env = typeof process === 'undefined' ? import.meta?.env : process.env
const PUBLIC_DOMAIN = env?.PUBLIC_DOMAIN ?? env?.VITE_PUBLIC_DOMAIN
const ENV = env?.MODE ?? env?.NODE_ENV
const isProd = ENV === 'production' || env?.PROD
const PORT = env?.PORT ?? 3000

export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== 'undefined' && useRelativeOnFE) return ''
  if (!isProd) return `http://localhost:${PORT}`
  if (PUBLIC_DOMAIN)
    return PUBLIC_DOMAIN.includes('http') ? PUBLIC_DOMAIN : `https://${PUBLIC_DOMAIN}`

  return ''
}

export const formatDate = (d: Date) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
