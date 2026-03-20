<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore';
import { onMounted } from 'vue';
import { useCartStore } from './stores/cartStore';

const authStore = useAuthStore();
const cartStore = useCartStore();

onMounted(() => {
  authStore.initializeToken();
  cartStore.initCart();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
