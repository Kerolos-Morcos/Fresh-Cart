<script setup>
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';

const cartStore = useCartStore();

const subtotal = computed(() => {
    return cartStore.existingCartData.reduce((sum, item) => {
        return sum + (item.price || 0) * (item.count || 0)
    }, 0)
});
</script>

<template>
    <div class="lg:col-span-1">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
            <div class="bg-gray-900 p-5">
                <h2 class="text-white font-bold text-lg">Order Summary</h2>
            </div>
            <div class="p-5 space-y-4">
                <div class="flex justify-between text-gray-600">
                    <span>Subtotal ({{ cartStore?.numOfCartItems || 0 }} items)</span>
                    <span class="font-semibold">{{ subtotal }} EGP</span>
                </div>
                <div class="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span class="text-green-600 font-medium">Calculated at checkout</span>
                </div>
                <hr class="border-gray-200">
                <div class="flex justify-between text-lg font-bold">
                    <span>Estimated Total</span>
                    <span class="text-primary-600">{{ subtotal }} EGP</span>
                </div>
                <div class="pt-4 space-y-3">
                    <RouterLink
                        class="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all"
                        to="/login?redirect=/cart">
                        <svg data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user w-3.5" role="img"
                            viewBox="0 0 448 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z">
                            </path>
                        </svg>
                        Login to Checkout
                    </RouterLink>
                    <p class="text-xs text-gray-400 text-center">Don't have an account?
                        <RouterLink class="text-primary-600 hover:underline" to="/signup?redirect=/cart">
                            Sign up
                        </RouterLink>
                    </p>
                </div>
                <div class="pt-4 border-t border-gray-100 space-y-2">
                    <p class="text-xs text-gray-500">✓ Your cart items will be saved</p>
                    <p class="text-xs text-gray-500">✓ Track your orders easily</p>
                    <p class="text-xs text-gray-500">✓ Access exclusive member deals</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>