<script setup>
import RegisterFeatures from './RegisterFeatures.vue';

const features = [
    {
        svg: `<svg data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star w-5 " role="img"
                        viewBox="0 0 576 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                        </path>
                    </svg>`,
        title: 'Premium Quality',
        description: 'Premium quality products sourced from trusted suppliers.'
    },
    {
        svg: `<svg data-prefix="fas" data-icon="truck-fast" class="svg-inline--fa fa-truck-fast w-5" role="img"
                        viewBox="0 0 640 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                        </path>
                    </svg>`,
        title: 'Fast Delivery',
        description: 'Same-day delivery available in most areas'
    },
    {
        svg: `<svg data-prefix="fas" data-icon="shield-halved" class="svg-inline--fa fa-shield-halved w-5"
                        role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                        </path>
                    </svg>`,
        title: 'Secure Shopping',
        description: 'Your data and payments are completely secure'
    },
];
</script>

<template>
    <div>
        <h1 class="text-4xl font-bold">Welcome to <span class="text-primary-600">FreshCart</span></h1>
        <p class="text-xl mt-2 mb-4">Join thousands of happy customers who enjoy fresh groceries delivered right to
            their doorstep.</p>
        <ul class="*:flex *:items-start *:gap-4 space-y-6 my-8">
            <RegisterFeatures v-for="feature in features" :key="feature.title" :feature="feature" />
        </ul>
        <div class="review bg-white shadow-sm p-4 rounded-md">
            <div class="author flex items-center gap-4 mb-4">
                <img alt="" loading="lazy" width="512" height="512" class="size-12 rounded-full"
                    style="color:transparent" src="../../assets/images/review-author.png">
                <div>
                    <h3>Sarah Johnson</h3>
                    <div class="*:text-yellow-300 flex *:w-5 gap-0.5">
                        <svg data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star"
                            v-for="(value, index) in 5" :key="index" role="img" viewBox="0 0 576 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <blockquote>
                <p class="italic text-gray-600 font-medium">"FreshCart has transformed my shopping experience. The quality of
                    the products is outstanding, and the delivery is always on time. Highly recommend!"</p>
            </blockquote>
        </div>
    </div>
</template>

<style scoped></style>