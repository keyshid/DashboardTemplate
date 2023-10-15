import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue)
app.use(IconsPlugin)
app.use(BootstrapVueIcons)
app.mount('#app')
