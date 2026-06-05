<script setup lang="ts">
import ProfileInfo from '@/components/settings/ProfileInfo.vue';
import UpdateCurrentPassword from '@/components/settings/UpdateCurrentPassword.vue';


</script>

<template>
    <div class="space-y-6">
        <div class="mb-6">
            <h2 class="text-xl font-bold text-gray-900">Account Settings</h2>
            <p class="text-gray-500 text-sm font-medium mt-1">Update your profile information and change your password
            </p>
        </div>
        <ProfileInfo />
        <UpdateCurrentPassword />
    </div>
</template>

<style scoped></style>