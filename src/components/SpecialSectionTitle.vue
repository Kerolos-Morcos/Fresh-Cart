<script setup>
defineProps(['sectionTitle', 'specialTitle', 'showLine', 'textSize']);
</script>

<template>
    <div class="flex items-center gap-3 my-8">
        <div v-show="showLine === true" class="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full">
        </div>
        <h2 class="font-bold text-gray-800 sm:text-xl md:text-2xl lg:text-3xl" :class="textSize">
            {{ sectionTitle }}
            <span class="text-emerald-600">{{ specialTitle }}</span>
        </h2>
    </div>
</template>

<style scoped></style>