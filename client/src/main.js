import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'v-calendar/dist/style.css';

createApp(App).use(router).mount('#app')

