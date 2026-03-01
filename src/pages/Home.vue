<script setup>
import HomeServices from '@/components/home/HomeServices.vue';
import HomeSlider from '@/components/home/HomeSlider.vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<template>
  <HomeSlider />
  <main class="">
    <HomeServices />
  </main>
</template>
