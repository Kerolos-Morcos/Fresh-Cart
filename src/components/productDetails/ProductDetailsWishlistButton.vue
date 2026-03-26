<script setup>
import { useWishlistStore } from '@/stores/wishlistStore';
import { computed } from 'vue';

const wishlistStore = useWishlistStore();
const props = defineProps(['data']);

const inWishlist = computed(() =>
    wishlistStore.isInWishlist(props.data?._id || props.data?.id)
);

async function handleWishlist() {
    if (inWishlist.value) {
        wishlistStore.removeFromWishlist(props.data?._id || props.data?.id);
        return;
    }
    await wishlistStore.addToWishlist(props.data);
}
</script>

<template>
    <button @click="handleWishlist" :class="[
        'cursor-pointer flex-1 border-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2',
        inWishlist
            ? 'border-red-400 text-red-500 hover:border-red-500 hover:bg-red-50'
            : 'border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600'
    ]">
        <template v-if="inWishlist">
            <svg data-prefix="fas" data-icon="trash" class="w-3 svg-inline--fa fa-trash text-sm" role="img"
                viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z">
                </path>
            </svg>
            Remove from Wishlist
        </template>
        <template v-else>
            <svg data-prefix="far" data-icon="heart" class="w-4 svg-inline--fa fa-heart" role="img"
                viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z">
                </path>
            </svg>
            Add to Wishlist
        </template>
    </button>
</template>

<style scoped></style>