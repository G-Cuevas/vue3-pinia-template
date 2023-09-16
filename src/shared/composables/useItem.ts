import { useQuery } from '@tanstack/vue-query';

import { computed } from 'vue';
import axiosClient from '../../api/agroeasyApi';

const getItem = async <T>(endpoint: string, id: number | string): Promise<T> => {

    const { data } = await axiosClient.get<T>(`${endpoint}/${id}`);
    return data;
}


const useItem = <T>(endpoint: string, id: number | string) => {

    const { isLoading, data } = useQuery(
        [endpoint, id],
        () => getItem<T>(endpoint, id),
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
        item: computed(() => data.value || {} as T),
        isLoading,

        // Getters

        // Actions
    }
};

export default useItem;