<script setup>
import { Carousel, Slide } from "vue3-carousel"
import { ref } from 'vue';

const currentSlide = ref(0);
defineProps(['images']);
</script>

<template>
    <div class="lg:w-1/4">
        <div class="bg-white rounded-xl shadow-sm p-4 sticky top-6">
            <Carousel v-model="currentSlide" :items-to-show="1" :wrap-around="false" :transition="400">
                <Slide v-for="(img, index) in images" :key="index" class="flex justify-center">
                    <img :src="img" class="w-full h-96 object-contain" />
                </Slide>
            </Carousel>
            <!-- thumbnails -->
            <Carousel v-model="currentSlide" :snap-align="'center'" :items-to-show="4" :items-to-scroll="1"
                :wrap-around="false" :gap="12" :transition="400" class="lg:mt-6 md:mt-6 mt-5 w-full" :breakpoints="{
                    0: { itemsToShow: 3 },
                    768: { itemsToShow: 3 },
                    1024: { itemsToShow: 3 }
                }">
                <Slide v-for="(img, index) in images" :key="index">
                    <img :src="img" @click="currentSlide = index"
                        class="lg:w-25 lg:shrink-0 lg:h-25 w-full h-20 object-cover rounded-md cursor-pointer border-2 p-1 transition-all duration-300"
                        :class="currentSlide === index
                            ? 'border-primary-500'
                            : 'border-gray-50 hover:border-gray-400'" />
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<style scoped></style>