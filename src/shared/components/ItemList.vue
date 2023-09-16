<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoadingModal from './LoadingModal.vue';


export interface ListProps {
    isLoading: boolean;
    items: any[];
    limit: number;
    path: string;
}

const props = defineProps<ListProps>();

</script>

<template>
    <ul>
        <LoadingModal v-if="props.isLoading" />
        <li
            v-else
            v-for="{ id, name } of props.items"
            :key="id"
        >
            <RouterLink :to="{
                name: `${path}-id`,
                params: { id }
            }">
                <span> Id: {{ id }} Name: {{ name }} </span>
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>