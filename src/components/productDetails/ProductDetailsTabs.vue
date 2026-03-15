<script setup>
import { TabPanel, TabView } from 'primevue';
import { computed, ref } from 'vue';
import ProductDetailsDataInfoTab from './ProductDetailsDataInfoTab.vue';
import ProductDetailsReviewsTab from './ProductDetailsReviewsTab.vue';
import ProductDetailsShippingTab from './ProductDetailsShippingTab.vue';

const props = defineProps(['data']);

const reviewsCount = computed(() => props.data?.reviews?.length || 0);

const activeTab = ref(0);
const tabs = computed(() => [
    {
        label: 'Product Details',
        icon: `<svg data-prefix="fas" data-icon="box" class="svg-inline--fa fa-box text-sm w-3.5" role="img"
            viewBox="0 0 448 512" aria-hidden="true">
            <path fill="currentColor"
                d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z">
            </path>
        </svg>`,
    },
    {
        label: `Reviews (${reviewsCount.value})`,
        icon: `<svg data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star text-sm w-3.5" role="img"
                viewBox="0 0 576 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z">
                </path>
            </svg>`,
    },
    {
        label: 'Shipping & Returns',
        icon: `<svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck text-sm w-3.5" role="img"
                                viewBox="0 0 576 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                                </path>
                            </svg>`,
    }
]);
</script>

<template>
    <section class="py-8">
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="border-b border-gray-200">
                <div class="flex flex-wrap sm:flex-nowrap justify-start">
                    <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="[
                        'cursor-pointer flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200',
                        activeTab === index
                            ? 'text-primary-600 border-b-2 border-primary-600 bg-gray-50'
                            : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    ]">
                        <span v-html="tab.icon"></span>
                        {{ tab.label }}
                    </button>
                </div>
            </div>
            <!-- Tabs -->
            <TabView :active-index="activeTab">
                <TabPanel>
                    <ProductDetailsDataInfoTab :data="data" />
                </TabPanel>
                <TabPanel>
                    <ProductDetailsReviewsTab :data="data" />
                </TabPanel>
                <TabPanel>
                    <ProductDetailsShippingTab />
                </TabPanel>
            </TabView>
        </div>
    </section>
</template>

<style scoped></style>