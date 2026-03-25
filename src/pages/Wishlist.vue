<script setup>
import ComponentLoader from '@/components/ComponentLoader.vue';
import EmptyWishlist from '@/components/wishlist/EmptyWishlist.vue';
import WishlistHeader from '@/components/wishlist/WishlistHeader.vue';
import WishlistItems from '@/components/wishlist/WishlistItems.vue';
import { useWishlistStore } from '@/stores/wishlistStore';
import { onMounted, ref } from 'vue';

const wishlistStore = useWishlistStore();
const isLoading = ref(true);

onMounted(async () => {
    if (!wishlistStore.mergingGuestWishlist) {
        await wishlistStore.getWishlist();
    }
    isLoading.value = false;
});
</script>

<template>
    <ComponentLoader v-if="isLoading || wishlistStore.mergingGuestWishlist" :title="'your Wishlist'" />
    <EmptyWishlist v-else-if="wishlistStore.wishlistCount === 0" />
    <div v-else>
        <WishlistHeader :count="wishlistStore.wishlistCount" />
        <div class="min-h-screen bg-gray-50/50">
            <div class="container mx-auto px-4 py-8">
                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div
                        class="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                        <div class="col-span-6">Product</div>
                        <div class="col-span-2 text-center">Price</div>
                        <div class="col-span-2 text-center">Status</div>
                        <div class="col-span-2 text-center">Actions</div>
                    </div>
                    <div class="divide-y divide-gray-100">
                        <WishlistItems :wishlistStore="wishlistStore" />
                    </div>
                </div>
                <div class="mt-8 flex items-center justify-between">
                    <RouterLink class="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
                        to="/shop">
                        ← Continue Shopping
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>