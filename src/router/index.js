import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainView.vue'
import Items from '../views/ItemList.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/items',
    name: 'items',
    component: Items
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
