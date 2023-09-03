import { createRouter, createWebHistory } from 'vue-router'
import { producersRoutes } from '@/producers/producers.routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter-options',
      name: 'counter-options',
      component: () => import('@/counter/pages/CounterOptions.vue')
    },
    {
      path: '/counter-setup',
      name: 'counter-setup',
      component: () => import('@/counter/pages/CounterSetup.vue')
    },
    {
      path: '/producers',
      name: 'producers',
      redirect: '/producers/list',
      component: () => import('@/producers/layout/ProducersLayout.vue'),
      children: producersRoutes
    },
  ]
})

export default router
