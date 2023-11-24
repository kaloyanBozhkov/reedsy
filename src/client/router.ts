import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/Home.page.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/index', component: IndexPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
