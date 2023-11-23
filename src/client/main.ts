import { createApp } from 'vue'

import '@/styles/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

library.add(faSun, faMoon)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
