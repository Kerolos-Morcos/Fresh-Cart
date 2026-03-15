<script setup>
import { computed } from "vue";

const props = defineProps({
    rating: Number,
    count: Number,
    text: String,
    svgWidth: String,
    textSize: String,
    showText: {
        type: Boolean,
        default: true
    },
});

const fullStars = computed(() => Math.floor(props.rating || 0));
const hasHalf = computed(() => (props.rating || 0) % 1 !== 0);
const emptyStars = computed(() =>
    Math.max(0, 5 - fullStars.value - (hasHalf.value ? 1 : 0))
);
</script>

<template>
    <div class="flex items-center">
        <div class="flex text-amber-400 mr-2">
            <!-- Full -->
            <svg v-for="n in fullStars" :key="'f' + n" :class="svgWidth ? svgWidth : 'w-4'" viewBox="0 0 576 512">
                <path fill="currentColor"
                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                </path>
            </svg>
            <!-- Half -->
            <svg v-if="hasHalf" :class="svgWidth ? svgWidth : 'w-4'" viewBox="0 0 576 512">
                <path fill="currentColor"
                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9zM264.1 91.8l0 284.1-100.1 50.9 19.8-125.5c1.2-7.6-1.3-15.3-6.7-20.7l-89.8-89.9 125.5-20c7.6-1.2 14.1-6 17.6-12.8l33.8-66.2zm48 284.1l0-284.1 33.8 66.2c3.5 6.8 10 11.6 17.6 12.8l125.5 20-89.8 89.9c-5.4 5.4-7.9 13.1-6.7 20.7l19.8 125.5-100.1-50.9z">
                </path>
            </svg>
            <!-- Empty -->
            <svg v-for="n in emptyStars" :key="'e' + n" :class="svgWidth ? svgWidth : 'w-4'" class="text-amber-400"
                viewBox="0 0 576 512">
                <path fill="currentColor"
                    d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z">
                </path>
            </svg>
        </div>
        <span v-show="showText" class="text-gray-500" :class="textSize ? textSize : 'text-xs'">
            {{ rating }} ({{ count }}{{ text }})
        </span>
    </div>
</template>