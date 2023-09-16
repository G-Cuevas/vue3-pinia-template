import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';

import { computed } from 'vue';
import axiosClient from '../../api/agroeasyApi';
import { usePaginationStore } from '@/store/pagination.store.';

interface AgroeasyParams {
    limit?: number;
    page?: number;
    sort?: string;
    order?: string;
    [filter: string]: any;
}

interface AgroeasyResponse<T> {
    limit: number;
    page: number;
    sort: string;
    order: string;
    total: number;
    data: T[];
}


const getItems = async <T>(endpoint: string, params: AgroeasyParams): Promise<AgroeasyResponse<T>> => {
    
    const { data } = await axiosClient.get<AgroeasyResponse<T>>(endpoint, { params });
    return data;
}

const store = usePaginationStore();
const { params, totalItems, totalPages, items } = storeToRefs(store);

export const useFetchItems = (endpoint: string) => {

    const { isLoading, data } = useQuery(
        [endpoint, params],
        () => getItems(endpoint, params.value as any),
        {
            cacheTime: 1000 * 5,
        }
    );

    return {
        // Properties
        items: computed((): any[] => {
            if (!data.value) return [];

            items.value = data.value.data;
            totalItems.value = data.value.total;
            return data.value.data;
        }),
        isLoading,
        totalPages,
        params,
        refetch: async () => {
            store.setPage(1);
            const { data } = await getItems(endpoint, params.value as any);
            items.value = data;
        },

        // Getters
        setPage: store.setPage,

        // Actions
    }
};