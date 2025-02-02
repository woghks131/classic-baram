import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import mixins from './mixins'
import store from './store'


createApp(App).use(router).mixin(mixins).use(store).mount('#app')
