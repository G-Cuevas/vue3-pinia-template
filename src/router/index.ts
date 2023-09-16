import { createRouter, createWebHistory } from 'vue-router'
import { distributorsRoutes } from '@/distributors/distributors.routes';
import { producersRoutes } from '@/producers/producers.routes';
import { labelsRoutes } from '@/labels/labels.routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/producers',
      name: 'producers',
      redirect: '/producers/list',
      component: () => import('@/shared/layouts/RouterLayout.vue'),
      children: producersRoutes
    },
    {
      path: '/labels',
      name: 'labels',
      redirect: '/labels/list',
      component: () => import('@/shared/layouts/RouterLayout.vue'),
      children: labelsRoutes
    },
    {
      path: '/distributors',
      name: 'distributors',
      redirect: '/distributors/list',
      component: () => import('@/shared/layouts/RouterLayout.vue'),
      children: distributorsRoutes
    },
  ]
})

export default router
