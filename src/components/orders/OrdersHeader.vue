<script setup>
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import Breadcrumb from '../Breadcrumb.vue';
import { onMounted } from 'vue';

const props = defineProps(['ordersLength']);

const { setBreadcrumb } = useBreadcrumb();
onMounted(() => {
    setBreadcrumb([
        {
            label: 'My Orders',
        }
    ]);
});

</script>

<template>
    <div class="mb-8">
        <Breadcrumb class="pt-0! mb-1" />
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-linear-to-br flex items-center justify-center shadow-lg shadow-primary-500/25"
                    style="--from: var(--color-primary-500); --to: var(--color-primary-600);">
                    <svg data-prefix="fas" data-icon="box" class="w-4 svg-inline--fa fa-box text-2xl text-white"
                        role="img" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">My Orders</h1>
                    <p class="text-gray-500 text-sm mt-0.5 font-medium">Track and manage your {{ props.ordersLength }} order</p>
                </div>
            </div>
            <RouterLink
                class="self-start sm:self-auto text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary-50 transition-all text-sm"
                to="/">
                <svg data-prefix="fas" data-icon="bag-shopping" class="w-4 svg-inline--fa fa-bag-shopping text-xs"
                    role="img" viewBox="0 0 448 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z">
                    </path>
                </svg>
                Continue Shopping
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-br {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>