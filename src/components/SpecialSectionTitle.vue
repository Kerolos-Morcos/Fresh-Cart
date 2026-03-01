<script setup>
defineProps(['sectionTitle', 'specialTitle']);
</script>

<template>
    <div class="flex items-center gap-3 my-8">
        <div class="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
        <h2 class="text-3xl md:text-2xl font-bold text-gray-800">
            {{ sectionTitle }}
            <span class="text-emerald-600">{{ specialTitle }}</span>
        </h2>
    </div>
</template>

<style scoped></style>