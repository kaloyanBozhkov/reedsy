/// <reference lib="dom" />

// eslint-disable-next-line
// @ts-nocheck
const env = typeof process === 'undefined' ? import.meta?.env : process.env
const PUBLIC_DOMAIN = env?.PUBLIC_DOMAIN
const NODE_ENV = env?.NODE_ENV ?? env?.MODE
const PORT = env?.PORT ?? 3000

export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== 'undefined' && useRelativeOnFE) return ''

  if (PUBLIC_DOMAIN && NODE_ENV !== 'development')
    return env?.PUBLIC_DOMAIN.includes('http') ? PUBLIC_DOMAIN : `https://${PUBLIC_DOMAIN}`

  return `http://localhost:${PORT}`
}

export const formatDate = (d: Date) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
