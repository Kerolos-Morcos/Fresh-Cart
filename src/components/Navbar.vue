<script setup>
import { ref } from 'vue';
import OffCanvas from './OffCanvas.vue';
import Topbar from './TopBar.vue';
import { useAuthStore } from '@/stores/authStore';
import UserSettings from './navbar/UserSettings.vue';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';

const authStore = useAuthStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

const isCanvasOpen = ref(false);
const isOpen = ref(false);

function toggleCanvas() {
    isCanvasOpen.value = !isCanvasOpen.value
}

function closeDropdown() {
    isOpen.value = false;
}
</script>

<template>
    <Topbar />
    <nav class="sticky top-0 z-40 bg-white shadow-sm">
        <div class="bg-white">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
                    <RouterLink class="shrink-0" to="/">
                        <img alt="FreshCart" loading="lazy" width="160" height="31" class="h-6 lg:h-8 w-auto"
                            src="../assets/images/freshcart-logo.49f1b44d.svg">
                    </RouterLink>
                    <form class="hidden lg:flex flex-1 max-w-2xl">
                        <div class="relative w-full">
                            <input type="text" placeholder="Search for products, brands and more..."
                                class="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                                value="">
                            <button type="submit"
                                class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"><svg
                                    data-prefix="fas" data-icon="magnifying-glass"
                                    class="svg-inline--fa fa-magnifying-glass w-3.5 h-3.5" role="img"
                                    viewBox="0 0 512 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </form>
                    <ul class="hidden xl:flex items-center gap-6">
                        <RouterLink class="text-gray-700 hover:text-primary-600 font-medium transition-colors" to="/">
                            Home
                        </RouterLink>
                        <RouterLink class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                            to="/shop">
                            Shop
                        </RouterLink>
                        <div class="relative group cursor-pointer" @mouseenter="isOpen = true;"
                            @mouseleave="isOpen = false;">
                            <button
                                class="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2 cursor-pointer">Categories<svg
                                    data-prefix="fas" data-icon="chevron-down"
                                    class="svg-inline--fa fa-chevron-down w-3 h-3 transition-transform group-hover:rotate-180"
                                    role="img" viewBox="0 0 448 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                                    </path>
                                </svg>
                            </button>
                            <div v-show="isOpen" class="absolute top-full left-0 pt-1 transition-all duration-200">
                                <div class="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                                    <RouterLink @click="closeDropdown"
                                        class="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        to="/categories">All Categories</RouterLink>
                                    <RouterLink @click="closeDropdown"
                                        class="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        to="/products?category=6439d58a0049ad0b52b9003f">Electronics</RouterLink>
                                    <RouterLink @click="closeDropdown"
                                        class="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        to="/products?category=6439d5b90049ad0b52b90048">Women's Fashion</RouterLink>
                                    <RouterLink @click="closeDropdown"
                                        class="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        to="/products?category=6439d2d167d9aa4ca970649f">Men's Fashion</RouterLink>
                                    <RouterLink @click="closeDropdown"
                                        class="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        to="/products?category=6439d40367d9aa4ca97064a8">Beauty &amp; Health
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                        <RouterLink class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                            to="/brands">Brands</RouterLink>
                    </ul>
                    <div class="flex items-center gap-1 lg:gap-2">
                        <RouterLink exact-active-class="''"
                            class="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
                            to="/contact">
                            <div class="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                                <svg data-prefix="fas" data-icon="headset"
                                    class="svg-inline--fa fa-headset text-primary-600 w-3.5 h-3.5" role="img"
                                    viewBox="0 0 448 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z">
                                    </path>
                                </svg>
                            </div>
                            <div class="text-xs">
                                <div class="text-gray-400">Support</div>
                                <div class="font-semibold text-gray-700">24/7 Help</div>
                            </div>
                        </RouterLink>
                        <RouterLink
                            class="hidden lg:flex relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                            title="Wishlist" to="/wishlist">
                            <svg data-prefix="far" data-icon="heart"
                                class="svg-inline--fa fa-heart w-5.5 h-5.5 text-gray-500 group-hover:text-primary-600 transition-colors"
                                role="img" viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z">
                                </path>
                            </svg>
                            <span v-if="wishlistStore?.wishlistCount > 0"
                                class="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{{
                                    wishlistStore?.wishlistCount }}</span>
                        </RouterLink>
                        <RouterLink
                            class="hidden lg:flex relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                            title="Cart" to="/cart">
                            <svg data-prefix="fas" data-icon="cart-shopping"
                                class="svg-inline--fa fa-cart-shopping w-6 h-6 text-gray-500 group-hover:text-primary-600 transition-colors"
                                role="img" viewBox="0 0 640 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">
                                </path>
                            </svg>
                            <span v-if="cartStore?.numOfCartItems > 0"
                                class="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-primary-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{{
                                    cartStore?.numOfCartItems }}</span>
                        </RouterLink>
                        <UserSettings v-if="authStore.isLoggedUser" />
                        <RouterLink v-else exact-active-class="''"
                            class="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20"
                            to="/login">
                            <svg data-prefix="far" data-icon="user" class="svg-inline--fa fa-user w-3 h-3" role="img"
                                viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z">
                                </path>
                            </svg>Sign In
                        </RouterLink>
                        <button @click="toggleCanvas"
                            class="lg:hidden ml-1 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center cursor-pointer transition-colors">
                            <svg data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars w-5 h-5" role="img"
                                viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- OffCanvas -->
    <OffCanvas :open="isCanvasOpen" @close="toggleCanvas" :cartStore="cartStore" :wishlistStore="wishlistStore" />
</template>

<style scoped></style>