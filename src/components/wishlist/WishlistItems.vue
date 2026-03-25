<script setup>
import WishlistActionBtns from './WishlistActionBtns.vue';
import WishlistStatus from './WishlistStatus.vue';

defineProps(['wishlistStore']);
</script>

<template>
    <div v-for="item in wishlistStore.wishlistData" :key="item._id"
        class="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
        <div class="md:col-span-6 flex items-center gap-4">
            <RouterLink class="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                :to="`/product/${item._id}`">
                <img :alt="item.title" class="w-full h-full object-contain p-2" :src="item.imageCover">
            </RouterLink>
            <div class="min-w-0">
                <RouterLink class="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                    :to="`/product/${item._id}`">
                    {{ item.title }}
                </RouterLink>
                <p class="text-sm text-gray-400 mt-1 font-medium">{{ item.category.name }}</p>
            </div>
        </div>
        <div class="md:col-span-2 flex md:justify-center items-center gap-2">
            <span class="md:hidden text-sm text-gray-500">Price:</span>
            <div class="text-right md:text-center">
                <div class="font-semibold text-gray-900">{{ item.price }} EGP</div>
            </div>
        </div>
        <WishlistStatus :item="item" />
        <WishlistActionBtns :item="item" />
    </div>
</template>

<style scoped></style>