<script setup>
import ForgotInfo from '@/components/forgotPassword/ForgotInfo.vue';
import ForgotInputs from '@/components/forgotPassword/ForgotInputs.vue';

</script>

<template>
    <div class="container py-16 mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <ForgotInfo />
            <ForgotInputs />
        </div>
    </div>
</template>

<style scoped></style>