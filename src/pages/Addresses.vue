<script setup>
import EmptyStateComponent from '@/components/EmptyStateComponent.vue';
import AddressItem from '@/components/addresses/AddressItem.vue';
import ProfileAddAddresses from '@/components/addresses/ProfileAddAddresses.vue';
import ProfileAddressesAddBtn from '@/components/addresses/ProfileAddressesAddBtn.vue';
import ProfileAddressesSkeleton from '@/components/skeleton/ProfileAddressesSkeleton.vue';
import { useAddressStore } from '@/stores/addressesStore';
import { onMounted } from 'vue';

const store = useAddressStore();

onMounted(() => {
    store.getAddresses();
});
</script>

<template>
    <ProfileAddAddresses />
    <div v-if="store?.isLoading" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProfileAddressesSkeleton v-for="i in 2" :key="i" />
    </div>
    <div v-else-if="!store?.addresses?.length" class="bg-white rounded-3xl border border-gray-100 p-12 text-center">
        <EmptyStateComponent class="pb-0"
            iconPaths="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
            iconViewBox="0 0 384 512" title="No Addresses Yet"
            description="Add your first delivery address to make checkout faster and easier." :icon-shape="'circle'"
            :icon-size="'md'" :icon-width="'w-6'" :title-size="'xl'" :desc-size="'md'" :desc-style="''" />
        <ProfileAddressesAddBtn class="mb-5" btn-title="Add Your First Address" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AddressItem v-for="address in store?.addresses" :key="address._id" :address="address" />
    </div>
</template>

<style scoped></style>