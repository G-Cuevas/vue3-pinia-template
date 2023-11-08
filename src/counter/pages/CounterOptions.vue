<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '../../store/counter-options';

const counterOptions = useCounterOptionsStore()
const { counter, squared } = storeToRefs(counterOptions)
const { incrementBy, reset } = counterOptions
</script>

<template>
    <h1>Counter Options</h1>
    <h2>Counter: {{ counter }}</h2>
    <h2>Squared: {{ squared }}</h2>
    <button @click="incrementBy(-1)"> -1 </button>
    <button @click="incrementBy(1)"> +1 </button>
    <button @click="reset()"> Reset </button>
</template>

<style scoped>

button {
    margin: 0 10px;
    width: fit-content;
}

</style>
