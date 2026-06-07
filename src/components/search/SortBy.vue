<script setup>
const model = defineModel({
    default: ''
})
</script>

<template>
    <div class="flex items-center gap-2">
        <span class="text-sm text-gray-500">Sort by:</span>
        <select v-model="model"
            class="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white">
            <option value="" selected="">Relevance</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
            <option value="-ratingsAverage">Rating: High to Low</option>
            <option value="title">Name: A to Z</option>
            <option value="-title">Name: Z to A</option>
        </select>
    </div>
</template>

<style scoped></style>