const endpoint = 'paletization/producers';
const path = 'producer'
const pluralTitle = 'Productores'
const singularTitle = 'Productor'

export const producersRoutes = [
    {
        path: 'list',
        name: 'producer-list',
        props: { endpoint, path, pluralTitle, key: path },
        component: () => import('@/shared/pages/ItemListPage.vue')
    },
    {
        path: ':id',
        name: 'producer-id',
        props: { endpoint, singularTitle, key: path },
        component: () => import('@/shared/pages/ItemIdPage.vue')
    }
];