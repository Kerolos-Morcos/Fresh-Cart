<script setup>
import { ref } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';

const showPassword = ref(false);
const showConfirmPassword = ref(false);

</script>

<template>
    <div>
        <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
            New Password
        </label>
        <div class="relative">
            <Field id="password" name="password" :type="showPassword ? 'text' : 'password'"
                placeholder="Enter new password"
                class="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
            <svg class="w-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 384 512">
                <path fill="currentColor"
                    d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                </path>
            </svg>
            <button type="button" @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
                👁
            </button>
        </div>

        <ErrorMessage name="password" class="block text-sm text-red-500 font-medium mt-1" />
    </div>
    <div>
        <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 mb-2">
            Confirm Password
        </label>
        <div class="relative">
            <Field id="confirmPassword" name="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirm new password"
                class="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
            <svg class="w-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 384 512">
                <path fill="currentColor"
                    d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-64L0 224c0-35.3 28.7-64 64-64z">
                </path>
            </svg>
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
                👁
            </button>
        </div>
        <ErrorMessage name="confirmPassword" class="block text-sm text-red-500 font-medium mt-1" />
    </div>
</template>

<style scoped></style>