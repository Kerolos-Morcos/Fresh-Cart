<script setup>
import FiltersContent from './FiltersContent.vue';

defineProps({
    categories: Array,
    brands: Array,
    getQueryArray: Function,
    toggleQueryItem: Function,
    minPrice: [String, Number],
    maxPrice: [String, Number],
    minProductPrice: Number,
    normalizePrices: Function,
    setMaxPrice: Function,
    isActiveMaxPrice: Function,
    hasActiveFilters: Boolean,
});

defineEmits(['update:minPrice', 'update:maxPrice']);
</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <FiltersContent :categories="categories" :brands="brands" :get-query-array="getQueryArray"
                :toggle-query-item="toggleQueryItem" :min-price="minPrice" :max-price="maxPrice"
                @update:min-price="$emit('update:minPrice', $event)"
                @update:max-price="$emit('update:maxPrice', $event)" :min-product-price="minProductPrice"
                :normalize-prices="normalizePrices" :set-max-price="setMaxPrice" :is-active-max-price="isActiveMaxPrice"
                :has-active-filters="hasActiveFilters" />
        </div>
    </aside>
</template>

<style scoped></style>