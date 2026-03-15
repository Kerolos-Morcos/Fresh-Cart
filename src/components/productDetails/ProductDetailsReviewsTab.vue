<script setup>
import RatingStars from '../RatingStars.vue';
import ClientsReviews from './ClientsReviews.vue';
import RatingPercentages from './RatingPercentages.vue';

const props = defineProps(['data']);

</script>

<template>
    <div class="px-2" style="margin-top: -10px !important;">
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center w-full">
                <div class="text-center flex flex-col">
                    <div class="text-5xl font-bold text-gray-900 mb-2">{{ data?.ratingsAverage }}</div>
                    <RatingStars :svg-width="'ms-1 w-5'" :show-text="false" :count="data?.reviewsQuantity"
                        :rating="data?.ratingsAverage" />
                    <p class="text-sm text-gray-500 mt-2">Based on {{ data?.reviews?.length }} reviews
                    </p>
                </div>
                <RatingPercentages :data="data" />
            </div>
            <ClientsReviews :data="data" />
        </div>
    </div>
</template>

<style scoped></style>