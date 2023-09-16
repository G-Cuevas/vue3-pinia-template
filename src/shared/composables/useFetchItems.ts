import { useQuery } from '@tanstack/vue-query';
import { storeToRefs, type StoreGeneric } from 'pinia';

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
    if (endpoint === '') return { limit: 0, page: 0, sort: '', order: '', total: 0, data: [] };
    
    const { data } = await axiosClient.get<AgroeasyResponse<T>>(endpoint, { params });
    return data;
}


export const useFetchItems = (endpoint: string) => {

    const store = usePaginationStore();
    const { params, totalItems, totalPages, items } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        [endpoint, params],
        () => getItems(endpoint, params.value as any),
        {
            refetchOnMount: true,
            refetchOnWindowFocus: true,
            staleTime: 0,
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

        // Getters
        setPage: store.setPage,

        // Actions
    }
};