<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import sliderImage from '../../assets/images/home-slider-1.d79601a8.png'

const config = {
    height: 400,
    itemsToShow: 1,
    autoplay: 30000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
}

const sliderData = [
    {
        title: 'Fresh Products Delivered to your Door',
        description: 'Get 20% off your first order',
        cta1: { text: 'Shop Now', link: '/shop' },
        cta2: { text: 'View Deals', link: '/deals' },
    },
    {
        title: 'Premium Quality Guaranteed',
        description: 'Fresh from farm to your table',
        cta1: { text: 'Shop Now', link: '/shop' },
        cta2: { text: 'Learn More', link: '/about' },
    },
    {
        title: 'Fast & Free Delivery',
        description: 'Same day delivery available',
        cta1: { text: 'Order Now', link: '/shop' },
        cta2: { text: 'Delivery Info', link: '/delivery' },
    },
]
</script>

<template>
    <Carousel v-bind="config">
        <Slide v-for="(slide, index) in sliderData" :key="index">
            <div class="relative h-400 sm:h-112.5 md:h-125 w-full bg-cover bg-center flex flex-col"
                :style="{ backgroundImage: `url(${sliderImage})` }">
                <div
                    class="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50 flex items-center px-6 sm:px-10 md:px-16 lg:px-20">
                    <div class="container px-16 sm:px-14 md:px-4 mx-auto">
                        <div class="text-white">
                            <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-96">
                                {{ slide.title }}
                            </h2>
                            <p class="text-base sm:text-base md:text-lg">{{ slide.description }}</p>
                            <div class="mt-4">
                                <RouterLink :to="slide.cta1.link"
                                    class="bg-white border-2 border-white/50  inline-block px-6 py-2 rounded-lg font-semibold duration-300 hover:scale-105 transition-transform"
                                    :class="{
                                        'text-green-500': index === 0,
                                        'text-blue-500': index === 1,
                                        'text-purple-500': index === 2
                                    }">
                                    {{ slide.cta1.text }}
                                </RouterLink>
                                <RouterLink :to="slide.cta2.link"
                                    class="bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold duration-300 hover:scale-105 transition-transform">
                                    {{ slide.cta2.text }}
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Navigation class="hidden! sm:flex! absolute! top-1/2! -translate-y-12!" />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
.carousel {
    /* pagination dots */
    --vc-pgn-background-color: rgba(255, 255, 255, 0.5);
    --vc-pgn-active-color: white;
    --vc-pgn-width: 13px;
    --vc-pgn-height: 13px;
    --vc-pgn-border-radius: 9999px;

    /* navigation buttons */
    --vc-nav-background: rgba(255, 255, 255, 0.8);
    --vc-nav-color: #22c55e;
    --vc-nav-width: 40px;
    --vc-nav-active-width: 40px;
    --vc-nav-height: 40px;
    --vc-nav-border-radius: 9999px;
}

:deep(.carousel__pagination-button) {
    width: 11px;
    height: 11px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
    margin-bottom: 8px;
}

:deep(.carousel__pagination-button--active) {
    width: 30px;
    background: white;
}

:deep(.carousel__pagination-button:hover) {
    transform: scale(1.19);
    background: rgba(255, 255, 255, 0.9);
}

:deep(.carousel__prev svg),
:deep(.carousel__next svg) {
    width: 35px;
    height: 35px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--color-green-500);
    border-radius: 9999px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, background 0.3s ease;
    transform: translateY(50%) scale(1);
}

:deep(.carousel__prev) {
    left: 18px;
}

:deep(.carousel__next) {
    right: 18px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
    background: white;
    transform: translateY(50%) scale(1.08);
}
</style>
