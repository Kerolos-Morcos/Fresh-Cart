<script setup>
import { inject } from 'vue';
import SpecialServices from '../footer/SpecialServices.vue';
import CheckoutProducts from './CheckoutProducts.vue';
import CheckoutTitle from './CheckoutTitle.vue';
import TotalPriceShippingData from '../cart/TotalPriceShippingData.vue';
import CheckoutSubmitBtn from './CheckoutSubmitBtn.vue';

const customServices = [
    {
        title: "Secure",
        svg: `<svg data-prefix="fas"
                            data-icon="shield-halved" class="w-4 svg-inline--fa fa-shield-halved text-green-500"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                            </path>
                        </svg>`
    },
    {
        title: "Fast Delivery",
        svg: `<svg data-prefix="fas"
                            data-icon="truck" class="w-4 svg-inline--fa fa-truck text-blue-500" role="img"
                            viewBox="0 0 576 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                            </path>
                        </svg>`
    },
    {
        title: "Easy Returns",
        svg: `<svg data-prefix="fas" data-icon="box"
                            class="w-4 svg-inline--fa fa-box text-orange-500" role="img" viewBox="0 0 448 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z">
                            </path>
                        </svg>`
    }
]

const cartStore = inject('cartStore');
const props = defineProps(['isSelectedMethod', 'isLoading']);
</script>

<template>
    <div class="lg:col-span-1">
        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
            <CheckoutTitle title="Order Summary" :subtitle="`${cartStore.cartData.length} items`">
                <template #icon>
                    <svg data-prefix="fas" data-icon="bag-shopping" class="w-4 svg-inline--fa fa-bag-shopping"
                        role="img" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z">
                        </path>
                    </svg>
                </template>
            </CheckoutTitle>
            <div class="p-5">
                <CheckoutProducts :cartProducts="cartStore.cartData" />
                <hr class="border-gray-100 my-4">
                <TotalPriceShippingData :cartStore="cartStore" :isCheckout="true" />
                <CheckoutSubmitBtn :isSelectedMethod="props.isSelectedMethod" :isLoading="props.isLoading" />
                <SpecialServices :services="customServices" gridClass="flex items-center justify-center gap-2.5"
                    :section-class="'bg-transparent'" :container-class="'mt-4 border-t border-gray-100 pt-3'">
                    <template #item="{ service, index }">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1.5 text-xs text-gray-500">
                                <div v-html="service.svg" class="w-4"></div>
                                <span>{{ service.title }}</span>
                            </div>
                            <div v-if="index !== customServices.length - 1" class="w-px h-4 bg-gray-200">
                            </div>
                        </div>
                    </template>
                </SpecialServices>
            </div>
        </div>
    </div>
</template>

<style scoped></style>