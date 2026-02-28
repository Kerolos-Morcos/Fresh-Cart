<script setup>
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<template>
  <main class="px-4">
    <h1>Home</h1>
    <p>token: {{ authStore.token }}</p>
  </main>
</template>
