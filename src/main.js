import './assets/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'
//
import Galleria from 'primevue/galleria'
import Button from 'primevue/button'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('GalleriaPrime', Galleria)
app.component('ButtonPrime', Button)

app.mount('#app')
