import '@/styles/styles.css'

import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

library.add(faSun, faMoon, faAngleLeft, faAngleRight)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
