<script setup>
defineProps(['title']);
</script>

<template>
    <div class="min-h-[60vh] flex flex-col items-center justify-center">
        <div class="relative">
            <div class="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center">
                <svg data-prefix="fas" data-icon="spinner"
                    class="svg-inline--fa fa-spinner text-3xl text-primary-600 animate-spin w-8" role="img"
                    viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z">
                    </path>
                </svg>
            </div>
        </div>
        <p class="text-gray-600 mt-6 font-medium">Loading {{ title }}...</p>
        <p class="text-gray-400 text-sm mt-1">Just a moment</p>
    </div>
</template>

<style scoped></style>