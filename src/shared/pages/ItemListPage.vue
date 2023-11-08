<script setup lang="ts">
import ItemList from '@/shared/components/ItemList.vue';
import PaginationNumbers from '@/shared/components/PaginationNumbers.vue';
import { useFetchItems } from '../composables/useFetchItems';

interface Props {
    endpoint: string;
    path: string;
    pluralTitle: string;
}

const { endpoint, path, pluralTitle } = defineProps<Props>();
const { items, isLoading, totalPages, params, setPage } = useFetchItems(endpoint);

setPage(1);

</script>

<template>
    <div>
        <h1>{{ pluralTitle }}</h1>
        <button @click="refetch">Refetch</button>
    </div>
    <ItemList
        :path="path"
        :items="items"
        :limit="params.limit"
        :isLoading="isLoading"
      />

    <PaginationNumbers
        :page="params.page"
        :totalPages="totalPages"
        @page-changed="setPage"
      />
</template>


<style scoped>

    .container {
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>@/store/pagination../composables/useFetchItems