<script setup>
defineProps(['order'])
</script>

<template>
    <div class="p-4 rounded-xl bg-amber-100 border border-amber-200">
        <h4 class="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
            <div class="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center">
                <svg data-prefix="fas" data-icon="clock" class="w-3 svg-inline--fa fa-clock text-xs text-white"
                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                    </path>
                </svg>
            </div>
            Order Summary
        </h4>
        <div class="space-y-2 text-sm">
            <div class="flex justify-between text-gray-600 font-medium">
                <span>Subtotal</span>
                <span class="font-medium">{{ order?.totalOrderPrice - order?.taxPrice -
                    order?.shippingPrice }} EGP</span>
            </div>
            <div class="flex justify-between text-gray-600 font-medium">
                <span>Shipping</span>
                <span class="font-medium">{{ order?.totalOrderPrice > 500 ? 'Free' : '50 EGP' }}</span>
            </div>
            <div v-show="order.taxPrice !== 0" class="flex justify-between text-gray-600 font-medium">
                <span>Taxes</span>
                <span class="font-medium">{{ order?.taxPrice + ' EGP' }}</span>
            </div>
            <hr class="border-gray-200/50 my-2">
            <div class="flex justify-between pt-1">
                <span class="font-semibold text-gray-900">Total</span>
                <span class="font-bold text-lg text-gray-900">{{ order?.totalOrderPrice > 500 ? order?.totalOrderPrice :
                    order?.totalOrderPrice + 50 }}
                    EGP</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>