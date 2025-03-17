import './assets/main.css'
import {echo} from './plugins/echo'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
axios.defaults.baseURL ="http://localhost:8000/"
// axios.defaults.withCredentials = true

const app = createApp(App)

app.use(router)
app.use(echo)

app.mount('#app')
