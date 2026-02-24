<script setup>
const inputFeatures = [
    {
        svg: `<svg data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock w-2.5 mr-1.5" role="img"
            viewBox="0 0 384 512" aria-hidden="true">
            <path fill="currentColor"
                d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
            </path>
        </svg>`,
        text: 'SSL Secured',
    },
    {
        svg: `<svg data-prefix="fas" data-icon="users" class="svg-inline--fa fa-users w-4 mr-1.5" role="img"
                        viewBox="0 0 640 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z">
                        </path>
                    </svg>`,
        text: '50K+ Users',
    },
    {
        svg: `<svg data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star w-4 mr-1.5" role="img"
                        viewBox="0 0 576 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                        </path>
                    </svg>`,
        text: '4.9 Rating',
    },
];
</script>

<template>
    <div class="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
        <div class="flex items-center" v-for="inputFeature in inputFeatures" :key="inputFeature.text">
            <div v-html="inputFeature.svg"></div>
            <span>{{ inputFeature.text }}</span>
        </div>
    </div>
</template>

<style scoped></style>