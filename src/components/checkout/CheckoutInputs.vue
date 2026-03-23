<script setup>
import { shippingSchema } from '@/validations/checkoutSchema';
import CheckoutTitle from './CheckoutTitle.vue';
import DeliveryInfo from './DeliveryInfo.vue';
import OrderSummary from './OrderSummary.vue';
import PaymentMethod from './PaymentMethod.vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { useAPI } from '@/composables/useAPI';
import { inject } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const cartStore = inject('cartStore');
const { fetchData, isLoading } = useAPI();
const router = useRouter();

const isSelectedMethod = ref('cash');
function setSelectedMethod(method) {
    isSelectedMethod.value = method
}

async function onShippingSubmit(values) {
    const appURL = window.location.origin;
    const cartId = cartStore?.cartId;
    if (isSelectedMethod.value === 'cash') {
        await fetchData({
            url: `/v1/orders/${cartId}`,
            method: "post",
            data: values
        });
        router.push({ name: 'orders' });
    } else {
        const data = await fetchData({
            url: `/v1/orders/checkout-session/${cartId}?url=${appURL}`,
            method: "post",
            data: values
        });
        if (data) {
            const url = data.session.url
            window.location.href = url
        }
    }
}
</script>

<template>
    <Form :validation-schema="shippingSchema" @submit="onShippingSubmit">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <CheckoutTitle title="Shipping Address" subtitle="Where should we deliver your order?">
                        <template #icon>
                            <svg data-prefix="fas" data-icon="house" class="w-4.5 svg-inline--fa fa-house" role="img"
                                viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z">
                                </path>
                            </svg>
                        </template>
                    </CheckoutTitle>
                    <div class="p-6 space-y-5">
                        <DeliveryInfo />
                        <div>
                            <label for="city" class="block text-sm font-semibold text-gray-700 mb-2">
                                City
                                <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div
                                    class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="city"
                                        class="w-3.5 svg-inline--fa fa-city text-gray-500 text-sm" role="img"
                                        viewBox="0 0 576 512" aria-hidden="true">
                                        <path fill="currentColor"
                                            d="M320 0c-35.3 0-64 28.7-64 64l0 32-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72C96 10.7 85.3 0 72 0S48 10.7 48 24l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0 0-128c0-35.3-28.7-64-64-64L320 0zm64 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm-16 80c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm112-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM128 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z">
                                        </path>
                                    </svg>
                                </div>
                                <Field id="city" as="input"
                                    class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl transition-all inputStyle"
                                    placeholder="e.g. Cairo, Alexandria, Giza" type="text" name="city" />
                            </div>
                            <ErrorMessage name="city" class="errorMessage text-xs text-red-500 mt-2" />
                        </div>
                        <div>
                            <label for="details" class="block text-sm font-semibold text-gray-700 mb-2">
                                Street Address
                                <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div
                                    class="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="location-dot"
                                        class="w-3 svg-inline--fa fa-location-dot text-gray-500 text-sm" role="img"
                                        viewBox="0 0 384 512" aria-hidden="true">
                                        <path fill="currentColor"
                                            d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z">
                                        </path>
                                    </svg>
                                </div>
                                <Field id="details" rows="3" as="textarea"
                                    class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl transition-all resize-none inputStyle"
                                    placeholder="Street name, building number, floor, apartment..." name="details">
                                </Field>
                            </div>
                            <ErrorMessage name="details" class="errorMessage text-xs text-red-500 mt-2" />
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div
                                    class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="phone"
                                        class="w-3 svg-inline--fa fa-phone text-gray-500 text-sm" role="img"
                                        viewBox="0 0 512 512" aria-hidden="true">
                                        <path fill="currentColor"
                                            d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z">
                                        </path>
                                    </svg>
                                </div>
                                <Field id="phone" as="input"
                                    class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl transition-all inputStyle"
                                    placeholder="01xxxxxxxxx" type="tel" name="phone" />
                                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                    Egyptian numbers only
                                </span>
                            </div>
                            <ErrorMessage name="phone" class="errorMessage text-xs text-red-500 mt-2" />
                        </div>
                    </div>
                </div>
                <PaymentMethod :isSelectedMethod="isSelectedMethod" @setSelectedMethod="setSelectedMethod" />
            </div>
            <OrderSummary :isSelectedMethod="isSelectedMethod" :isLoading="isLoading" />
        </div>
    </Form>
</template>

<style scoped>
.bg-linear-to-r {
    background-image: linear-gradient(to right, var(--from), var(--to));
}

.bg-linear-to-br {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>