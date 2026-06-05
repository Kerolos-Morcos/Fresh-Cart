<script setup>
import { computed, onMounted, ref } from 'vue';
import FooterColumn from './footer/FooterColumn.vue';
import FooterContact from './footer/FooterContact.vue';
import FooterPayments from './footer/FooterPayments.vue';
import FooterSocial from './footer/FooterSocial.vue';
import SpecialServices from './footer/SpecialServices.vue';
import { useAPI } from '@/composables/useAPI.js';
import { useRoute } from 'vue-router';

// Categories API
const categories = ref([]);
const { fetchData } = useAPI();
const route = useRoute();

async function fetchCategories() {
    const res = await fetchData({
        url: '/v1/categories',
    });
    if (res) {
        categories.value = res.data;
    }
}

const visibleCategoryNames = [
    'Electronics',
    "Women's Fashion",
    "Men's Fashion",
    'Beauty & Health'
];

const displayedCategories = computed(() =>
    categories.value.filter(c => visibleCategoryNames.includes(c.name))
);

function categoryLink(name) {
    const category = displayedCategories.value.find(c => c.name === name);
    return {
        label: name,
        to: category ? `/shop?category=${category._id}` : '/shop',
        active: category ? route.query.category === category._id : false
    };
}

onMounted(() => {
    fetchCategories();
});


const footerColumns = computed(() => [
    {
        title: "Shop",
        links: [
            { label: "All Products", to: "/shop", active: route.path === '/shop' && !route.query.category },
            { label: "Categories", to: "/categories", active: route.path === '/categories' },
            { label: "Brands", to: "/brands", active: route.path === '/brands' },
            categoryLink('Electronics'),
            categoryLink("Men's Fashion"),
            categoryLink("Women's Fashion"),
            categoryLink('Beauty & Health'),
        ]
    },
    {
        title: "Account",
        links: [
            { label: "My Account", active: route.path === '/profile', to: "/profile" },
            { label: "Orders", active: route.path === '/orders', to: "/orders" },
            { label: "Wishlist", active: route.path === '/wishlist', to: "/wishlist" },
            { label: "Shopping Cart", active: route.path === '/cart', to: "/cart" },
            { label: "Sign In", active: route.path === '/login', to: "/login" },
            { label: "Create Account", active: route.path === '/register', to: "/register" },
        ]
    },
    {
        title: "Support",
        links: [
            { label: "Contact Us", active: route.path === '/contact', to: "/contact" },
            { label: "Help Center", active: route.path === '/help', to: "/help" },
            { label: "Shipping Info", active: route.path === '/shipping', to: "/shipping" },
            { label: "Returns & Refunds", active: route.path === '/returns', to: "/returns" },
            { label: "Track Order", active: route.path === '/track', to: "/track" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", active: route.path === '/privacy', to: "/privacy" },
            { label: "Terms Of Service", active: route.path === '/terms', to: "/terms" },
            { label: "Cookie Policy", active: route.path === '/cookie', to: "/cookie" },
        ]
    }
]);
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