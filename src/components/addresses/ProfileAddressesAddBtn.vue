<script setup>;
import Button from 'primevue/button';
import { ref } from 'vue';
import ProfileAddressModal from './ProfileAddressModal.vue';

const visible = ref(false);

const { btnTitle } = defineProps({
    btnTitle: {
        type: String,
        default: 'Add Address'
    }
});
</script>

<template>
    <Button @click="visible = true" unstyled
        class="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25">
        <svg data-prefix="fas" data-icon="plus" class="w-3 svg-inline--fa fa-plus text-sm" role="img"
            viewBox="0 0 448 512" aria-hidden="true">
            <path fill="currentColor"
                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z">
            </path>
        </svg>
        <span>{{ btnTitle }}</span>
    </Button>
    <ProfileAddressModal v-model:visible="visible" />
</template>

<style scoped></style>