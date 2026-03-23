<script setup>
defineProps(['order']);
</script>

<template>
    <div class="p-5 sm:p-6">
        <h4 class="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
            <div class="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center">
                <svg data-prefix="fas" data-icon="receipt"
                    class="w-3 svg-inline--fa fa-receipt text-xs text-primary-600" role="img" viewBox="0 0 384 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z">
                    </path>
                </svg>
            </div>
            Order Items
        </h4>
        <div class="space-y-3">
            <div v-for="item in order.cartItems" :key="item._id"
                class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                    <img :alt="item.product.title" class="w-full h-full object-contain" :src="item.product.imageCover">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 truncate">{{ item.product.title }}</p>
                    <p class="text-sm text-gray-500 mt-1">
                        <span class="font-medium text-gray-700">{{ item.count }}</span> × {{ item.price }} EGP
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <p class="text-lg font-bold text-gray-900">{{ item.price * item.count }}</p>
                    <p class="text-xs text-gray-400">EGP</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>