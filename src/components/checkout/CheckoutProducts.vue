<script setup>
const props = defineProps(['cartProducts']);
</script>

<template>
    <div class="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
        <div v-for="product in props.cartProducts" :key="product._id"
            class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div class="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                <img :alt="product.product.title" class="w-full h-full object-contain"
                    :src="product.product.imageCover">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                    {{ product.product.title }}
                </p>
                <p class="text-xs text-gray-500 mt-0.5">{{ product.count }} × {{ product.price }} EGP</p>
            </div>
            <p class="text-sm font-bold text-gray-900 shrink-0">{{ product.count * product.price }}</p>
        </div>
    </div>
</template>

<style scoped></style>