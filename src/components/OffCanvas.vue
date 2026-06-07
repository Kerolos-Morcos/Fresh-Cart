<script setup>
import { useSearch } from '@/composables/useSearch';

defineProps(["open", "cartStore", "wishlistStore"]);
const emits = defineEmits(["close"]);

// Search
const { searchValue, submitSearch } = useSearch();

function closeSide(e) {
    if (e.target.closest('a')) {
        emits('close')
    }
}

function handleSearch() {
    submitSearch();
    emits('close');
}
</script>

<template>
    <div>
        <Transition name="fade">
            <div v-if="open" class="fixed inset-0 bg-black/50 z-50 lg:hidden" @click.self="emits('close')"></div>
        </Transition>
        <Transition name="slide">
            <div v-if="open" @click="closeSide"
                class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto">
                <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                    <img alt="FreshCart" loading="lazy" width="160" height="31" class="h-8 w-auto"
                        style="color:transparent" src="../assets/images/freshcart-logo.49f1b44d.svg">
                    <button @click="emits('close')"
                        class="w-9 h-9 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg data-prefix="fas" class="cursor-pointer svg-inline--fa fa-xmark text-gray-600 w-4"
                            role="img" viewBox="0 0 384 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z">
                            </path>
                        </svg>
                    </button>
                </div>
                <form @submit.prevent="handleSearch" class="p-4 border-b border-gray-100">
                    <div class="relative">
                        <input v-model="searchValue" type="text" placeholder="Search products..."
                            class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm"
                            value="">
                        <button type="submit"
                            class="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                            <svg data-prefix="fas" data-icon="magnifying-glass"
                                class="svg-inline--fa fa-magnifying-glass w-3.5 h-3.5" role="img" viewBox="0 0 512 512"
                                aria-hidden="true">
                                <path fill="currentColor"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </form>
                <ul class="p-4">
                    <div class="space-y-1">
                        <li>
                            <RouterLink
                                class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                to="/shop">Shop</RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                to="/categories">Categories</RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                to="/brands">Brands</RouterLink>
                        </li>
                    </div>
                </ul>
                <div class="mx-4 border-t border-gray-100"></div>
                <ul class="p-4 space-y-1">
                    <li>
                        <RouterLink
                            class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                            to="/wishlist">
                            <div class="flex items-center justify-between w-full">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                                        <svg data-prefix="far" data-icon="heart"
                                            class="svg-inline--fa fa-heart text-red-500 w-4.5 h-4.5" role="img"
                                            viewBox="0 0 512 512" aria-hidden="true">
                                            <path fill="currentColor"
                                                d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="font-medium text-gray-700">Wishlist</span>
                                </div>
                                <span v-show="wishlistStore?.wishlistCount > 0"
                                    class="text-white bg-red-500 px-2.25 py-1 rounded-full text-[12px] font-medium">{{
                                        wishlistStore?.wishlistCount }}</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                            to="/cart">
                            <div class="flex items-center justify-between w-full">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                                        <svg data-prefix="fas" data-icon="cart-shopping"
                                            class="svg-inline--fa fa-cart-shopping text-primary-600 w-5 h-5" role="img"
                                            viewBox="0 0 640 512" aria-hidden="true">
                                            <path fill="currentColor"
                                                d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="font-medium text-gray-700">Cart</span>
                                </div>
                                <span v-show="cartStore.numOfCartItems > 0"
                                    class="text-white bg-green-600 px-2.25 py-1 rounded-full text-[12px] font-medium">{{
                                        cartStore?.numOfCartItems }}</span>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
                <div class="mx-4 border-t border-gray-100"></div>
                <div class="p-4 space-y-1">
                    <ul class="grid grid-cols-2 gap-3 pt-2">
                        <li>
                            <RouterLink
                                class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                                to="/login">Sign In</RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
                                to="/register">Sign Up</RouterLink>
                        </li>
                    </ul>
                </div>
                <RouterLink
                    class="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors"
                    to="/contact">
                    <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg data-prefix="fas" data-icon="headset"
                            class="svg-inline--fa fa-headset text-primary-600 w-5 h-5" role="img" viewBox="0 0 448 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-gray-700">Need Help?</div>
                        <div class="text-sm text-primary-600">Contact Support</div>
                    </div>
                </RouterLink>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>