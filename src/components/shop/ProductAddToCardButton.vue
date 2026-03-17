<script setup>
import { useAPI } from '@/composables/useAPI';
import { useAuthStore } from '@/stores/authStore';
import LoadingSpinner from '../LoadingSpinner.vue';
import addToCartGuest from '@/helpers/addToCartGuest';
import addToCartLoggedUser from '@/helpers/addToCartLoggedUser';
import { useSuccessIcon } from "@/helpers/showSuccessIcon";
import toastMessage from '@/helpers/toastMessage';

const { product } = defineProps(['product']);
const { fetchData, isLoading, data } = useAPI();
const authStore = useAuthStore();
const { success, showSuccess } = useSuccessIcon();

async function addProductToCart() {
    let result;
    if (authStore.isLoggedUser) {
        result = await addToCartLoggedUser(product, fetchData, data, showSuccess);
    }
    else {
        result = addToCartGuest(product, showSuccess);
    }
    if (result && authStore.isLoggedUser) {
        toastMessage(result.message, result.success ? 'success' : 'error');
    }
}
</script>

<template>
    <button @click="addProductToCart" :disabled="isLoading"
        class="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 text-white disabled:opacity-70"
        :class="success ? 'bg-green-500' : 'bg-primary-600 hover:bg-primary-700'">
        <LoadingSpinner v-if="isLoading" />
        <svg v-else-if="success" data-prefix="fas" data-icon="check" class="w-4" viewBox="0 0 448 512">
            <path fill="currentColor"
                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" />
        </svg>
        <svg v-else data-prefix="fas" data-icon="plus" class="w-4" viewBox="0 0 448 512">
            <path fill="currentColor"
                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z" />
        </svg>
    </button>
</template>

<style scoped></style>