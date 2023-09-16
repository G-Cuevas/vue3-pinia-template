import { createRouter, createWebHistory } from 'vue-router'
import { distributorsRoutes } from '@/distributors/distributors.routes';
import { producersRoutes } from '@/producers/producers.routes';
import { labelsRoutes } from '@/labels/labels.routes';

export const routes = [
  {
    path: '/producers',
    name: 'producers',
    redirect: '/producers/list',
    meta: { title: 'Productores' },
    component: () => import('@/shared/layouts/RouterLayout.vue'),
    children: producersRoutes
  },
  {
    path: '/labels',
    name: 'labels',
    redirect: '/labels/list',
    meta: { title: 'Etiquetas' },
    component: () => import('@/shared/layouts/RouterLayout.vue'),
    children: labelsRoutes
  },
  {
    path: '/distributors',
    name: 'distributors',
    redirect: '/distributors/list',
    meta: { title: 'Distribuidores' },
    component: () => import('@/shared/layouts/RouterLayout.vue'),
    children: distributorsRoutes
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
