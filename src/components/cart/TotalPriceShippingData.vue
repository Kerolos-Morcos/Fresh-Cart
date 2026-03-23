<script setup>
defineProps(['cartStore', 'isCheckout']);
</script>

<template>
    <div class="space-y-3">
        <div class="flex justify-between text-gray-600 font-medium">
            <span>Subtotal</span>
            <span class="font-medium text-gray-900">{{ cartStore?.totalCartPrice }} EGP</span>
        </div>
        <div class="flex justify-between text-gray-600">
            <span class="flex items-center gap-2">
                <svg v-show="isCheckout" data-prefix="fas" data-icon="truck"
                    class="w-4.5 svg-inline--fa fa-truck text-gray-400" role="img" viewBox="0 0 576 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                    </path>
                </svg>
                Shipping
            </span>
            <span class="font-medium text-green-600">{{ cartStore?.totalCartPrice > 500 ? 'FREE' : '50 EGP'
                }}</span>
        </div>
        <div class="border-t border-dashed border-gray-200 pt-3 mt-3">
            <div class="flex justify-between items-baseline">
                <span class="text-gray-900 font-semibold">Total</span>
                <div class="text-right">
                    <span class="text-2xl font-bold text-gray-900" :class="{ 'text-primary-600': isCheckout }">{{
                        cartStore?.totalCartPrice > 500 ?
                            cartStore?.totalCartPrice : cartStore?.totalCartPrice + 50 }}</span>
                    <span class="text-sm text-gray-500 ml-1">EGP</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>