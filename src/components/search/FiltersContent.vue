<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    categories: {
        type: Array,
        default: () => []
    },
    brands: {
        type: Array,
        default: () => []
    },
    getQueryArray: {
        type: Function,
        default: () => () => []
    },
    toggleQueryItem: {
        type: Function,
        default: () => { }
    },
    minPrice: [String, Number],
    maxPrice: [String, Number],
    minProductPrice: {
        type: Number,
        default: 0
    },
    normalizePrices: {
        type: Function,
        default: () => { }
    },
    setMaxPrice: {
        type: Function,
        default: () => { }
    },
    isActiveMaxPrice: {
        type: Function,
        default: () => false
    },
    hasActiveFilters: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:minPrice', 'update:maxPrice']);
</script>

<template>
    <div class="space-y-6">
        <div>
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-gray-900">Categories</h3>
            </div>
            <!-- Categories -->
            <div class="space-y-2 max-h-52 overflow-y-auto">
                <label v-for="category in props.categories" :key="category._id"
                    class="flex items-center gap-3 cursor-pointer group">
                    <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox" :checked="props.getQueryArray('categories').includes(category._id)"
                        @change="props.toggleQueryItem('categories', category._id)">
                    <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {{ category.name }}
                    </span>
                </label>
            </div>
        </div>
        <hr class="border-gray-100">
        <!-- Price Range -->
        <div>
            <h3 class="font-bold text-gray-900 mb-4">Price Range</h3>
            <div class="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <label class="text-xs text-gray-500 mb-1 block">Min (EGP)</label>
                    <input :value="props.minPrice" @input="$emit('update:minPrice', $event.target.value)"
                        :min="props.minProductPrice" @blur="props.normalizePrices"
                        :placeholder="String(props.minProductPrice)"
                        class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        type="number" value="">
                </div>
                <div>
                    <label class="text-xs text-gray-500 mb-1 block">Max (EGP)</label>
                    <input :value="props.maxPrice" @input="emit('update:maxPrice', $event.target.value)"
                        :min="props.minProductPrice" @blur="props.normalizePrices" placeholder="No limit"
                        class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        type="number" value="">
                </div>
            </div>
            <div class="flex flex-wrap gap-2">
                <button @click="props.setMaxPrice(500)"
                    class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                    :class="props.isActiveMaxPrice(500)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    Under 500
                </button>
                <button @click="props.setMaxPrice(1000)"
                    class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                    :class="props.isActiveMaxPrice(1000)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    Under 1K
                </button>
                <button @click="props.setMaxPrice(5000)"
                    class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                    :class="props.isActiveMaxPrice(5000)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    Under 5K
                </button>
                <button @click="props.setMaxPrice(10000)"
                    class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                    :class="props.isActiveMaxPrice(10000)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    Under 10K
                </button>
            </div>
        </div>
        <hr class="border-gray-100">
        <!-- Brands -->
        <div>
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-gray-900">Brands</h3>
            </div>
            <div class="space-y-2 max-h-52 overflow-y-auto">
                <label v-for="brand in props.brands" :key="brand._id" class="flex items-center gap-3 cursor-pointer group">
                    <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox" :checked="props.getQueryArray('brands').includes(brand._id)"
                        @change="props.toggleQueryItem('brands', brand._id)">
                    <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {{ brand.name }}
                    </span>
                </label>
            </div>
        </div>
        <hr class="border-gray-100">
        <button v-if="props.hasActiveFilters" @click="router.push({ query: {} })" type="button"
            class="cursor-pointer w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors">Clear
            All Filters
        </button>
    </div>
</template>

<style scoped></style>