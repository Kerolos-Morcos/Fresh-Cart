<script setup>
import { useAPI } from '@/composables/useAPI';
import SpecialSectionTitle from '../SpecialSectionTitle.vue';
import { onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import ComponentLoader from '../ComponentLoader.vue';

const { fetchData, error, data, isLoading } = useAPI();

// type boolean show 
defineProps({
    show: {
        type: Boolean,
        default: true
    },
    totalProducts: {
        type: Boolean,
        default: false
    }
})

async function fetchAllProducts() {
    isLoading.value = true;
    const res = await fetchData({ url: "/v1/products" });
    if (res) {
        data.value = res.data;
        isLoading.value = false;
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
    <ComponentLoader v-if="isLoading" :title="'Products'" bgColor="bg-primary-50" iconColor="text-primary-600" />
    <section v-else class="py-10">
        <div class="container mx-auto px-4">
            <div v-show="totalProducts" class="mb-6 text-sm font-medium text-gray-500">Showing {{ data?.length }}
                products</div>
            <SpecialSectionTitle v-show="show" :show-line="true" :section-title="'Featured'"
                :special-title="'Products'" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <ProductCard v-for="product in data" :key="product.id" :product="product" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>