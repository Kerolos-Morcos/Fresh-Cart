<script setup>

</script>

<template>
    <div class="hidden lg:block text-sm border-b border-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-10">
                <!-- Left -->
                <div class="flex items-center gap-6 text-gray-500">
                    <span class="flex items-center gap-2">
                        <i class="fa-solid fa-truck text-primary-600 text-xs"></i>
                        <span>Free Shipping on Orders 500 EGP</span>
                    </span>
                    <span class="flex items-center gap-2">
                        <i class="fa-solid fa-gift text-primary-600 text-xs"></i>
                        <span>New Arrivals Daily</span>
                    </span>
                </div>

                <!-- Right -->
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-4 text-gray-500">
                        <a href="tel:+18001234567"
                            class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                            <i class="fa-solid fa-phone text-xs"></i>
                            <span>+1 (800) 123-4567</span>
                        </a>
                        <a href="mailto:support@freshcart.com"
                            class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                            <i class="fa-regular fa-envelope text-xs"></i>
                            <span>support@freshcart.com</span>
                        </a>
                    </div>
                    <span class="w-px h-4 bg-gray-200"></span>
                    <div class="flex items-center gap-4">
                        <a href="/login"
                            class="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                            <i class="fa-regular fa-user text-xs"></i>
                            <span>Sign In</span>
                        </a>
                        <a href="/register"
                            class="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors">
                            <i class="fa-solid fa-user-plus text-xs"></i>
                            <span>Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>