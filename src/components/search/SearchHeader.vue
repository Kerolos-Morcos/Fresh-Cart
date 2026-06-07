<script setup>
import { useSearch } from '@/composables/useSearch';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
    resultsCount: {
        type: Number,
        default: 0
    }
})

const { searchValue, submitSearch } = useSearch();
const router = useRouter();
const route = useRoute();
const searchQuery = computed(() => route.query.q || '');

watch(searchValue, (newValue) => {
    const keyword = newValue.trim();
    router.replace({
        path: '/search',
        query: keyword
            ? { q: keyword, page: 1 }
            : {}
    });
});
watch(
    searchQuery,
    (newValue) => {
        searchValue.value = newValue || '';
    },
    { immediate: true }
);
</script>

<template>
    <div class="bg-white border-b border-gray-100">
        <div class="container mx-auto px-4 py-6">
            <nav class="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <RouterLink class="hover:text-primary-600 transition-colors" to="/">Home</RouterLink>
                <span class="text-gray-300">/</span>
                <span class="text-gray-900 font-medium">Search Results</span>
            </nav>
            <form @submit.prevent="submitSearch" class="max-w-2xl">
                <div class="relative">
                    <svg data-prefix="fas" data-icon="magnifying-glass"
                        class="w-3.5 h-3.5 svg-inline--fa fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                        </path>
                    </svg>
                    <input v-model="searchValue" type="text" placeholder="Search for products..."
                        class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-lg"
                        value="">
                </div>
            </form>
            <div class="mt-4" v-if="searchQuery">
                <h1 class="text-2xl font-bold text-gray-900">Search Results for "{{ searchQuery }}"</h1>
                <p v-if="resultsCount > 0" class="text-gray-500 text-sm mt-1">
                    We found {{ resultsCount }} products for you
                </p>
                <p v-else class="text-gray-500 text-sm mt-1">
                    No products found for "{{ searchQuery }}"
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>