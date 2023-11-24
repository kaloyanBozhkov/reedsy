/// <reference lib="dom" />

// eslint-disable-next-line
// @ts-nocheck
const env = typeof process === 'undefined' ? import.meta?.env : process.env

export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== 'undefined' && useRelativeOnFE) return ''

  if (env?.PUBLIC_DOMAIN && env?.NODE_ENV !== 'development')
    return env?.PUBLIC_DOMAIN.includes('http')
      ? env?.PUBLIC_DOMAIN
      : `https://${env?.PUBLIC_DOMAIN}`

  if (env?.BASE_URL && env.PROD) return env?.BASE_URL

  return `http://localhost:${env?.PORT ?? 3000}`
}

export const formatDate = (d: Date) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
