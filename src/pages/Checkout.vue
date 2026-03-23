<script setup>
import CartLoader from '@/components/cart/CartLoader.vue';
import CheckoutHeader from '@/components/checkout/CheckoutHeader.vue';
import CheckoutInputs from '@/components/checkout/CheckoutInputs.vue';
import EmptyCheckout from '@/components/checkout/EmptyCheckout.vue';
import { useCartStore } from '@/stores/cartStore';
import { onMounted, provide, ref } from 'vue';

const cartStore = useCartStore();
const isLoading = ref(true);

provide('cartStore', cartStore);

onMounted(async () => {
    if (cartStore.cartData.length === 0) {
        await cartStore.getUserCart();
    }
    isLoading.value = false;
})
</script>

<template>
    <CartLoader v-if="isLoading" :title="'Checkout'" />
    <EmptyCheckout v-else-if="cartStore.cartData.length === 0" />
    <div v-else class="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
        <div class="container mx-auto px-4">
            <CheckoutHeader />
            <CheckoutInputs />
        </div>
    </div>
</template>

<style scoped></style>