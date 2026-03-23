<script setup>
defineProps(['order']);
</script>

<template>
    <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
            <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg data-prefix="fas" data-icon="location-dot"
                    class="w-2.5 svg-inline--fa fa-location-dot text-xs text-blue-600" role="img" viewBox="0 0 384 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z">
                    </path>
                </svg>
            </div>
            Delivery Address
        </h4>
        <div class="space-y-2">
            <p class="font-medium text-gray-900">{{ order.shippingAddress?.city }}</p>
            <p class="text-sm text-gray-600 leading-relaxed font-medium">{{ order.shippingAddress?.details }}</p>
            <p class="text-sm text-gray-600 flex items-center gap-2 pt-1 font-medium">
                <svg data-prefix="fas" data-icon="phone" class="w-3 svg-inline--fa fa-phone text-xs text-gray-400"
                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z">
                    </path>
                </svg>
                {{ order.shippingAddress?.phone }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>