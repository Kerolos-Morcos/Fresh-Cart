<script setup>
import { onMounted } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import { useBreadcrumb } from '@/composables/useBreadcrumb';

const { label, description } = defineProps(['label', 'description']);

const { setBreadcrumb } = useBreadcrumb();

onMounted(() => {
    setBreadcrumb([
        { label: label }
    ]);
})
</script>

<template>
    <div class="text-white"
        style="background: linear-gradient(to bottom right, var(--color-primary-600), var(--color-primary-500), var(--color-primary-400));">
        <div class="container mx-auto px-4 py-10 sm:py-12">
            <Breadcrumb variant="simple" />
            <div class="flex items-center gap-5">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <div class="w-6 text-3xl flex items-center justify-center">
                        <slot name="icon"></slot>
                    </div>
                </div>
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ label }}</h1>
                    <p class="text-white/80 mt-1">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>