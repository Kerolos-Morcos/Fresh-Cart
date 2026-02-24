<script setup>
import AuthProviderButton from '../AuthProviderButton.vue';


</script>

<template>
    <div class="text-center mb-8">
        <div class="flex items-center justify-center mb-4">
            <span class="text-3xl font-bold text-primary-600">
                Fresh
                <span class="text-gray-800">Cart</span>
            </span>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p class="text-gray-600">Sign in to continue your fresh shopping experience</p>
    </div>
    <div class="mediaContainer flex-col mb-20 mt-0">
        <AuthProviderButton label="Continue With Google" aria-label="Sign in with Google" class="mb-1">
        </AuthProviderButton>
        <AuthProviderButton label="Continue With Facebook" aria-label="Sign in with Facebook">
        </AuthProviderButton>
    </div>
    <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500 font-medium">OR CONTINUE WITH EMAIL</span>
        </div>
    </div>
</template>

<style scoped></style>