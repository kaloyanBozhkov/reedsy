import { createApp } from 'vue'

import '@/styles/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

library.add(faSun, faMoon, faAngleLeft, faAngleRight)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

// @TODO if this file grows, rework this bit
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
