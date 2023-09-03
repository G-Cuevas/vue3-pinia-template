<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCoutnerSetupStore } from '../../store/counter-setup';

const counterOptions = useCoutnerSetupStore()
const { counter, squared } = storeToRefs(counterOptions)
const { incrementBy, reset } = counterOptions
</script>

<template>
    <h1>Counter Setup</h1>
    <h2>Counter: {{ counter }}</h2>
    <h2>Squared: {{ squared }}</h2>
    <button @click="incrementBy(-1)"> -1 </button>
    <button @click="incrementBy(1)"> +1 </button>
    <button @click="reset()"> Reset </button>
</template>

<style scoped>

button {
    margin: 0 10px;
}

</style>
