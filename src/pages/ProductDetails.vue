<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductDetailsCarousel from '@/components/productDetails/ProductDetailsCarousel.vue';
import ProductDetailsInfo from '@/components/productDetails/ProductDetailsInfo.vue';
import { useAPI } from '@/composables/useAPI';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import ProductDetailsTabs from '@/components/productDetails/ProductDetailsTabs.vue';


const route = useRoute();
const { fetchData, error, data } = useAPI();
const { setBreadcrumb } = useBreadcrumb();

async function fetchProductById() {
    const res = await fetchData({ url: `/v1/products/${route.params.id}` });
    if (res) {
        data.value = res.data;
        setBreadcrumb([
            {
                label: res.data.category.name,
                to: `/category/${res.data.category._id}`
            },
            {
                label: res.data.subcategory?.[0]?.name,
                to: `/category/${res.data.category._id}`
            },
            {
                label: res.data.title
            }
        ].filter(Boolean));
        return res.data;
    } else if (error.value) {
        console.error("Error fetching product details:", error.value);
    }
}

onMounted(() => {
    fetchProductById();
});

const images = computed(() => data.value?.images || [])
</script>

<template>
    <Breadcrumb />
    <div class="py-6">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-8">
                <ProductDetailsCarousel :images="images" />
                <ProductDetailsInfo :data="data" />
            </div>
            <ProductDetailsTabs :data="data" />
        </div>
    </div>
</template>

<style scoped></style>