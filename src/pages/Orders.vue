<script setup>
import ComponentLoader from '@/components/ComponentLoader.vue';
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
    <EmptyOrders v-else-if="orders.length === 0" />
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