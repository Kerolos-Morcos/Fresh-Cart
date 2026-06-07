<script setup>
import Products from '../shop/Products.vue';
import AsideFilter from './AsideFilter.vue';
import Pagination from './Pagination.vue';
import ProductsOrientation from './ProductsOrientation.vue';
import SortBy from './SortBy.vue';
import { ref, computed } from 'vue';

const pagination = ref(null);
const productsLayout = ref('grid');
const sortValue = ref('');
const emit = defineEmits(['results-count']);

// Products Layout
const productsClasses = computed(() => {
    return productsLayout.value === 'grid'
        ? 'grid! grid-cols-2! sm:grid-cols-3! lg:grid-cols-4! gap-4!'
        : 'block! space-y-4!';
});
</script>

<template>
    <div class="bg-[#FBFCFD]">
        <div class="container mx-auto px-4 py-8">
            <div class="flex gap-8">
                <AsideFilter />
                <main class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-6 gap-4 flex-wrap">
                        <div class="flex items-center gap-4">
                            <!-- Filter - Small Screens -->
                            <button
                                class="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                                <svg data-prefix="fas" data-icon="sliders" class="w-4 svg-inline--fa fa-sliders"
                                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z">
                                    </path>
                                </svg>
                                Filters
                            </button>
                            <ProductsOrientation v-model="productsLayout" />
                        </div>
                        <SortBy v-model="sortValue" />
                    </div>
                    <!-- Products -->
                    <Products :show="false" :special-products-layout="productsClasses"
                        :product-section-vertical-padding="'py-2!'" :product-section-horizontal-padding="'px-0!'"
                        :limit="12" :enable-pagination="true" @pagination-change="pagination = $event"
                        :sort-by="sortValue" @results-count="emit('results-count', $event)" />
                    <!-- Pagination -->
                    <Pagination v-if="pagination && pagination.numberOfPages > 1" :pagination="pagination" />
                </main>
            </div>
        </div>
    </div>

</template>

<style scoped></style>