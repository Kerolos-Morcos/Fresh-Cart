<script setup>
import CheckoutHeader from '@/components/checkout/CheckoutHeader.vue';
import CheckoutInputs from '@/components/checkout/CheckoutInputs.vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import EmptyStateComponent from '@/components/EmptyStateComponent.vue';
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
    <ComponentLoader v-if="isLoading" :title="'Checkout'" />
    <EmptyStateComponent v-else-if="cartStore.cartData.length === 0"
        :icon-paths="'M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z'"
        icon-view-box="0 0 512 512" icon-size="lg" icon-shape="circle" icon-bg="bg-amber-50" icon-width="w-10"
        icon-color="text-amber-500" title="Your cart is empty" title-size="2xl"
        description="Add some items to your cart before checking out." cta-label="Continue Shopping" cta-to="/"
        max-width-class="max-w-md" />
    <div v-else class="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
        <div class="container mx-auto px-4">
            <CheckoutHeader />
            <CheckoutInputs />
        </div>
    </div>
</template>

<style scoped></style>