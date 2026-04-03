<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartHeader from '@/components/cart/CartHeader.vue';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';
import CartDetails from '@/components/cart/CartDetails.vue';
import { useCartStore } from '@/stores/cartStore';
import ComponentLoader from '@/components/ComponentLoader.vue';
import EmptyStateComponent from '@/components/EmptyStateComponent.vue';

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
    <EmptyStateComponent v-else-if="cartStore.numOfCartItems === 0"
        :icon-paths="'M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z'"
        icon-view-box="0 0 640 512" icon-size="xl" icon-shape="circle" icon-bg="bg-gray-100" icon-width="w-18"
        icon-color="text-gray-300" title="Your cart is empty" title-size="2xl"
        description="Looks like you haven't added anything to your cart yet.<br>Start exploring our products!"
        cta-label="Start Shopping" cta-to="/"
        :cta-icon-path="'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'"
        cta-class="active:scale-[0.98]" max-width-class="max-w-md" />
    <div v-else class="bg-gray-50 min-h-screen py-8">
        <Breadcrumb class="pt-0! mb-2.5" />
        <div class="container mx-auto px-4">
            <CartHeader />
            <CartDetails />
        </div>
    </div>
</template>

<style scoped></style>