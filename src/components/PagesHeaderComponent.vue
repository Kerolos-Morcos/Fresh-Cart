<script setup>
import { onMounted } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import { computed } from 'vue';

const { label, description, background } = defineProps(['label', 'description', 'background']);

const { setBreadcrumb } = useBreadcrumb();

const backgroundStyle = computed(() => ({
    background: background ||
        'linear-gradient(to bottom right, var(--color-primary-600), var(--color-primary-500), var(--color-primary-400))'
}));

onMounted(() => {
    setBreadcrumb([
        { label: label }
    ]);
})
</script>

<template>
    <div class="text-white" :style="backgroundStyle">
        <div class="container mx-auto px-4 py-10 sm:py-12">
            <Breadcrumb variant="simple" />
            <div class="flex items-center gap-5">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <div class="w-9 h-9 text-3xl flex items-center justify-center">
                        <slot name="icon"></slot>
                    </div>
                </div>
                <div>
                    <h1 class="text-4xl sm:text-2xl font-bold tracking-tight">{{ label }}</h1>
                    <p class="text-white/90 mt-1">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>