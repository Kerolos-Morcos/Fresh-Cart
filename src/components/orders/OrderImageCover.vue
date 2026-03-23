<script setup>
defineProps(['order']);
</script>

<template>
    <div class="relative shrink-0">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br border border-gray-100 p-2.5 overflow-hidden"
            style="--from: var(--color-gray-50); --to: var(--color-white);">
            <img :alt="order.cartItems[0]?.product?.title" class="w-full h-full object-contain"
                :src="order.cartItems[0]?.product?.imageCover">
        </div>
        <div
            class="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
            +{{ order.cartItems.length - 1 }}
        </div>
    </div>
</template>

<style scoped></style>