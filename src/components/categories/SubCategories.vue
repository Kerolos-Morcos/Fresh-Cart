<script setup>
import SubCategoriesHeader from './SubCategoriesHeader.vue';
import SubCategoriesBody from './SubCategoriesBody.vue';
import { useAPI } from '@/composables/useAPI.js';
import { useRoute } from 'vue-router';
import { onMounted, provide } from 'vue';

const { fetchData, data } = useAPI();
const route = useRoute();
async function fetchCustomCategory() {
    const res = await fetchData({
        url: `/v1/categories/${route.params.id}`,
        method: 'get',
    });
    if (res) {
        data.value = res.data;
    }
}

onMounted(() => {
    fetchCustomCategory();
})
</script>

<template>
    <SubCategoriesHeader :data="data" />
    <SubCategoriesBody :customCategory="data" />
</template>

<style scoped></style>