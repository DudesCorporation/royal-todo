import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/mytodos',
    name: 'MyTodos',
    component: () => import('@/views/MyTodos.vue'),
  },
  {
    path: '/completed',
    name: 'CompletedTodos',
    component: () => import('@/views/CompletedTodos.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
