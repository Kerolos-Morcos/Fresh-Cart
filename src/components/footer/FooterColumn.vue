<script setup>
defineProps(["title", "links"])
</script>

<template>
    <div class="lg:col-span-2">
        <h3 class="font-semibold text-lg mb-5">
            {{ title }}
        </h3>
        <ul class="space-y-3">
            <li v-for="link in links" :key="link.label">
                <RouterLink :to="link.to" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {{ link.label }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>