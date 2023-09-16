import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePaginationStore = defineStore('pagination', () => {

    const limit = ref<number>(5);
    const order = ref<string | null>(null);
    const page = ref<number>(1);
    const sort = ref<string | null>(null);
    const totalItems = ref<number>(0);
    const totalPages = computed(() => Math.ceil(totalItems.value / (limit.value || 10)));
    const items = ref<any[]>([]);

    return {
        // Properties
        params: computed(() => ({
            limit: limit.value,
            order: order.value,
            page: page.value,
            sort: sort.value,
        })),
        totalItems,
        totalPages,
        items,

        // Getters

        // Actions
        setLimit(newLimit: number) {
            if (newLimit < 1) return;
            limit.value = newLimit;
        },
        
        setOrder(newOrder: string) {
            const newOrderUpper = newOrder.toLocaleUpperCase();
            if (newOrderUpper !== 'ASC' && newOrderUpper !== 'DESC') return;
            order.value = newOrder;
        },

        setSort(newSort: string) {
            sort.value = newSort;
        },

        setPage(newPage: number) {
            if (newPage < 1) return;
            if (newPage > totalPages.value) return;
            
            page.value = newPage;
        },

        setTotalItems(newTotalItems: number) {
            if (newTotalItems < 0) return;
            totalItems.value = newTotalItems;
        },

        setItems(newItems: any[]) {
            items.value = newItems;
        },        

    }
});