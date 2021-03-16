import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/basic/Home.vue'),
  },
  {
    path: '/mytodos',
    name: 'MyTodos',
    component: () => import('@/views/basic/MyTodos.vue'),
  },
  {
    path: '/completed',
    name: 'CompletedTodos',
    component: () => import('@/views/basic/CompletedTodos.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/login/LoginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
