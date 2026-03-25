<script setup>
import { useWishlistStore } from '@/stores/wishlistStore';
import { computed } from 'vue';
import toastMessage from '@/helpers/toastMessage';
import { useAuthStore } from '@/stores/authStore';

const props = defineProps(['product']);
const authStore = useAuthStore();
const wishlistStore = useWishlistStore();

const isWishlisted = computed(() =>
    wishlistStore.isInWishlist(props.product.id || props.product._id)
);

async function toggleWishlist() {
    if (isWishlisted.value) {
        await wishlistStore.removeFromWishlist(props.product.id || props.product._id);
        if (authStore.isLoggedUser) toastMessage('Removed from your wishlist!', 'success');
    } else {
        await wishlistStore.toggleWishlist(props.product);
        if (authStore.isLoggedUser) toastMessage('Added to your wishlist!', 'success');
    }
}
</script>

<template>
    <button @click.prevent="toggleWishlist"
        class="cursor-pointer :disabled:cursor-not-allowed :disabled:opacity-40 bg-white h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
        :class="isWishlisted ? 'text-red-500' : 'text-gray-600 hover:text-red-500'" title="Add to wishlist">
        <svg v-if="isWishlisted" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart w-4"
            viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <svg v-else data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart w-4" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" />
        </svg>
    </button>
</template>