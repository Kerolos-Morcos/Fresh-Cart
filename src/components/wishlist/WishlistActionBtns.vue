<script setup>
import { confirmDelete, showSuccess } from '@/helpers/swalCustomAlerts';
import toastMessage from '@/helpers/toastMessage';
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import LoadingSpinner from '../LoadingSpinner.vue';
import { computed, ref } from 'vue';

const wishlistStore = useWishlistStore();
const props = defineProps(['item']);

const authStore = useAuthStore();
const cartStore = useCartStore();
const isLoading = ref(false);

async function removeFromWishlist() {
    const result = await confirmDelete({
        text: "Remove",
        itemName: props.item.title
    });
    if (!result.isConfirmed) return;
    await wishlistStore.removeFromWishlist(props.item.id || props.item._id);
    await showSuccess({ title: "Removed!", text: "Item removed from wishlist" });
}

const product = computed(() => props.item.product || props.item);

const isInCart = computed(() => {
    const id = product.value.id || product.value._id;
    return cartStore.isProductInCart(id);
});

async function addToCart() {
    isLoading.value = true;
    const result = await cartStore.addToCart(product.value);
    if (result?.success) {
        await wishlistStore.removeFromWishlist(product.value.id || product.value._id);
        toastMessage('Added to cart!', 'success');
        isLoading.value = false;
    } else {
        toastMessage(result?.message || 'Something went wrong', 'error');
    }
}
</script>

<template>
    <div class="md:col-span-2 flex items-center gap-2 md:justify-center">
        <RouterLink v-if="!authStore.isLoggedUser && isInCart"
            class="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            to="/cart">
            <svg data-prefix="fas" data-icon="check" class="w-3 svg-inline--fa fa-check text-xs text-green-600"
                role="img" viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z">
                </path>
            </svg>
            <span class="md:hidden lg:inline">View Cart</span>
        </RouterLink>
        <button v-else @click="addToCart" :disabled="authStore.isLoggedUser && isLoading"
            class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-primary-600 text-white hover:bg-primary-700">
            <LoadingSpinner v-if="authStore.isLoggedUser && isLoading" />
            <svg v-else data-prefix="fas" data-icon="cart-shopping" class="w-4 svg-inline--fa fa-cart-shopping text-xs"
                role="img" viewBox="0 0 640 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">
                </path>
            </svg>
            <span class="md:hidden lg:inline">{{ isLoading ? 'Processing...' : 'Add to Cart' }}</span>
        </button>
        <button @click="removeFromWishlist(props.item._id)" :disabled="isLoading"
            class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
            title="Remove">
            <svg data-prefix="fas" data-icon="trash" class="w-3.25 svg-inline--fa fa-trash text-sm" role="img"
                viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z">
                </path>
            </svg>
        </button>
    </div>
</template>

<style scoped></style>