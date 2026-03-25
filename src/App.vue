<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore';
import { onMounted } from 'vue';
import { useCartStore } from './stores/cartStore';
import { useWishlistStore } from './stores/wishlistStore';

const authStore = useAuthStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

onMounted(() => {
  authStore.initializeToken();
  cartStore.initCart();
  wishlistStore.getWishlist();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
