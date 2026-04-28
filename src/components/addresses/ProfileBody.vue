<script setup>
import ProfileAside from '../addresses/ProfileAside.vue';


</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProfileAside />
            <main class="flex-1 min-w-0">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style scoped></style>