<script setup>
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import Breadcrumb from '../Breadcrumb.vue';
import { onMounted } from 'vue';

const { setBreadcrumb } = useBreadcrumb();

onMounted(() => {
    setBreadcrumb([
        {
            label: 'Cart',
            to: '/cart',
        },
        {
            label: 'Checkout',
        }
    ]);
})
</script>

<template>
    <div class="mb-8">
        <Breadcrumb class="pt-0!" />
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
                <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span
                        class="bg-linear-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20"
                        style="--from: var(--color-primary-600); --to: var(--color-primary-700);">
                        <svg data-prefix="fas" data-icon="receipt" class="w-5 svg-inline--fa fa-receipt" role="img"
                            viewBox="0 0 384 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z">
                            </path>
                        </svg>
                    </span>
                    Complete Your Order
                </h1>
                <p class="text-gray-500 mt-4 font-medium">Review your items and complete your purchase</p>
            </div>
            <RouterLink
                class="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                to="/cart">
                <svg data-prefix="fas" data-icon="arrow-left" class="w-4 svg-inline--fa fa-arrow-left" role="img"
                    viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
                    </path>
                </svg>
                Back to Cart
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-br {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>