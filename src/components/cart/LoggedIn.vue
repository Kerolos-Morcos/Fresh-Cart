<script setup>
import { useCartStore } from '@/stores/cartStore';
import FreeShipping from './FreeShipping.vue';
import PaidShipping from './PaidShipping.vue';

const cartStore = useCartStore();
</script>

<template>
    <div class="lg:col-span-1">
        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
            <div class="bg-linear-to-r px-6 py-4"
                style="--from: var(--color-primary-600); --to: var(--color-primary-700);">
                <h2 class="text-lg font-bold text-white flex items-center gap-2">
                    <svg data-prefix="fas" data-icon="bag-shopping" class="svg-inline--fa fa-bag-shopping w-4"
                        role="img" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z">
                        </path>
                    </svg>
                    Order Summary
                </h2>
                <p class="text-primary-100 text-sm mt-1">{{ cartStore?.numOfCartItems }} items in your cart</p>
            </div>
            <div class="p-6 space-y-5">
                <FreeShipping v-if="cartStore?.totalCartPrice > 500" />
                <PaidShipping v-else :totalCartPrice="cartStore?.totalCartPrice" />
                <div class="space-y-3">
                    <div class="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span class="font-medium text-gray-900">{{ cartStore?.totalCartPrice }} EGP</span>
                    </div>
                    <div class="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span class="font-medium text-green-600">{{ cartStore?.totalCartPrice > 500 ? 'Free' : '50 EGP'
                        }}</span>
                    </div>
                    <div class="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div class="flex justify-between items-baseline">
                            <span class="text-gray-900 font-semibold">Total</span>
                            <div class="text-right">
                                <span class="text-2xl font-bold text-gray-900">{{ cartStore?.totalCartPrice > 500 ?
                                    cartStore?.totalCartPrice : cartStore?.totalCartPrice + 50 }}</span>
                                <span class="text-sm text-gray-500 ml-1">EGP</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="cursor-pointer w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50 transition-all">
                    <svg data-prefix="fas" data-icon="tag" class="svg-inline--fa fa-tag w-3.5" role="img"
                        viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                        </path>
                    </svg>
                    <span class="text-sm font-medium">Apply Promo Code</span>
                </button>
                <RouterLink
                    class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                    to="/checkout">
                    <svg data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock w-3.5" role="img"
                        viewBox="0 0 384 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                        </path>
                    </svg>
                    <span>Secure Checkout</span>
                </RouterLink>
                <div class="flex items-center justify-center gap-4 py-2">
                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg data-prefix="fas" data-icon="shield-halved"
                            class="svg-inline--fa fa-shield-halved text-green-500 w-4" role="img" viewBox="0 0 512 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                            </path>
                        </svg>
                        <span>Secure Payment</span>
                    </div>
                    <div class="w-px h-4 bg-gray-200"></div>
                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck text-blue-500 w-4"
                            role="img" viewBox="0 0 576 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                            </path>
                        </svg>
                        <span>Fast Delivery</span>
                    </div>
                </div>
                <RouterLink class="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium py-2"
                    to="/">
                    ← Continue Shopping
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-r {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>