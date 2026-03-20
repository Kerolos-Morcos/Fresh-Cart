<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['totalCartPrice']);
// calculate width according to total cart price
const width = ref(
    (props.totalCartPrice / 500) * 100
);
// update width according to total cart price immediately
watch(() => props.totalCartPrice, () => {
    width.value = (props.totalCartPrice / 500) * 100
})
</script>

<template>
    <div class="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4"
        style="--from: var(--color-orange-50); --to: var(--color-amber-50);">
        <div class="flex items-center gap-2 mb-2">
            <svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck w-5 text-orange-500" role="img"
                viewBox="0 0 576 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                </path>
            </svg><span class="text-sm font-medium text-gray-700">Add {{ 500 - props.totalCartPrice }} EGP for free
                shipping</span>
        </div>
        <div class="h-2 bg-orange-100 rounded-full overflow-hidden">
            <div class="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                :style="{ width: width + '%' }"></div>
        </div>
    </div>
</template>

<style scoped>
.bg-linear-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
}
</style>