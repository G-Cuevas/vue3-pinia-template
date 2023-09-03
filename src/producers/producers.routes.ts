const endpoint = 'paletization/distributors';

export const producersRoutes = [
    {
        path: 'list',
        name: 'producer-list',
        props: { endpoint },
        component: () => import('@/producers/pages/ProducerListPage.vue')
    },
    {
        path: ':id',
        name: 'producer-id',
        props: { endpoint },
        component: () => import('@/producers/pages/ProducerIdPage.vue')
    }
];