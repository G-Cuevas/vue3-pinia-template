<script setup lang='ts'>
import { computed, toRef } from 'vue';


interface PaginationProps {
    page: number;
    totalPages: number;
}
interface PaginationEmits {
    (e: 'pageChanged', page: number): void;
}

const props = defineProps<PaginationProps>();
const emits = defineEmits<PaginationEmits>();

const totalPages = toRef(props, 'totalPages');
const page = toRef(props, 'page');
const totalPageNumbers = computed(() => 
    [...Array(totalPages.value)].map((v, i) => i + 1)
);

</script>

<template>
    <div>
        <button
            :disabled="page === 1"
            @click="emits( 'pageChanged', page - 1 )"
            >Anterior</button>
        <button
            v-for="number in totalPageNumbers"
            :key="number"
            :class="{ active: page === number }"
            @click="emits( 'pageChanged', number )"
        >
            {{ number }}
        </button>

        <button
            :disabled="page === totalPages"
            @click="emits( 'pageChanged', props.page + 1 )"
        >Siguiente</button>
    </div>
</template>


<style scoped>
    div {
        margin-top: 20px;
    }

    button {
        background-color: #0ac000;
        border: 2px solid #089a00;
        border-width: 2px;
        color: #003a3c;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        margin-right: 10px;
        font-weight: bold;
        border-radius: 3px;
        transition: 0.3s;
    }

    button:hover {
        background-color: #089a00;
        border: 2px solid #067e00;
    }

    button.active {
        background-color: #067e00;
        border: 2px solid #056300;
    }

    button:disabled {
        cursor: default;
        background-color: #878787;
        color: #adadad;
        border: 2px solid #616161;
    }

</style>