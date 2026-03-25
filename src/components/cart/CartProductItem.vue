<script setup>
import { confirmDelete, showSuccess } from '@/helpers/swalCustomAlerts';
import LoadingSpinner from '../LoadingSpinner.vue';
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';


const { cartItem } = defineProps(['cartItem']);
const item = computed(() => cartItem?.product || cartItem);
const sku = (item.value.id || item.value._id).toString().slice(18, 30).toUpperCase();
const cartStore = useCartStore();


async function deleteCartItem() {
    const result = await confirmDelete({ text: "Remove", itemName: item.value.title });
    if (!result.isConfirmed) return;
    await cartStore.deleteItem(item.value);
    await showSuccess({ title: "Deleted!", text: "Item removed from cart" });
}
</script>

<template>
    <div :class="{
        'opacity-50 pointer-events-none': cartStore.loadingAdd === item._id || cartStore.loadingRemove === item._id || cartStore.loadingDelete === item._id
    }"
        class="disabled:opacity-50 disabled:cursor-not-allowed bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
        <div class="flex gap-4 sm:gap-6">
            <RouterLink class="relative shrink-0 group" :to="`/product/${item?._id || item?.id}`">
                <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                    <img :alt="item?.title"
                        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        :src="item?.imageCover">
                </div>
            </RouterLink>
            <div class="flex-1 min-w-0 flex flex-col">
                <div class="mb-3">
                    <RouterLink class="group/title" :to="`/product/${item?._id || item?.id}`">
                        <h3
                            class="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                            {{ item?.title }}
                        </h3>
                    </RouterLink>
                    <div class="flex items-center gap-2 mt-2">
                        <span
                            class="inline-block px-2.5 py-1 bg-linear-to-r from-primary-50 to-emerald-50 text-primary-700 text-xs font-medium rounded-full">
                            {{ item?.category?.name }}
                        </span>
                        <span class="text-xs text-gray-400 font-medium">•</span>
                        <span class="text-xs text-gray-500 font-medium">SKU: {{ sku }}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex items-baseline gap-2">
                        <span class="text-primary-600 font-bold text-lg">
                            {{ cartItem?.price }} EGP
                        </span>
                        <span class="text-xs text-gray-400">per unit</span>
                    </div>
                </div>
                <div class="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                        <button @click="cartStore.updateCount(cartItem.count - 1, 'remove', item)"
                            :disabled="cartItem.count <= 1 || cartStore.loadingRemove === item._id || cartStore.loadingAdd === item._id"
                            :class="{ 'cursor-not-allowed!': cartItem.count <= 1 || loadingAdd === item._id }"
                            class="cursor-pointer h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all">
                            <LoadingSpinner v-if="cartStore.loadingRemove === item._id" class="w-3" />
                            <svg v-else data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus text-xs w-3"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z">
                                </path>
                            </svg>
                        </button>
                        <span class="w-12 text-center font-bold text-gray-900">{{ cartItem.count }}</span>
                        <button @click="cartStore.updateCount(cartItem.count + 1, 'add', item)"
                            :disabled="cartStore.loadingAdd === item._id || cartStore.loadingRemove === item._id"
                            :class="{ 'cursor-not-allowed!': cartStore.loadingRemove === item._id }"
                            class="cursor-pointer h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white hover:bg-primary-700 transition-all">
                            <LoadingSpinner v-if="cartStore.loadingAdd === item._id" class="w-3" />
                            <svg v-else data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus text-xs w-3"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="text-right">
                            <p class="text-xs text-gray-400 mb-0.5">Total</p>
                            <p class="text-xl font-bold text-gray-900">{{ cartItem.price * cartItem.count }} <span
                                    class="text-sm font-medium text-gray-400">EGP</span></p>
                        </div>
                        <button @click="deleteCartItem" :disabled="cartStore.loadingDelete === item._id"
                            class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
                            title="Remove item">
                            <svg data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash text-sm w-3.5"
                                role="img" viewBox="0 0 448 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>