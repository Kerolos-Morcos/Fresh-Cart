<script setup>
import ComponentLoader from '@/components/ComponentLoader.vue';
import EmptyStateComponent from '@/components/EmptyStateComponent.vue';
import DeliveryAddress from '@/components/orders/DeliveryAddress.vue';
import OrderImageCover from '@/components/orders/OrderImageCover.vue';
import OrderItems from '@/components/orders/OrderItems.vue';
import OrderPaymentMethod from '@/components/orders/OrderPaymentMethod.vue';
import OrdersHeader from '@/components/orders/OrdersHeader.vue';
import OrdersSummary from '@/components/orders/OrdersSummary.vue';
import OrderStatus from '@/components/orders/OrderStatus.vue';
import ShowOrderItemsBtn from '@/components/orders/ShowOrderItemsBtn.vue';
import UserDemographyData from '@/components/orders/UserDemographyData.vue';
import { useAPI } from '@/composables/useAPI';
import { useAuthStore } from '@/stores/authStore';
import { onMounted, ref } from 'vue';

const { fetchData } = useAPI();
const authStore = useAuthStore();
const orders = ref([]);
const isLoading = ref(false);
const openedOrder = ref(null);

function toggleOrder(id) {
    openedOrder.value = openedOrder.value === id ? null : id;
}

async function getUserOrders() {
    isLoading.value = true;
    const payload = JSON.parse(atob(authStore.token.split('.')[1]));
    const userId = payload.id;
    if (!userId) return;
    const data = await fetchData({
        url: `/v1/orders/user/${userId}`,
        method: "get"
    });
    orders.value = data || [];
    isLoading.value = false;
    return data;
}

onMounted(() => {
    getUserOrders();
})
</script>

<template>
    <ComponentLoader v-if="isLoading" :title="'your orders'" />
    <EmptyStateComponent v-else-if="!orders.length || orders.length === 0"
        :icon-paths="'M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z'"
        icon-view-box="0 0 640 512" icon-size="lg" icon-shape="rounded" icon-bg="bg-gray-100" icon-width="w-15"
        icon-color="text-gray-400" title="No orders yet" title-size="2xl"
        description="When you place orders, they'll appear here<br>so you can track them." cta-label="Start Shopping"
        cta-to="/"
        :cta-leading-icon-path="'M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'"
        cta-icon-view-box="0 0 448 512" cta-class="w-full sm:w-auto" />
    <div v-else class="container mx-auto px-4 py-8">
        <OrdersHeader :ordersLength="orders.length" />
        <div class="space-y-4">
            <div v-for="order in orders" :key="order._id"
                class="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-primary-200 shadow-lg shadow-primary-100/50">
                <div class="p-5 sm:p-6">
                    <div class="flex gap-5">
                        <OrderImageCover :order="order" />
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-3 mb-3">
                                <OrderStatus :order="order" />
                                <OrderPaymentMethod :order="order" />
                            </div>
                            <UserDemographyData :order="order" />
                            <ShowOrderItemsBtn :order="order" :openedOrder="openedOrder" @toggle="toggleOrder" />
                        </div>
                    </div>
                </div>
                <div v-show="openedOrder === order._id" class="border-t border-gray-100 bg-gray-50/50">
                    <OrderItems :order="order" />
                    <div class="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">
                        <DeliveryAddress :order="order" />
                        <OrdersSummary :order="order" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-br {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>