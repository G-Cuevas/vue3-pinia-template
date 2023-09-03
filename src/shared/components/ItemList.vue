<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoadingModal from './LoadingModal.vue';


export interface ListProps {
    isLoading: boolean;
    items: any[];
    limit: number;
}

const props = defineProps<ListProps>();

</script>

<template>
    <ul>
        <LoadingModal v-if="props.isLoading" />
        <li
            v-else
            v-for="index in props.items.length"
            :key="index"
        >
            <RouterLink :to="{
                name: 'producer-id',
                params: { id: items[index - 1].id }
            }">
                <span> {{ index }}.- Id: {{ items[index - 1].id }} </span>
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>