<script setup>
import PromoCard from './PromoCard.vue';


</script>

<template>
    <section class="py-10">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-6">
                <PromoCard badgeIcon="🔥" badgeText="Deal of the Day" title="Fresh Organic Fruits"
                    description="Get up to 40% off on selected organic fruits" discount="40% OFF" code="ORGANIC40"
                    buttonText="Shop Now" link="/shop" gradientFrom="from-emerald-500" gradientTo="to-emerald-700"
                    buttonColor="text-emerald-600" />
                <PromoCard badgeIcon="✨" badgeText="New Arrivals" title="Exotic Vegetables"
                    description="Discover our latest collection of premium vegetables" discount="25% OFF" code="FRESH25"
                    buttonText="Explore Now" link="/shop?sort=newest" gradientFrom="from-orange-400"
                    gradientTo="to-rose-500" buttonColor="text-orange-500" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>