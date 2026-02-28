<script setup>
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<template>
    <div class="hidden lg:block text-sm border-b border-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-10">
                <!-- Left -->
                <div class="flex items-center gap-6 text-gray-500 font-medium">
                    <span class="flex items-center gap-2">
                        <svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck text-primary-600 w-3.5"
                            role="img" viewBox="0 0 576 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                            </path>
                        </svg>
                        <span>Free Shipping on Orders 500 EGP</span>
                    </span>
                    <span class="flex items-center gap-2">
                        <svg data-prefix="fas" data-icon="gift" class="svg-inline--fa fa-gift text-primary-600 w-3.5"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z">
                            </path>
                        </svg>
                        <span>New Arrivals Daily</span>
                    </span>
                </div>

                <!-- Right -->
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-4 text-gray-500 font-medium">
                        <a href="tel:+18001234567"
                            class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                            <svg data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone w-3.5" role="img"
                                viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z">
                                </path>
                            </svg>
                            <span>+1 (800) 123-4567</span>
                        </a>
                        <a href="mailto:support@freshcart.com"
                            class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                            <svg data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope w-3.5"
                                role="img" viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z">
                                </path>
                            </svg>
                            <span>support@freshcart.com</span>
                        </a>
                    </div>
                    <span class="w-px h-4 bg-gray-200"></span>

                    <!-- Logged in -->
                    <div v-if="authStore.isLoggedUser" class="flex items-center gap-4 font-medium">
                        <RouterLink
                            class="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                            to="/profile">
                            <svg data-prefix="far" data-icon="user" class="svg-inline--fa w-3 fa-user text-xs"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z">
                                </path>
                            </svg>
                            <span>kero</span>
                        </RouterLink>
                        <button @click="authStore.logout"
                            class="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-red-500 transition-colors">
                            <svg data-prefix="fas" data-icon="right-from-bracket"
                                class="svg-inline--fa fa-right-from-bracket w-3 text-xs" role="img"
                                viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z">
                                </path>
                            </svg>
                            <span>Sign Out</span>
                        </button>
                    </div>
                    <!-- Logged in -->

                    <!-- Logged Out -->
                    <div v-else class="flex items-center gap-4 font-medium">
                        <RouterLink to="/login"
                            class="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                            <svg data-prefix="far" data-icon="user" class="svg-inline--fa fa-user w-3" role="img"
                                viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z">
                                </path>
                            </svg>
                            <span>Sign In</span>
                        </RouterLink>
                        <RouterLink to="/register"
                            class="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                            <svg data-prefix="fas" data-icon="user-plus" class="svg-inline--fa fa-user-plus w-4"
                                role="img" viewBox="0 0 640 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z">
                                </path>
                            </svg>
                            <span>Sign Up</span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>