<script setup lang="ts">
import LoginInfo from '@/components/login/LoginInfo.vue';
import LoginInputs from '@/components/login/LoginInputs.vue';


</script>

<template>
    <div class="container py-6 mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <LoginInfo />
            <LoginInputs />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>