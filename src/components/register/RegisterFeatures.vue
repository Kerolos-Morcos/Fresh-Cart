<script setup>
defineProps(["feature"])
</script>

<template>
    <li>
        <div class="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
            <div v-html="feature.svg"></div>
        </div>
        <div class="content">
            <h2 class="text-lg font-semibold">{{ feature.title }}</h2>
            <p class="text-gray-600">{{ feature.description }}</p>
        </div>
    </li>
</template>

<style scoped></style>