<script setup>
import RatingStars from '../RatingStars.vue';
import ProductActionButtons from './ProductActionButtons.vue';
import ProductAddToCardButton from './ProductAddToCardButton.vue';

const { product, lineClamp } = defineProps(['product', 'lineClamp']);
</script>

<template>
    <div :id="product._id"
        class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
        <div class="relative">
            <img class="w-full h-56 md:h-60 object-contain bg-white" :src="product.imageCover" :alt="product.title">
            <div class="absolute top-3 left-3" v-show="product.priceAfterDiscount">
                <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {{
                        -Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
                    }}%
                </span>
            </div>
            <ProductActionButtons :product="product" />
        </div>
        <div class="p-4 flex flex-col flex-1">
            <div class="text-xs text-gray-500 mb-1">{{ product.category?.name }}</div>
            <h3 class="font-medium mb-1 cursor-pointer min-h-11" :title="product.title">
                <RouterLink :class="`line-clamp-${lineClamp ?? 2}`" :to="`/product/${product.id}`">
                    {{ product.title }}
                </RouterLink>
            </h3>
            <div class="flex items-center mb-3">
                <RatingStars :count="product.ratingsQuantity" :rating="product.ratingsAverage" />
            </div>
            <div class="flex items-center justify-between mt-auto">
                <div>
                    <span class="text-md font-bold"
                        :class="product.priceAfterDiscount ? 'text-primary-600' : 'text-gray-800'">{{
                            product.priceAfterDiscount ? product.priceAfterDiscount : product.price }}
                        EGP</span>
                    <span class="text-sm text-gray-400 line-through ml-2" v-show="product.priceAfterDiscount">{{
                        product.price }} EGP</span>
                </div>
                <ProductAddToCardButton :product="product" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>