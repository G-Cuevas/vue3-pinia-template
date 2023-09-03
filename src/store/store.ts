import { defineStore, type _UnwrapAll, type StoreDefinition, type StoreGeneric } from 'pinia';
import { ref, type Ref } from 'vue';

interface StoreProperties<T> {
    currentPage: number;
    totalPages: number;
    items: T[];
}

interface StoreGetters {
}

interface StoreActions {
    setItems: (newItems: any[]) => void;
    setPage: (page: number) => void;
    setTotalPages: (total: number, limit: number) => void;
}

export const useStore = <T>(name: string):
StoreDefinition<string, _UnwrapAll<
Pick<StoreProperties<T>, "currentPage" | "items" | "totalPages">>,
Pick<StoreGetters, never>,
Pick<StoreActions, "setItems" | "setPage" | "setTotalPages">> => {

    const store = defineStore(name, () => {

        const currentPage = ref<number>(1);
        const totalPages = ref<number>(0);
        const items = ref<T[]>([]);
    
        return {
            // Properties
            currentPage,
            totalPages,
            items,
    
            // Getters
               
            // Actions
            setItems(newItems: any[]) {
                items.value = newItems;
            },
            
            setPage(page: number) {
                if (page === currentPage.value) return;
                if (page < 1) return;
                if (page > totalPages.value) return;
                
                currentPage.value = page;
            },

            setTotalPages(total: number, limit: number) {
                totalPages.value = Math.ceil(total / limit);;
            }
        }

    });
    
    return store;
    
};