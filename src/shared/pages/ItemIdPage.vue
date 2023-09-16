import useItem from '../../shared/composables/useItem';
<script setup lang='ts'>
    import { useRoute } from 'vue-router';
    import useItem from '@/shared/composables/useItem';
    import LoadingModal from '@/shared/components/LoadingModal.vue';

    interface Props {
        endpoint: string;
        singularTitle: string;
    }

    const { endpoint, singularTitle } = defineProps<Props>();

    const router = useRoute();
    const { id } = router.params;

    const { item, isLoading } = useItem(endpoint, id as string);

</script>

<template>
    <div v-if="isLoading">
        <LoadingModal/>
    </div>
    <div v-else>
        <h1>{{ singularTitle }}</h1>
        <form>
            <input
                type="text"
                placeholder="Id"
                v-model="item.id"
            />
            <br>
            <input
                type="text"
                placeholder="Name"
                v-model="item.name"
            />
            <br>
            <button type="submit" >Guardar</button>
    
        </form>
        <ul>
            <li
                v-for="property in Object.keys(item)"
            >
                {{ property }}: {{ item[property] }}
            </li>
        </ul>
    </div>
    

</template>


<style scoped>

    input {
        margin: 10px;
        width: 100%;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
    button {
        margin-bottom: 10px;
    }
    
</style>