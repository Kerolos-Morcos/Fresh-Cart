<script setup>
import RatingStars from '@/components/RatingStars.vue';
import SpecialServices from '@/components/footer/SpecialServices.vue';

defineProps(['data']);
</script>

<template>
    <div class="lg:w-3/4">
        <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex flex-wrap gap-2 mb-4">
                <RouterLink
                    class="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                    :to="`/categories/${data?.category?._id}`">
                    {{ data?.category?.name }}
                </RouterLink>
                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{{
                    data?.brand?.name }}</span>
            </div>
            <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {{ data?.title }}
            </h1>
            <div class="gap-3 mb-4">
                <RatingStars :textSize="'text-sm text-black! ms-2 font-medium'" :svg-width="'w-5'" :text="' reviews'"
                    :count="data?.ratingsQuantity" :rating="data?.ratingsAverage" />
            </div>
            <div class="flex items-center flex-wrap gap-3 mb-6">
                <span class="text-3xl font-bold text-gray-900">
                    {{ data?.priceAfterDiscount || data?.price }} EGP
                </span>
                <span v-if="data?.priceAfterDiscount && data?.priceAfterDiscount < data?.price"
                    class="text-lg text-gray-400 line-through">
                    {{ data.price }} EGP
                </span>
                <span v-if="data?.priceAfterDiscount && data?.priceAfterDiscount < data?.price"
                    class="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Save {{ Math.round((1 - data.priceAfterDiscount / data.price) * 100) }}%
                </span>
            </div>
            <div class="flex items-center gap-2 mb-6">
                <span class="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                    In Stock
                </span>
            </div>
            <div class="border-t border-gray-100 pt-5 mb-6">
                <p class="text-gray-600 leading-relaxed">
                    {{ data?.description }}
                </p>
            </div>
            <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div class="flex items-center gap-4">
                    <div class="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                        <button id="decrease-qty"
                            class="cursor-pointer px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                            disabled="">
                            <svg data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus w-2.5" role="img"
                                viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z">
                                </path>
                            </svg>
                        </button>
                        <input min="1" max="220"
                            class="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                            id="quantity" type="number" value="1">
                        <button id="increase-qty"
                            class="cursor-pointer px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50">
                            <svg data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus w-2.5" role="img"
                                viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <span class="text-sm text-gray-500">{{ data?.quantity }} available</span>
                </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Total
                        Price:
                    </span>
                    <span class="text-2xl font-bold text-primary-600">149.00 EGP</span>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
                <button id="add-to-cart"
                    class="cursor-pointer flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-primary-600">
                    <svg data-prefix="fas" data-icon="cart-shopping" class="w-4 svg-inline--fa fa-cart-shopping"
                        role="img" viewBox="0 0 640 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">
                        </path>
                    </svg>
                    Add to Cart
                </button>
                <button id="buy-now"
                    class="cursor-pointer flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <svg data-prefix="fas" data-icon="bolt" class="w-4 svg-inline--fa fa-bolt" role="img"
                        viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z">
                        </path>
                    </svg>
                    Buy Now
                </button>
            </div>
            <div class="flex gap-3 mb-6">
                <button id="wishlist-button"
                    class="cursor-pointer flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600">
                    <svg data-prefix="far" data-icon="heart" class="w-4 svg-inline--fa fa-heart" role="img"
                        viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z">
                        </path>
                    </svg>
                    Add to Wishlist
                </button>
                <button
                    class="cursor-pointer border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
                    <svg data-prefix="fas" data-icon="share-nodes" class="svg-inline--fa fa-share-nodes w-4" role="img"
                        viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="border-t border-gray-100 pt-6">
                <SpecialServices :sectionClass="'bg-transparent border-0'" :containerClass="'p-0'" :limit="3"
                    :gridClass="'grid grid-cols-1 sm:grid-cols-3 gap-4'">
                    <template #item="{ service }">
                        <div class="flex items-center gap-3">
                            <div
                                class="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                                <div v-html="service.svg"></div>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900 text-sm">
                                    {{ service.title }}
                                </h4>
                                <p class="text-xs text-gray-500">
                                    {{ service.desc }}
                                </p>
                            </div>
                        </div>
                    </template>
                </SpecialServices>
            </div>
        </div>
    </div>
</template>

<style scoped></style>