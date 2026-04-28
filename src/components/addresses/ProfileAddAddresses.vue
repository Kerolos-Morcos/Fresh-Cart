<script setup>
import ProfileAddressesAddBtn from './ProfileAddressesAddBtn.vue';

const emit = defineEmits(['submit-success']);
</script>

<template>
    <div class="flex items-center justify-between mb-6">
        <div>
            <h2 class="text-xl font-bold text-gray-900">My Addresses</h2>
            <p class="text-gray-500 text-sm mt-1">Manage your saved delivery addresses</p>
        </div>
        <ProfileAddressesAddBtn @submit-success="(payload) => emit('submit-success', payload)" />
    </div>
</template>

<style scoped></style>