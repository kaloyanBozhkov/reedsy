/// <reference lib="dom" />
// eslint-disable-next-line
// @ts-nocheck
const env = import.meta?.env ?? process?.env ?? {};
export const getBaseUrl = (useRelativeOnFE = true) => {
    if (typeof window !== 'undefined' && useRelativeOnFE)
        return '';
    if (env?.PUBLIC_DOMAIN && env?.NODE_ENV !== 'development')
        return env?.PUBLIC_DOMAIN.includes('http')
            ? env?.PUBLIC_DOMAIN
            : `https://${env?.PUBLIC_DOMAIN}`;
    return `http://localhost:${env?.VITE_PORT ?? 5173}`;
};
export const formatDate = (d) => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
