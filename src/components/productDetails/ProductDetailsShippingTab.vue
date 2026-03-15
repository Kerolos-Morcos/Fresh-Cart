<script setup>
const shippingData = [
    {
        title: "Shipping Information",
        icon: `<svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck text-xl w-5"
                                role="img" viewBox="0 0 576 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                                </path>
                            </svg>`,
        iconBg: "bg-primary-600",
        items: [
            "Free shipping on orders over $50",
            "Standard delivery: 3-5 business days",
            "Express delivery available (1-2 business days)",
            "Track your order in real-time"
        ]
    },
    {
        title: "Returns & Refunds",
        icon: `<svg data-prefix="fas" data-icon="rotate-left"
                                class="svg-inline--fa fa-rotate-left text-xl w-5" role="img" viewBox="0 0 512 512"
                                aria-hidden="true">
                                <path fill="currentColor"
                                    d="M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z">
                                </path>
                            </svg>`,
        iconBg: "bg-green-600",
        items: [
            "30-day hassle-free returns",
            "Full refund or exchange available",
            "Free return shipping on defective items",
            "Easy online return process"
        ]
    }
]
</script>

<template>
    <div class="px-2" style="margin-top: -10px !important;">
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="section in shippingData" :key="section.title"
                    class="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-12 w-12 text-white rounded-full flex items-center justify-center"
                            :class="section.iconBg">
                            <div v-html="section.icon"></div>
                        </div>
                        <h4 class="font-semibold text-gray-900">
                            {{ section.title }}
                        </h4>
                    </div>
                    <ul class="space-y-3">
                        <li v-for="item in section.items" :key="item"
                            class="flex items-start gap-2 text-sm text-gray-700">
                            <svg class="text-green-600 mt-0.5 w-3" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" />
                            </svg>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                <div class="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                    <svg data-prefix="fas" data-icon="shield-halved"
                        class="w-6 svg-inline--fa fa-shield-halved text-2xl" role="img" viewBox="0 0 512 512"
                        aria-hidden="true">
                        <path fill="currentColor"
                            d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Buyer Protection Guarantee</h4>
                    <p class="text-sm text-gray-600">
                        Get a full refund if your order doesn't arrive or isn't as
                        described. We ensure your shopping experience is safe and secure.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>