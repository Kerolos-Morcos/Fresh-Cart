<script setup>
import { useAPI } from '@/composables/useAPI';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import FiltersContent from './FiltersContent.vue';

const route = useRoute();
const router = useRouter();
const { fetchData } = useAPI();

const minPrice = ref(route.query.minPrice || '');
const maxPrice = ref(route.query.maxPrice || '');
const minProductPrice = ref(0);

defineProps({
    categories: {
        type: Array,
        default: () => []
    },
    brands: {
        type: Array,
        default: () => []
    }
});

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

watch(
    () => [route.query.minPrice, route.query.maxPrice],
    ([min, max]) => {
        minPrice.value = min || '';
        maxPrice.value = max || '';
    }
);

watch([minPrice, maxPrice], ([min, max]) => {
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

function setMaxPrice(value) {
    maxPrice.value = value;
}

function isActiveMaxPrice(value) {
    return Number(maxPrice.value) === value;
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
    if (minPrice.value && Number(minPrice.value) < minProductPrice.value) {
        minPrice.value = minProductPrice.value;
    }
    if (maxPrice.value && Number(maxPrice.value) < minProductPrice.value) {
        maxPrice.value = minProductPrice.value;
    }
}

const hasActiveFilters = computed(() =>
    !!route.query.q ||
    !!route.query.categories ||
    !!route.query.brands ||
    !!route.query.minPrice ||
    !!route.query.maxPrice ||
    !!route.query.sort
);

onMounted(() => {
    fetchMinProductPrice();
});
</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <FiltersContent :categories="categories" :brands="brands" :get-query-array="getQueryArray"
                :toggle-query-item="toggleQueryItem" :min-price="minPrice" :max-price="maxPrice"
                @update:min-price="minPrice = $event" @update:max-price="maxPrice = $event"
                :min-product-price="minProductPrice" :normalize-prices="normalizePrices" :set-max-price="setMaxPrice"
                :is-active-max-price="isActiveMaxPrice" :has-active-filters="hasActiveFilters" />
        </div>
    </aside>
</template>

<style scoped></style>