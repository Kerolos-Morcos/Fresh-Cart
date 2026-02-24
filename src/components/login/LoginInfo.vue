<script setup>
import LoginInfoSpecials from './LoginInfoSpecials.vue';

</script>

<template>
    <div class="hidden lg:block">
        <div class="text-center space-y-6">
            <img class="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                src="../../assets/images/cart_items.png">
            <div class="space-y-4">
                <h2 class="text-3xl font-bold text-gray-800">FreshCart - Your One-Stop Shop for Fresh Products
                </h2>
                <p class="text-lg font-medium text-gray-600">Join thousands of happy customers who trust FreshCart for
                    their
                    daily grocery needs</p>
                <LoginInfoSpecials />
            </div>
        </div>
    </div>
</template>

<style scoped></style>