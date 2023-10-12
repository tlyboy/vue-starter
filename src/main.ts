import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import './assets/styles/nprogress.css'
import 'uno.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
