<script setup>
import { format } from 'date-fns';

const props = defineProps(['data']);

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return format(new Date(dateStr), 'MMM dd, yyyy');
};
</script>

<template>
    <div class="border-t border-gray-200 pt-6 px-2 md:px-0">
        <div v-if="data?.reviews?.length" class="space-y-6">
            <div v-for="review in data.reviews" :key="review._id" class="flex gap-4 items-start md:items-center mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0">
                    <img :src="review.user.avatar || `https://ui-avatars.com/api/?name=${review.user.name}&background=random&size=128`"
                        :alt="review.user.name" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 class="font-semibold text-gray-900 truncate">
                            {{ review.user.name }}
                        </h4>
                        <span class="text-gray-400 text-sm whitespace-nowrap">
                            {{ formatDate(review.createdAt) }}
                        </span>
                    </div>
                    <div class="mt-1">
                        <RatingStars :svg-width="'w-4 sm:w-5'" :show-text="false" :count="1" :rating="review.rating" />
                    </div>
                    <p class="mt-2 text-gray-700 whitespace-pre-line text-sm sm:text-base wrap-break-word">
                        {{ review.review }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center gap-2 text-center py-16">
            <svg data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star text-5xl text-gray-300 mb-3 w-12"
                role="img" viewBox="0 0 576 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                </path>
            </svg>
            <p class="text-gray-500 text-lg">No reviews yet</p>
            <!-- FEATURED -->
            <!-- <button class="mt-4 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium border border-primary-600 rounded-md hover:bg-primary-50">
                Write a Review
            </button> -->
        </div>
    </div>
</template>

<style scoped></style>