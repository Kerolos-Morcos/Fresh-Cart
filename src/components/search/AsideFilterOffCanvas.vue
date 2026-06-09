<script setup>
import FiltersContent from './FiltersContent.vue';

const props = defineProps({
    isOpen: Boolean,
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
    clearAllFilters: Function
});

defineEmits(['close']);
</script>

<template>
    <div v-if="props.isOpen" class="fixed inset-0 z-50 lg:hidden">
        <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>

        <div class="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-bold">Filters</h2>

                <button @click="$emit('close')"
                    class="cursor-pointer w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    ×
                </button>
            </div>

            <FiltersContent :categories="props.categories" :brands="props.brands" :get-query-array="props.getQueryArray"
                :toggle-query-item="props.toggleQueryItem" :min-price="props.minPrice" :max-price="props.maxPrice"
                @update:min-price="$emit('update:minPrice', $event)"
                @update:max-price="$emit('update:maxPrice', $event)" :min-product-price="props.minProductPrice"
                :normalize-prices="props.normalizePrices" :set-max-price="props.setMaxPrice"
                :is-active-max-price="props.isActiveMaxPrice" :has-active-filters="props.hasActiveFilters" />
        </div>
    </div>
</template>

<style scoped></style>