const endpoint = 'paletization/distributors';
const path = 'distributor'
const pluralTitle = 'Distribuidores'
const singularTitle = 'Distribuidor'

export const distributorsRoutes = [
    {
        path: 'list',
        name: 'distributor-list',
        props: { endpoint, path, pluralTitle, key: path },
        component: () => import('@/shared/pages/ItemListPage.vue')
    },
    {
        path: ':id',
        name: 'distributor-id',
        props: { endpoint, singularTitle, key: path  },
        component: () => import('@/shared/pages/ItemIdPage.vue')
    }
];