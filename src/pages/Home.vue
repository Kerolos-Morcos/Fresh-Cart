<script setup>
import HomeSlider from '@/components/home/HomeSlider.vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<template>
  <HomeSlider />
  <main class="container mx-auto px-4">
  </main>
</template>
