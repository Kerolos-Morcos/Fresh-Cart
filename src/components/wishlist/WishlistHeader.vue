<script setup>
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import { onMounted } from 'vue';
import Breadcrumb from '../Breadcrumb.vue';

defineProps(['count']);

const { setBreadcrumb } = useBreadcrumb();
onMounted(() => {
    setBreadcrumb([
        {
            label: 'Wishlist',
        }
    ]);
})
</script>

<template>
    <div class="bg-white border-b border-gray-100">
        <div class="container mx-auto px-4 py-8">
            <Breadcrumb class="pt-0! mb-2.5" />
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                        <svg data-prefix="fas" data-icon="heart"
                            class="w-7 svg-inline--fa fa-heart text-xl text-red-500" role="img" viewBox="0 0 512 512"
                            aria-hidden="true">
                            <path fill="currentColor"
                                d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">My Wishlist</h1>
                        <p class="text-gray-500 text-sm font-medium">{{ count }} item saved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>