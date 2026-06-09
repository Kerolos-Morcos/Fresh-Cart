<script setup>
import { useRoute, useRouter } from 'vue-router';
import Products from '../shop/Products.vue';
import AsideFilter from './AsideFilter.vue';
import Pagination from './Pagination.vue';
import ProductsOrientation from './ProductsOrientation.vue';
import SortBy from './SortBy.vue';
import { ref, computed, onMounted, watch } from 'vue';
import { useAPI } from '@/composables/useAPI.js';
import AsideFilterOffCanvas from './AsideFilterOffCanvas.vue';

const { fetchData } = useAPI();

const categories = ref([]);
const brands = ref([]);
const route = useRoute();
const router = useRouter();
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

const categoryIds = computed(() => route.query.categories ? String(route.query.categories).split(',') : []);
const brandIds = computed(() => route.query.brands ? String(route.query.brands).split(',') : []);

async function fetchFiltersData() {
    const categoriesRes = await fetchData({ url: '/v1/categories', method: 'get' });
    if (categoriesRes) categories.value = categoriesRes.data;
    const brandsRes = await fetchData({ url: '/v1/brands', method: 'get' });
    if (brandsRes) brands.value = brandsRes.data;
}

const activeFilters = computed(() => {
    return [
        ...categories.value
            .filter(category => categoryIds.value.includes(category._id))
            .map(category => ({
                type: 'categories',
                id: category._id,
                label: category.name
            })),
        ...brands.value
            .filter(brand => brandIds.value.includes(brand._id))
            .map(brand => ({
                type: 'brands',
                id: brand._id,
                label: brand.name
            }))
    ];
});

const minPrice = computed(() =>
    route.query.minPrice ? Number(route.query.minPrice) : null
);

const maxPrice = computed(() =>
    route.query.maxPrice ? Number(route.query.maxPrice) : null
);

const isFiltersOpen = ref(false);


const minPriceValue = ref(route.query.minPrice || '');
const maxPriceValue = ref(route.query.maxPrice || '');
const minProductPrice = ref(0);

function getQueryArray(key) {
    return route.query[key]
        ? String(route.query[key]).split(',')
        : [];
}

function toggleQueryItem(key, id) {
    const currentItems = getQueryArray(key);
    const newItems = currentItems.includes(id)
        ? currentItems.filter(item => item !== id)
        : [...currentItems, id];
    router.push({
        path: '/search',
        query: {
            ...route.query,
            [key]: newItems.length ? newItems.join(',') : undefined,
            page: 1
        }
    });
}

async function fetchMinProductPrice() {
    const res = await fetchData({
        url: '/v1/products?limit=100000',
        method: 'get'
    });
    if (res) {
        const prices = res.data.map(product => product.price);
        minProductPrice.value = Math.min(...prices);
    }
}

function normalizePrices() {
    if (minPriceValue.value && Number(minPriceValue.value) < minProductPrice.value) {
        minPriceValue.value = minProductPrice.value;
    }
    if (maxPriceValue.value && Number(maxPriceValue.value) < minProductPrice.value) {
        maxPriceValue.value = minProductPrice.value;
    }
}

function setMaxPrice(value) {
    maxPriceValue.value = value;
}

function isActiveMaxPrice(value) {
    return Number(maxPriceValue.value) === value;
}

const hasActiveFilters = computed(() =>
    !!route.query.q ||
    !!route.query.categories ||
    !!route.query.brands ||
    !!route.query.minPrice ||
    !!route.query.maxPrice ||
    !!route.query.sort
);

watch([minPriceValue, maxPriceValue], ([min, max]) => {
    router.replace({
        path: '/search',
        query: {
            ...route.query,
            minPrice: min || undefined,
            maxPrice: max || undefined,
            page: 1
        }
    });
});

watch(
    () => [route.query.minPrice, route.query.maxPrice],
    ([min, max]) => {
        minPriceValue.value = min || '';
        maxPriceValue.value = max || '';
    }
);

onMounted(() => {
    fetchFiltersData();
    fetchMinProductPrice();
})
</script>

<template>
    <div class="bg-[#FBFCFD]">
        <div class="container mx-auto px-4 py-8">
            <div class="flex gap-8">
                <AsideFilter :categories="categories" :brands="brands" :get-query-array="getQueryArray"
                    :toggle-query-item="toggleQueryItem" :min-price="minPriceValue" :max-price="maxPriceValue"
                    @update:min-price="minPriceValue = $event" @update:max-price="maxPriceValue = $event"
                    :min-product-price="minProductPrice" :normalize-prices="normalizePrices"
                    :set-max-price="setMaxPrice" :is-active-max-price="isActiveMaxPrice"
                    :has-active-filters="hasActiveFilters" />
                <main class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-6 gap-4 flex-wrap">
                        <div class="flex items-center gap-4">
                            <!-- Filter - Small Screens -->
                            <button @click="isFiltersOpen = true"
                                class="lg:hidden cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                                <svg data-prefix="fas" data-icon="sliders" class="w-4 svg-inline--fa fa-sliders"
                                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z">
                                    </path>
                                </svg>
                                Filters
                            </button>
                            <AsideFilterOffCanvas :is-open="isFiltersOpen" @close="isFiltersOpen = false"
                                :categories="categories" :brands="brands" :get-query-array="getQueryArray"
                                :toggle-query-item="toggleQueryItem" :min-price="minPriceValue"
                                :max-price="maxPriceValue" @update:min-price="minPriceValue = $event"
                                @update:max-price="maxPriceValue = $event" :min-product-price="minProductPrice"
                                :normalize-prices="normalizePrices" :set-max-price="setMaxPrice"
                                :is-active-max-price="isActiveMaxPrice" :has-active-filters="hasActiveFilters" />
                            <ProductsOrientation v-model="productsLayout" />
                        </div>
                        <SortBy v-model="sortValue" />
                    </div>
                    <!-- Products -->
                    <Products :show="false" :special-products-layout="productsClasses"
                        :product-section-vertical-padding="'py-2!'" :product-section-horizontal-padding="'px-0!'"
                        :limit="12" :enable-pagination="true" @pagination-change="pagination = $event"
                        :sort-by="sortValue" @results-count="emit('results-count', $event)" :category-ids="categoryIds"
                        :brand-ids="brandIds" :active-filters="activeFilters" :min-price="minPrice"
                        :max-price="maxPrice" />
                    <!-- Pagination -->
                    <Pagination v-if="pagination && pagination.numberOfPages > 1" :pagination="pagination" />
                </main>
            </div>
        </div>
    </div>

</template>

<style scoped></style>