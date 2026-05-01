<script setup>
import { useAddressStore } from '@/stores/addressesStore';
import { onMounted } from 'vue';
import AddressItem from '../addresses/AddressItem.vue';

const store = useAddressStore();
onMounted(() => {
    store.getAddresses();
});
</script>

<template>
    <div class="flex items-center gap-2 mb-3">
        <svg data-prefix="fas" data-icon="bookmark" class="w-2.5 svg-inline--fa fa-bookmark text-primary-500 text-sm"
            role="img" viewBox="0 0 384 512" aria-hidden="true">
            <path fill="currentColor"
                d="M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z">
            </path>
        </svg>
        <span class="font-semibold text-gray-800">Saved Addresses</span>
    </div>
    <p class="text-sm font-medium text-gray-600">Select a saved address or enter a new one below</p>
    <div class="space-y-4 mt-4 pb-5 border-b border-gray-100">
        <AddressItem v-for="address in store.addresses" :key="address._id" :address="address" mode="checkout"
            @select="store.selectAddress" />
        <button type="button" @click="store.selectNewAddress()"
            class="w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200" :class="store.selectedAddressId === 'new'
                ? 'border-primary-500 bg-primary-50'
                : 'cursor-pointer border-gray-300 hover:border-primary-300 hover:bg-gray-50'">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" :class="store.selectedAddressId === 'new'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-500'">
                    <svg data-prefix="fas" data-icon="plus" class="w-3 svg-inline--fa fa-plus" role="img"
                        viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z">
                        </path>
                    </svg>
                </div>
                <div>
                    <p class="font-semibold transition-colors"
                        :class="store.selectedAddressId === 'new' ? 'text-green-700' : 'text-gray-700'">Use a
                        different address</p>
                    <p class="text-xs text-gray-500 mt-0.5">Enter a new shipping address manually</p>
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped></style>