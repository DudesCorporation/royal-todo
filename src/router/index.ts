import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { importAll } from '@/utils/files';

const routes: Array<RouteRecordRaw> = importAll(require.context('./../pages', true, /\.ts$/));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
