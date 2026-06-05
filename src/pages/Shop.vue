<script setup>
import PagesHeaderComponent from '@/components/PagesHeaderComponent.vue';
import Products from '@/components/shop/Products.vue';
import { useAPI } from '@/composables/useAPI';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { fetchData } = useAPI();

const category = ref(null);
const subCategory = ref(null);
const subCategoryId = computed(() => route.query.subcategory || null);
const categoryId = computed(() => route.query.category || null);
const isHeaderLoading = ref(false);

const headerLabel = computed(() => {
    if (isHeaderLoading.value) return 'Loading...';
    return (
        subCategory.value?.name ||
        category.value?.name ||
        'All Products'
    );
});

const headerDescription = computed(() => {
    if (isHeaderLoading.value) return 'Loading...';
    if (subCategory.value?.name) {
        return `Browse ${subCategory.value.name}`;
    }
    if (category.value?.name) {
        return `Browse products in ${category.value.name}`;
    }
    return 'Explore our complete product collection';
});

const breadcrumbItems = computed(() => {
    if (subCategory.value?.name) {
        return [
            { label: 'Categories', to: '/categories' },
            { label: subCategory.value.name }
        ];
    }
    if (category.value?.name) {
        return [
            { label: 'Categories', to: '/categories' },
            { label: category.value.name, to: `/categories/${category.value._id}` },
            { label: category.value.name }
        ];
    }
    return [
        { label: 'Shop' },
        { label: 'All Products' }
    ];
});

async function fetchFilterData() {
    isHeaderLoading.value = true;
    subCategory.value = null;
    category.value = null;
    if (subCategoryId.value) {
        const res = await fetchData({ url: `/v1/subcategories/${subCategoryId.value}` });
        if (res) subCategory.value = res.data;
        isHeaderLoading.value = false;
        return;
    }
    if (categoryId.value) {
        const res = await fetchData({ url: `/v1/categories/${categoryId.value}` });
        if (res) category.value = res.data;
    }
    isHeaderLoading.value = false;
}

watch(
    () => [subCategoryId.value, categoryId.value],
    fetchFilterData,
    { immediate: true }
);
</script>

<template>
    <PagesHeaderComponent :label="headerLabel" :description="headerDescription" :breadcrumb-items="breadcrumbItems">
        <template #icon>
            <img v-if="category?.image" :alt="category?.slug" class="w-12 h-12 object-contain" :src="category.image">
            <svg v-else data-prefix="fas" data-icon="box-open" class="svg-inline--fa fa-box-open text-3xl" role="img"
                viewBox="0 0 640 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z">
                </path>
            </svg>
        </template>
    </PagesHeaderComponent>
    <Products :show="false" :totalProducts="true" :subcategoryName="subCategory?.name" :subcategoryId="subCategoryId"
        :categoryName="category?.name" :categoryId="categoryId" />
</template>

<style scoped></style>