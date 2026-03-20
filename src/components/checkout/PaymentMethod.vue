<script setup>
import CheckoutTitle from './CheckoutTitle.vue';
import PaymentCards from './PaymentCards.vue';
import PaymentSecurity from './PaymentSecurity.vue';

</script>

<template>
    <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <CheckoutTitle title="Payment Method" subtitle="Choose how you'd like to pay">
            <template #icon>
                <svg data-prefix="fas" data-icon="wallet" class="w-4.5 svg-inline--fa fa-wallet" role="img"
                    viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                    </path>
                </svg>
            </template>
        </CheckoutTitle>
        <div class="p-6 space-y-4">
            <button type="button"
                class="cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-primary-500 bg-linear-to-r shadow-sm"
                style="--from: var(--color-primary-50); --to: var(--color-emerald-50);">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-linear-to-br text-white shadow-lg shadow-primary-500/30"
                    style="--from: var(--color-primary-500); --to: var(--color-primary-600);">
                    <svg data-prefix="fas" data-icon="money-bill" class="w-5 svg-inline--fa fa-money-bill text-xl"
                        role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 24c0 4.4-3.6 8.1-8 7.5-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48zM64 328c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zm8-136.5c-4.4 .5-8-3.1-8-7.5l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5zm368 129c4.4-.5 8 3.1 8 7.5l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5z">
                        </path>
                    </svg>
                </div>
                <div class="flex-1 text-left">
                    <h3 class="font-bold text-green-700">Cash on Delivery</h3>
                    <p class="text-sm text-gray-500 mt-0.5 font-medium">
                        Pay when your order arrives at your doorstep
                    </p>
                </div>
                <div
                    class="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-primary-600 text-white">
                    <svg data-prefix="fas" data-icon="check" class="w-3 svg-inline--fa fa-check text-xs" role="img"
                        viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z">
                        </path>
                    </svg>
                </div>
            </button>
            <button type="button"
                class="cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-gray-200 hover:border-primary-200 hover:bg-gray-50">
                <div
                    class="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200">
                    <svg data-prefix="fas" data-icon="credit-card" class="w-5 svg-inline--fa fa-credit-card text-xl"
                        role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z">
                        </path>
                    </svg>
                </div>
                <div class="flex-1 text-left">
                    <h3 class="font-bold text-gray-900">Pay Online</h3>
                    <p class="text-sm text-gray-500 mt-0.5 font-medium">
                        Secure payment with Credit/Debit Card via Stripe
                    </p>
                    <PaymentCards />
                </div>
                <div
                    class="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200">
                </div>
            </button>
            <PaymentSecurity />
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-r {
    background-image: linear-gradient(to right, var(--from), var(--to));
}

.bg-linear-to-br {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>