<script setup>
import { onMounted, ref } from 'vue';
import { useAPI } from '@/composables/useAPI';
import SpecialSectionTitle from '../SpecialSectionTitle.vue';
import ProductCard from '../shop/ProductCard.vue';
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps(['categoryId', 'productId']);

const { fetchData, data, error } = useAPI()

async function fetchSimilarProducts() {
    if (!props.categoryId) return
    const res = await fetchData({
        url: `/v1/products?category[in]=${props.categoryId}&limit=10`
    })
    if (res?.data) {
        data.value = res.data.filter(
            p => p._id !== props.productId
        )
    }
    if (error.value) {
        console.error(error.value)
    }
}

onMounted(() => {
    fetchSimilarProducts()
})

const carouselRef = ref(null)
const prevSlide = () => carouselRef.value?.prev()
const nextSlide = () => carouselRef.value?.next()
</script>

<template>
    <div class="pb-5">
        <div class="flex justify-between items-center mb-6">
            <SpecialSectionTitle class="mb-0" :text-size="'text-[26px]!'" :show-line="true"
                :section-title="'You May Also'" :special-title="'Like'" />
            <!-- Buttons -->
            <div class="flex space-x-2">
                <button @click="prevSlide"
                    class="cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </button>
                <button @click="nextSlide"
                    class="cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
                        <path
                            d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- Carousel -->
        <Carousel ref="carouselRef" :items-to-show="5" :wrap-around="false" :mouse-drag="true" :snap-align="'start'"
            :items-to-scroll="1" :autoplay="false" class="relative"
            :breakpoints="{ 0: { itemsToShow: 1 }, 640: { itemsToShow: 2 }, 768: { itemsToShow: 3 }, 1024: { itemsToShow: 5 } }">
            <Slide v-for="product in data" :key="product._id">
                <ProductCard :line-clamp="1" :product="product" class="w-full me-4" />
            </Slide>
        </Carousel>
    </div>
</template>

<style scoped></style>