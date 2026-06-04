<script setup>
import PagesHeaderComponent from '../PagesHeaderComponent.vue';

defineProps(['data']);
</script>

<template>
    <PagesHeaderComponent :breadcrumb-items="[
        { label: 'Categories', to: '/categories' },
        { label: data?.name || 'Loading...' }
    ]" :label="data?.name || 'Custom Category'" description="Choose a subcategory to browse products">
        <template #icon>
            <img :alt="data?.slug" class="w-12 h-12 object-contain" :src="data?.image">
        </template>
    </PagesHeaderComponent>
</template>

<style scoped></style>