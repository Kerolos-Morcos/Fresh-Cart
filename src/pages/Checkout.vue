<script setup>
import CheckoutHeader from '@/components/checkout/CheckoutHeader.vue';
import CheckoutInputs from '@/components/checkout/CheckoutInputs.vue';

</script>

<template>
    <div class="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
        <div class="container mx-auto px-4">
            <CheckoutHeader />
            <CheckoutInputs />
        </div>
    </div>
</template>

<style scoped></style>