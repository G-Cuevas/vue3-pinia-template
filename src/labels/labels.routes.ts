const endpoint = 'paletization/infrastructure/tags';
const path = 'label'
const pluralTitle = 'Etiquetas'
const singularTitle = 'Etiqueta'

export const labelsRoutes = [
    {
        path: 'list',
        name: 'label-list',
        props: { endpoint, path, pluralTitle },
        component: () => import('@/labels/pages/ItemListPage.vue')
    },
    {
        path: ':id',
        name: 'label-id',
        props: { endpoint, singularTitle },
        component: () => import('@/labels/pages/ItemIdPage.vue')
    }
];