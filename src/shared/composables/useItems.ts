import { useQuery } from '@tanstack/vue-query';
import { storeToRefs, type StoreGeneric } from 'pinia';

import { computed } from 'vue';
import agroeasyApi from '../../api/agroeasyApi';

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

    const { data } = await agroeasyApi.get<AgroeasyResponse<T>>(endpoint, { params });
    return data;
}


export const useItems = <T>(endpoint: string, store: StoreGeneric) => {

    const { params, totalItems, totalPages, items } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        [endpoint, params],
        () => getItems<T>(endpoint, params.value as AgroeasyParams),
        {
            cacheTime: 1000 * 3,
            staleTime: Infinity,
            refetchInterval: 1000 * 5,
            refetchIntervalInBackground: true,
            refetchOnMount: true,
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
        getPage: (page: number) => {
            store.setPage(page);
        }

        // Actions
    }
};