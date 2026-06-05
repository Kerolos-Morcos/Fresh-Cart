<script setup>
import { useAPI } from '@/composables/useAPI';
import SpecialSectionTitle from '../SpecialSectionTitle.vue';
import { onMounted, watch } from 'vue';
import ProductCard from './ProductCard.vue';
import ComponentLoader from '../ComponentLoader.vue';

const { fetchData, error, data, isLoading } = useAPI();
const { show, totalProducts, subcategoryName, subcategoryId } = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    totalProducts: {
        type: Boolean,
        default: false
    },
    subcategoryName: {
        type: String,
        default: ''
    },
    subcategoryId: {
        type: String,
        default: null
    }
})

async function fetchAllProducts() {
    isLoading.value = true;
    const url = subcategoryId
        ? `/v1/products?subcategory=${subcategoryId}`
        : `/v1/products`;
    const res = await fetchData({ url });
    if (res) {
        data.value = res.data;
    } else if (error.value) {
        console.error("Error fetching products:", error.value);
    }
    isLoading.value = false;
}

onMounted(() => {
    fetchAllProducts();
});

watch(
    () => subcategoryName,
    () => {
        fetchAllProducts();
    }
);
</script>

<template>
    <ComponentLoader v-if="isLoading" :title="'Products'" bgColor="bg-primary-50" iconColor="text-primary-600" />
    <section v-else class="py-10">
        <div class="container mx-auto px-4">
            <!-- Active Filters -->
            <div v-show="subcategoryName" class="mb-6 flex items-center gap-3 flex-wrap">
                <span class="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <svg data-prefix="fas" data-icon="filter" class="w-3 svg-inline--fa fa-filter" role="img"
                        viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z">
                        </path>
                    </svg>
                    Active Filters:
                </span>
                <RouterLink
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-200 transition-colors"
                    to="/shop">
                    <svg data-prefix="fas" data-icon="folder-open" class="w-3.5 svg-inline--fa fa-folder-open text-xs"
                        role="img" viewBox="0 0 576 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z">
                        </path>
                    </svg>
                    {{ subcategoryName }}
                    <svg data-prefix="fas" data-icon="xmark" class="w-2 svg-inline--fa fa-xmark text-xs" role="img"
                        viewBox="0 0 384 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z">
                        </path>
                    </svg>
                </RouterLink>
                <RouterLink class="text-sm font-medium text-gray-500 hover:text-gray-700 underline" to="/shop">
                    Clear all
                </RouterLink>
            </div>
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