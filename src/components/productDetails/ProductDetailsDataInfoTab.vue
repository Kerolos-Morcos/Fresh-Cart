<script setup>
import PDKeyFeatures from './PDKeyFeatures.vue';

defineProps(['data']);
</script>

<template>
    <div v-if="data?._id" class="px-2" style="margin-top: -10px !important;">
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
                <p class="text-gray-600 leading-relaxed">{{ data?.description }}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-medium text-gray-900 mb-3">Product Information</h4>
                    <ul class="space-y-2">
                        <li class="flex justify-between text-sm">
                            <span class="text-gray-500">Category</span>
                            <span class="text-gray-900 font-medium">{{ data?.category?.name }}</span>
                        </li>
                        <li class="flex justify-between text-sm">
                            <span class="text-gray-500">Subcategory</span>
                            <span class="text-gray-900 font-medium">{{ data?.subcategory[0]?.name ?? '-' }}</span>
                        </li>
                        <li class="flex justify-between text-sm">
                            <span class="text-gray-500">Brand</span>
                            <span class="text-gray-900 font-medium">{{ data?.brand?.name }}</span>
                        </li>
                        <li class="flex justify-between text-sm">
                            <span class="text-gray-500">Items Sold</span>
                            <span class="text-gray-900 font-medium">{{ data?.sold }}+ sold</span>
                        </li>
                    </ul>
                </div>
                <PDKeyFeatures />
            </div>
        </div>
    </div>
</template>

<style scoped></style>