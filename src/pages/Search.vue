<script setup>
import SearchBody from '@/components/search/SearchBody.vue';
import SearchHeader from '@/components/search/SearchHeader.vue';
import { ref } from 'vue';

const resultsCount = ref(0);
</script>

<template>
    <SearchHeader :resultsCount="resultsCount" />
    <SearchBody @resultsCount="resultsCount = $event" />
</template>

<style scoped></style>