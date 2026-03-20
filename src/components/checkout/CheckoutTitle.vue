<script setup>
defineProps(['title', 'subtitle']);
</script>
<template>
    <div class="bg-linear-to-r px-6 py-4" style="--from: var(--color-primary-600); --to: var(--color-primary-700);">
        <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <slot name="icon" />
            {{ title }}
        </h2>
        <p v-if="subtitle" class="text-primary-100 text-sm mt-1 font-medium">
            {{ subtitle }}
        </p>
    </div>
</template>
<style scoped>
.bg-linear-to-r {
    background-image: linear-gradient(to right, var(--from), var(--to));
}
</style>