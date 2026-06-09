<script setup>
import { useAPI } from '@/composables/useAPI';
import SpecialSectionTitle from '../SpecialSectionTitle.vue';
import { computed, onMounted, watch } from 'vue';
import ProductCard from './ProductCard.vue';
import ComponentLoader from '../ComponentLoader.vue';
import NoProductsFound from './NoProductsFound.vue';
import { useRoute, useRouter } from 'vue-router';

const { fetchData, error, data, isLoading } = useAPI();
const route = useRoute();
const router = useRouter();
const emit = defineEmits(['pagination-change', 'results-count']);
const searchQuery = computed(() =>
    String(route.query.q || '').toLowerCase().trim()
);
const allProducts = computed(() => {
    return Array.isArray(data.value) ? data.value : [];
});

const filteredProducts = computed(() => {
    return allProducts.value.filter(product => {
        const title = product.title?.toLowerCase() || '';
        const brand = product.brand?.name?.toLowerCase() || '';
        const category = product.category?.name?.toLowerCase() || '';
        const subcategory = Array.isArray(product.subcategory)
            ? product.subcategory.map(s => s.name?.toLowerCase()).join(' ')
            : '';
        const matchesSearch =
            !searchQuery.value ||
            title.includes(searchQuery.value) ||
            brand.includes(searchQuery.value) ||
            category.includes(searchQuery.value) ||
            subcategory.includes(searchQuery.value);
        const matchesCategory =
            categoryIds.length === 0 ||
            categoryIds.includes(product.category?._id);
        const matchesBrand =
            brandIds.length === 0 ||
            brandIds.includes(product.brand?._id);
        return matchesSearch && matchesCategory && matchesBrand;
    });
});

const displayedProducts = computed(() => {
    if (!searchQuery.value && !hasMultiFilters.value) {
        return filteredProducts.value;
    }

    const page = Number(route.query.page) || 1;
    const perPage = limit || 8;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return filteredProducts.value.slice(start, end);
});

const { show, totalProducts, subcategoryName, subcategoryId, categoryName, categoryId, brandName, brandId, specialProductsLayout, productSectionVerticalPadding, productSectionHorizontalPadding, limit, enablePagination, sortBy, categoryIds, brandIds } = defineProps({
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
    },
    categoryName: {
        type: String,
        default: ''
    },
    categoryId: {
        type: String,
        default: null
    },
    brandName: {
        type: String,
        default: ''
    },
    brandId: {
        type: String,
        default: null
    },
    specialProductsLayout: {
        type: String,
        default: ''
    },
    productSectionVerticalPadding: {
        type: String,
        default: ''
    },
    productSectionHorizontalPadding: {
        type: String,
        default: ''
    },
    limit: {
        type: Number,
        default: null
    },
    enablePagination: {
        type: Boolean,
        default: false
    },
    sortBy: {
        type: String,
        default: ''
    },
    categoryIds: {
        type: Array,
        default: () => []
    },
    brandIds: {
        type: Array,
        default: () => []
    }
})

const hasMultiFilters = computed(() =>
    categoryIds.length > 0 || brandIds.length > 0
);

async function fetchAllProducts() {
    isLoading.value = true;
    let url = `/v1/products`;
    if (searchQuery.value || hasMultiFilters.value) {
        url = `/v1/products?limit=100000000000`;
    } else if (subcategoryId) {
        url = `/v1/products?subcategory=${subcategoryId}`;
    } else if (categoryId) {
        url = `/v1/products?category=${categoryId}`;
    } else if (brandId) {
        url = `/v1/products?brand=${brandId}`;
    }
    if (sortBy) {
        const separator = url.includes('?') ? '&' : '?';
        url += `${separator}sort=${sortBy}`;
    }
    if (enablePagination && limit > 0 && !searchQuery.value) {
        const page = route.query.page || 1;
        const separator = url.includes('?') ? '&' : '?';
        url += `${separator}page=${page}&limit=${limit}`;
    }
    const res = await fetchData({ url });
    if (res) {
        data.value = res.data;
        if (searchQuery.value || hasMultiFilters.value) {
            emit('results-count', filteredProducts.value.length);
            const currentPage = Number(route.query.page) || 1;
            const perPage = limit || 8;
            const numberOfPages = Math.ceil(filteredProducts.value.length / perPage) || 1;
            emit('pagination-change', {
                currentPage,
                numberOfPages,
            });
            isLoading.value = false;
            return;
        } else {
            emit('results-count', data.value?.length || 0);
        }
        const shouldPaginate = enablePagination && limit > 0;
        if (!shouldPaginate) {
            emit('pagination-change', null);
            isLoading.value = false;
            return;
        }
        if (res.data.length === 0 && Number(route.query.page) > 1) {
            await router.replace({
                query: {
                    ...route.query,
                    page: 1
                }
            });
            isLoading.value = false;
            return;
        }
        const currentPage = Number(route.query.page) || 1;
        const numberOfPages =
            res.data.length < limit
                ? currentPage
                : res.metadata?.numberOfPages || 1;
        emit('pagination-change', {
            currentPage,
            numberOfPages,
        });
    } else if (error.value) {
        console.error("Error fetching products:", error.value);
    }
    isLoading.value = false;
}

const activeFilterName = computed(() => {
    return searchQuery.value || subcategoryName || categoryName || brandName || '';
});

onMounted(() => {
    fetchAllProducts();
});

watch(
    () => [subcategoryName, categoryName, subcategoryId, categoryId, brandName, brandId, route.query.page, route.query.q, sortBy, categoryIds.join(','), brandIds.join(',')],
    () => {
        fetchAllProducts();
    }
);
</script>

<template>
    <ComponentLoader v-if="isLoading" :title="'Products'" bgColor="bg-primary-50" iconColor="text-primary-600" />
    <section v-else class="py-10" :class="productSectionVerticalPadding">
        <div class="container mx-auto px-4" :class="productSectionHorizontalPadding">
            <!-- Active Filters -->
            <div v-show="activeFilterName" class="mb-6 flex items-center gap-3 flex-wrap">
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
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                    :class="searchQuery
                        ? ['bg-blue-100!', 'text-blue-700!', 'hover:bg-blue-200!'] : brandId
                            ? ['bg-violet-100!', 'text-violet-700!', 'hover:bg-violet-200!']
                            : ['bg-emerald-100!', 'text-emerald-700!', 'hover:bg-emerald-200!']"
                    :to="searchQuery ? '/search' : '/shop'">
                    <svg v-if="brandName" data-prefix="fas" data-icon="tags"
                        class="w-3.5 svg-inline--fa fa-tags text-xs" role="img" viewBox="0 0 576 512"
                        aria-hidden="true">
                        <path fill="currentColor"
                            d="M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
                        </path>
                    </svg>
                    <svg v-else-if="!searchQuery" data-prefix="fas" data-icon="folder-open"
                        class="w-3.5 svg-inline--fa fa-folder-open text-xs" role="img" viewBox="0 0 576 512"
                        aria-hidden="true">
                        <path fill="currentColor"
                            d="M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z">
                        </path>
                    </svg>
                    {{ activeFilterName }}
                    <svg data-prefix="fas" data-icon="xmark" class="w-2 svg-inline--fa fa-xmark text-xs" role="img"
                        viewBox="0 0 384 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z">
                        </path>
                    </svg>
                </RouterLink>
                <RouterLink class="text-sm font-medium text-gray-500 hover:text-gray-700 underline"
                    :to="searchQuery ? '/search' : '/shop'">
                    Clear all
                </RouterLink>
            </div>
            <div v-show="totalProducts" class="mb-6 text-sm font-medium text-gray-500">Showing {{ data?.length }}
                products</div>
            <SpecialSectionTitle v-show="show" :show-line="true" :section-title="'Featured'"
                :special-title="'Products'" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                :class="specialProductsLayout">
                <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
            </div>
            <!-- No Products Found -->
            <NoProductsFound v-if="!isLoading && displayedProducts?.length === 0" />
        </div>
    </section>
</template>

<style scoped></style>