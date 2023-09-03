import { defineStore } from "pinia";
import { computed, ref } from 'vue';

export const useCoutnerSetupStore = defineStore('counter-setup', () => {

const counter = ref<number>(0);
const updatedAt = ref<Date>();

const incrementBy = ( value: number ) => {
    counter.value += value;
    updatedAt.value = new Date();
}

return {
    // State properties
    counter,
    updatedAt,

    // Getters
    squared: computed(() => counter.value * counter.value),

    // Actions
    incrementBy,
    increment: () => incrementBy(1),
    reset: () => {
        counter.value = 0;
        updatedAt.value = new Date();
    }
}

});