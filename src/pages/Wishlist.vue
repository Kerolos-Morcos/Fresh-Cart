<script setup>
import ComponentLoader from '@/components/ComponentLoader.vue';
import EmptyStateComponent from '@/components/EmptyStateComponent.vue';
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
    <EmptyStateComponent v-else-if="wishlistStore.wishlistCount === 0"
        :icon-paths="'M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z'"
        icon-view-box="0 0 512 512" icon-size="md" icon-shape="rounded" icon-bg="bg-gray-100" icon-width="w-10"
        icon-color="text-gray-400" title="Your wishlist is empty" title-size="xl"
        description="Browse products and save your favorites here." cta-label="Browse Products" cta-to="/"
        :cta-icon-path="'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'"
        wrapper-class="container mx-auto px-4 py-10" max-width-class="max-w-sm mx-auto" />
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