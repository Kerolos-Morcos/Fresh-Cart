<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductDetailsCarousel from '@/components/productDetails/ProductDetailsCarousel.vue';
import ProductDetailsInfo from '@/components/productDetails/ProductDetailsInfo.vue';
import { useAPI } from '@/composables/useAPI';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import ProductDetailsTabs from '@/components/productDetails/ProductDetailsTabs.vue';
import SimilarProducts from '@/components/productDetails/SimilarProducts.vue';
import ProductDetailsSkeleton from '@/components/skeleton/ProductDetailsSkeleton.vue';

const loading = ref(false)
const route = useRoute();
const { fetchData, error, data } = useAPI();
const { setBreadcrumb } = useBreadcrumb();

async function fetchProductById() {
    loading.value = true
    const res = await fetchData({ url: `/v1/products/${route.params.id}` });
    if (res) {
        loading.value = false
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

watch(() => route.params.id, () => {
    fetchProductById()
})

const images = computed(() => data.value?.images || [])
</script>

<template>
    <ProductDetailsSkeleton :loading="loading || !data">
        <Breadcrumb />
        <div class="py-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-col lg:flex-row gap-8">
                    <ProductDetailsCarousel :images="images" />
                    <ProductDetailsInfo :data="data" />
                </div>
                <ProductDetailsTabs :data="data" />
                <SimilarProducts v-if="data?.category?._id" :categoryId="data?.category?._id" :productId="data?._id" />
            </div>
        </div>
    </ProductDetailsSkeleton>
</template>

<style scoped></style>