<script setup>
import { useAPI } from '@/composables/useAPI';
import { onMounted } from 'vue';
import ComponentLoader from '../ComponentLoader.vue';


const { fetchData, data, isLoading } = useAPI();

async function getAllBrands() {
    isLoading.value = true;
    const res = await fetchData({
        url: "/v1/brands",
    });
    if (res) {
        data.value = res.data;
    }
    isLoading.value = false;
}

onMounted(() => {
    getAllBrands();
})
</script>

<template>
    <ComponentLoader v-if="isLoading" :title="'Brands'" bgColor="bg-violet-50" iconColor="text-violet-600" />
    <div v-else class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            <RouterLink v-for="brand in data" :key="brand.id"
                class="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                :to="`/shop?brand=${brand._id}`">
                <div
                    class="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                    <img :alt="brand.slug"
                        class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        :src="brand.image">
                </div>
                <h3
                    class="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                    {{ brand.name }}
                </h3>
                <div class="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs text-violet-600 font-medium flex items-center gap-1">
                        View Products
                        <svg data-prefix="fas" data-icon="arrow-right"
                            class="w-3 svg-inline--fa fa-arrow-right text-[10px]" role="img" viewBox="0 0 512 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
                            </path>
                        </svg>
                    </span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>