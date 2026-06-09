<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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
</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <div class="space-y-6">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-900">Categories</h3>
                    </div>
                    <!-- Categories -->
                    <div class="space-y-2 max-h-52 overflow-y-auto">
                        <label v-for="category in categories" :key="category._id"
                            class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox" :checked="getQueryArray('categories').includes(category._id)"
                                @change="toggleQueryItem('categories', category._id)">
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
                            <input placeholder="0"
                                class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                                type="number" value="">
                        </div>
                        <div>
                            <label class="text-xs text-gray-500 mb-1 block">Max (EGP)</label>
                            <input placeholder="No limit"
                                class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                                type="number" value="">
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            500
                        </button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            1K</button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            5K</button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            10K
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
                        <label v-for="brand in brands" :key="brand._id"
                            class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox" :checked="getQueryArray('brands').includes(brand._id)"
                                @change="toggleQueryItem('brands', brand._id)">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                {{ brand.name }}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>