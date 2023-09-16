const endpoint = 'paletization/producers';
const path = 'producer'
const pluralTitle = 'Productores'
const singularTitle = 'Productor'

export const producersRoutes = [
    {
        path: 'list',
        name: 'producer-list',
        props: { endpoint, path, pluralTitle },
        component: () => import('@/producers/pages/ItemListPage.vue')
    },
    {
        path: ':id',
        name: 'producer-id',
        props: { endpoint, singularTitle },
        component: () => import('@/producers/pages/ItemIdPage.vue')
    }
];