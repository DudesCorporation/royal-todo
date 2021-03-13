import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mytodos',
    name: 'MyTodos',
    component: () => import('../views/MyTodos.vue'),
  },
  {
    path: '/completed',
    name: 'CompletedTodos',
    component: () => import('../views/CompletedTodos.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
