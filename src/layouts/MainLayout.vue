<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <!-- container mx-auto px-4 py-4 grow -->
        <main class="space-y-4 pt-4 ">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style lang="scss" scoped></style>