import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
