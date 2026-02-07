<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <Navbar />
    <main class="container mx-auto px-4 h-100">
        <RouterView />
    </main>
    <Footer />
</template>

<style lang="scss" scoped></style>