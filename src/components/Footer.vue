<script setup>
import FooterColumn from './footer/FooterColumn.vue';
import FooterContact from './footer/FooterContact.vue';
import FooterPayments from './footer/FooterPayments.vue';
import FooterSocial from './footer/FooterSocial.vue';
import SpecialServices from './footer/SpecialServices.vue';

const footerColumns = [
    {
        title: "Shop",
        links: [
            { label: "All Products", to: "/products" },
            { label: "Categories", to: "/categories" },
            { label: "Brands", to: "/brands" },
            { label: "Electronics", to: "/products?category=electronics" },
            { label: "Men's Fashion", to: "/products?category=mens-fashion" },
            { label: "Women's Fashion", to: "/products?category=womens-fashion" },
        ]
    },
    {
        title: "Account",
        links: [
            { label: "My Account", to: "/profile" },
            { label: "Orders", to: "/profile/orders" },
            { label: "Wishlist", to: "/wishlist" },
            { label: "Shopping Cart", to: "/cart" },
            { label: "Sign In", to: "/login" },
            { label: "Create Account", to: "/register" },
        ]
    },
    {
        title: "Support",
        links: [
            { label: "Contact Us", to: "/contact" },
            { label: "Help Center", to: "/help" },
            { label: "Shipping Info", to: "/shipping" },
            { label: "Returns & Refunds", to: "/returns" },
            { label: "Track Order", to: "/track" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms Of Service", to: "/terms" },
            { label: "Cookie Policy", to: "/cookie" },
        ]
    }
]

</script>

<template>
    <SpecialServices />
    <footer class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                <div class="lg:col-span-4">
                    <RouterLink class="inline-block mb-6" to="/">
                        <div class="bg-white rounded-lg px-4 py-2 inline-block">
                            <img alt="FreshCart Logo" loading="lazy" width="160" height="31" class="h-8 w-auto"
                                style="color: transparent" src="../assets/images/freshcart-logo.49f1b44d.svg" />
                        </div>
                    </RouterLink>
                    <p class="text-gray-400 mb-6 text-sm leading-relaxed">
                        FreshCart is your one-stop destination for quality products. From
                        fashion to electronics, we bring you the best brands at competitive
                        prices with a seamless shopping experience.
                    </p>
                    <div class="space-y-3 mb-6">
                        <FooterContact />
                    </div>
                    <div class="flex items-center gap-3">
                        <FooterSocial />
                    </div>
                </div>
                <FooterColumn v-for="column in footerColumns" :key="column.title" :title="column.title"
                    :links="column.links" />
            </div>
        </div>
        <div class="border-t border-gray-800">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-gray-500 text-sm text-center md:text-left">
                        © 2026 FreshCart. All rights reserved.
                    </p>
                    <div class="flex items-center gap-4">
                        <FooterPayments />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>