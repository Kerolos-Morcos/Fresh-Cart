<script setup>
import { useAuthStore } from '@/stores/authStore';
import CartProductItem from './CartProductItem.vue';
import LoggedIn from './LoggedIn.vue';
import NotLoggedIn from './NotLoggedIn.vue';
import { confirmClearCart, showSuccess } from '@/helpers/swalCustomAlerts';
import { useCartStore } from '@/stores/cartStore';


const authStore = useAuthStore();
const cartStore = useCartStore();

async function clearAllCartItems() {
    const result = await confirmClearCart();
    if (!result.isConfirmed) return;
    await cartStore.clearCart();
    await showSuccess({ title: "Cart Cleared!", text: "All items have been removed" });
}
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
            <div class="space-y-4">
                <CartProductItem v-for="cartItem in cartStore.existingCartData"
                    :key="cartItem._id ?? cartItem.product?._id ?? cartItem.product?.id" :cartItem="cartItem" />
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <RouterLink class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                    to="/">
                    <span>←</span> Continue Shopping
                </RouterLink>
                <button @click="clearAllCartItems"
                    class="cursor-pointer flex items-center hover:scale-101 gap-2 text-sm text-gray-400 hover:text-red-500 transition-all duration-300">
                    <svg data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash text-xs w-3" role="img"
                        viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z">
                        </path>
                    </svg>
                    <span>Clear all items</span>
                </button>
            </div>
        </div>
        <NotLoggedIn v-if="!authStore.isLoggedUser" />
        <LoggedIn v-else />
    </div>
</template>

<style scoped></style>