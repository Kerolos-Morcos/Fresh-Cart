<script setup>
import { useAPI } from '@/composables/useAPI';
import SpecialSectionTitle from '../SpecialSectionTitle.vue';
import { onMounted } from 'vue';
import ProductCard from './ProductCard.vue';

const { fetchData, error, data } = useAPI();

async function fetchAllProducts() {
    const res = await fetchData({ url: "/v1/products" });
    if (res) {
        data.value = res.data;
        return res.data;
    } else if (error.value) {
        console.error("Error fetching products:", error.value);
    }
}

onMounted(() => {
    fetchAllProducts();
});
</script>

<template>
    <section class="py-10">
        <div class="container mx-auto px-4">
            <SpecialSectionTitle :show-line="true" :section-title="'Featured'" :special-title="'Products'" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <ProductCard v-for="product in data" :key="product.id" :product="product" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>