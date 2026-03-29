<script setup>
import RatingStars from '@/components/RatingStars.vue';
import SpecialServices from '@/components/footer/SpecialServices.vue';
import { useCartStore } from '@/stores/cartStore';
import { ref, computed, watch } from 'vue';
import toastMessage from '@/helpers/toastMessage';
import ProductDetailsWishlistButton from './ProductDetailsWishlistButton.vue';
import ProductDetailsShareButton from './ProductDetailsShareButton.vue';
import LoadingSpinner from '../LoadingSpinner.vue';

const props = defineProps(['data']);
const quantity = ref(1);
const cartStore = useCartStore();
const isAddedToCart = ref(false);

const cartItem = computed(() =>
    cartStore.cartData?.find(item =>
        (item?.product?._id || item?.product?.id) === (props.data?._id || props.data?.id)
    )
);

async function addToCart() {
    isAddedToCart.value = true;
    try {
        await cartStore.addToCart(props.data);
        toastMessage(
            cartItem.value ? 'Quantity updated!' : 'Added to cart!',
            'success'
        );
    } finally {
        isAddedToCart.value = false;
    }
}

const totalPrice = computed(() => {
    const price = props.data?.priceAfterDiscount || props.data?.price || 0;
    return (price * quantity.value).toFixed(2);
})

function increase() {
    if (quantity.value < props.data?.quantity) quantity.value++
    if (cartItem.value) {
        cartStore.updateCount(cartItem.value.count + 1, 'add', props.data);
    }
}

function decrease() {
    if (quantity.value > 1) quantity.value--
    if (cartItem.value && cartItem.value.count > 1) {
        cartStore.updateCount(cartItem.value.count - 1, 'remove', props.data);
    }
}

watch(quantity, (val, oldVal) => {
    if (!val || val < 1) {
        quantity.value = 1;
        return;
    }
    if (val > props.data?.quantity) {
        quantity.value = props.data?.quantity;
        return;
    }
    if (cartItem.value) {
        cartStore.updateCount(val, "set", props.data);
    }
});
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
            <div v-if="data?.quantity > 0" class="flex items-center gap-2 mb-6">
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
                        <button @click="decrease"
                            :disabled="quantity <= 1 || cartStore.loadingRemove === (props.data?._id || props.data?.id) || cartStore.loadingAdd === (props.data?._id || props.data?.id)"
                            class="cursor-pointer disabled:cursor-not-allowed px-4 py-3 bg-gray-100 text-black hover:bg-gray-200 transition disabled:opacity-70">
                            <LoadingSpinner v-if="cartStore.loadingRemove === (props.data?._id || props.data?.id)"
                                class="w-2.5! p-0! m-0! h-2.5!" />
                            <svg v-else data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus w-2.5"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z">
                                </path>
                            </svg>
                        </button>
                        <input :max="data?.quantity" v-model="quantity" min="1"
                            class="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number">
                        <button @click="increase"
                            :disabled="quantity >= data?.quantity || cartStore.loadingAdd === (props.data?._id || props.data?.id) || cartStore.loadingRemove === (props.data?._id || props.data?.id)"
                            class="cursor-pointer disabled:cursor-not-allowed px-4 py-3 bg-gray-100 text-black hover:bg-gray-200 transition disabled:opacity-50">
                            <LoadingSpinner v-if="cartStore.loadingAdd === (props.data?._id || props.data?.id)"
                                class="w-2.5! p-0! m-0! h-2.5!" />
                            <svg v-else data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus w-2.5"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
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
                    <span class="text-2xl font-bold text-primary-600">{{ totalPrice }}
                        EGP</span>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
                <button @click="addToCart"
                    :disabled="isAddedToCart || cartStore.loadingAdd === (props.data?._id || props.data?.id) || cartStore.loadingRemove === (props.data?._id || props.data?.id)"
                    class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-primary-600">
                    <LoadingSpinner v-if="isAddedToCart" />
                    <svg v-else data-prefix="fas" data-icon="cart-shopping" class="w-4 svg-inline--fa fa-cart-shopping"
                        role="img" viewBox="0 0 640 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">
                        </path>
                    </svg>
                    {{ isAddedToCart ? 'Processing...' : cartItem ? 'Add More' : 'Add to Cart' }}
                </button>
                <button :disabled="cartStore.loadingAdd === (props.data?._id || props.data?.id) || cartStore.loadingRemove === (props.data?._id || props.data?.id)"
                    class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
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
                <ProductDetailsWishlistButton :data="props.data" />
                <ProductDetailsShareButton :data="props.data" />
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