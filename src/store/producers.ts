import type { Producer } from '@/producers/interfaces/ProducerInterface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProducersStore = defineStore('producers', () => {

    const page = ref<number>(1);
    const order = ref<string | null>(null);
    const sort = ref<string | null>(null);
    const limit = ref<number>(5);
    const totalItems = ref<number>(0);
    const totalPages = computed(() => Math.ceil(totalItems.value / (limit.value || 10)));
    const items = ref<Producer[]>([]);

    return {
        // Properties
        params: computed(() => ({
            page: page.value,
            limit: limit.value,
            order: order.value,
            sort: sort.value,
        })),
        totalItems,
        totalPages,
        items,

        // Getters

        // Actions
        setPage(newPage: number) {
            if (newPage === page.value) return;
            if (newPage < 1) return;
            if (newPage > totalPages.value) return;
            
            page.value = newPage;
        },

        setOrder(newOrder: string) {
            const newOrderUpper = newOrder.toLocaleUpperCase();
            if (newOrder === order.value) return;
            if (newOrderUpper !== 'ASC' && newOrderUpper !== 'DESC') return;
            order.value = newOrder;
        },

        setSort(newSort: string) {
            if (newSort === sort.value) return;
            sort.value = newSort;
        },

        setLimit(newLimit: number) {
            if (newLimit === limit.value) return;
            if (newLimit < 1) return;
            limit.value = newLimit;
        },

        setTotalItems(newTotalItems: number) {
            if (newTotalItems === totalItems.value) return;
            if (newTotalItems < 0) return;
            totalItems.value = newTotalItems;
        },

        setItems(newItems: Producer[]) {
            items.value = newItems;
        },        

    }
});