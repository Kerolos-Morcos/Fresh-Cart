<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartHeader from '@/components/cart/CartHeader.vue';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';
import CartDetails from '@/components/cart/CartDetails.vue';
import EmptyCart from '@/components/cart/EmptyCart.vue';
import { useCartStore } from '@/stores/cartStore';
import ComponentLoader from '@/components/ComponentLoader.vue';

const authStore = useAuthStore();
const cartStore = useCartStore();

const { setBreadcrumb } = useBreadcrumb();
onMounted(() => {
    setBreadcrumb([
        {
            label: 'Shopping Cart',
        }
    ]);
    if (authStore.isLoggedUser) {
        if (!cartStore.mergingGuestCart) {
            cartStore.getUserCart();
        }
    } else {
        cartStore.loadGuestCart();
    }
});
</script>

<template>
    <ComponentLoader v-if="cartStore.loadingCart || cartStore.mergingGuestCart" :title="'your cart'" />
    <EmptyCart v-else-if="cartStore.numOfCartItems === 0" />
    <div v-else class="bg-gray-50 min-h-screen py-8">
        <Breadcrumb class="pt-0! mb-2.5" />
        <div class="container mx-auto px-4">
            <CartHeader />
            <CartDetails />
        </div>
    </div>
</template>

<style scoped></style>