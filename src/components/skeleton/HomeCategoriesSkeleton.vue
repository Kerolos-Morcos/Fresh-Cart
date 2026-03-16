<script setup>
import Skeleton from 'primevue/skeleton';
defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div>
        <template v-if="loading">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 container mx-auto px-4">
                <div v-for="i in 8" :key="i" class="flex flex-col items-center">
                    <div
                        class="h-20 w-20 rounded-full bg-gray-100 overflow-hidden shimmer mb-2 flex items-center justify-center">
                        <Skeleton width="100%" height="100%" class="shimmer" />
                    </div>
                    <Skeleton width="60%" height="16px" class="shimmer" />
                </div>
            </div>
        </template>
        <template v-else>
            <slot />
        </template>
    </div>
</template>

<style scoped>
@keyframes shine {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

.shimmer {
    background: linear-gradient(90deg,
            #fcfcfc 20%,
            #f4f4f4 40%,
            #fcfcfc 80%);
    background-size: 200% 100%;
    animation: shine 2s infinite linear;
}
</style>