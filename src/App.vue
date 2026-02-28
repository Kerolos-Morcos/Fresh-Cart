<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.initializeToken();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
