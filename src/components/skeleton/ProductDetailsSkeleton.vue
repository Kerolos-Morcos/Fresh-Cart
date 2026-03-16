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
            <div class="py-6 space-y-6">
                <div class="flex flex-col lg:flex-row gap-4 container mx-auto px-4">
                    <div class="lg:w-1/4 space-y-2">
                        <div class="relative rounded-md overflow-hidden bg-gray-50 p-1 shimmer">
                            <Skeleton width="100%" height="280px" class="bg-gray-50 shimmer" />
                            <div class="flex gap-1 mt-1">
                                <Skeleton v-for="i in 5" :key="i" width="45px" height="45px"
                                    class="bg-gray-50 shimmer" />
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-3/4 space-y-2">
                        <div class="rounded-md p-3 bg-gray-50 space-y-2 shimmer">
                            <div class="flex gap-2">
                                <Skeleton width="70px" height="18px" class="bg-gray-50 shimmer" />
                                <Skeleton width="70px" height="18px" class="bg-gray-50 shimmer" />
                            </div>
                            <Skeleton width="50%" height="22px" class="bg-gray-50 shimmer" />
                            <Skeleton width="160px" height="16px" class="bg-gray-50 shimmer" />
                            <Skeleton width="180px" height="22px" class="bg-gray-50 shimmer" />
                            <Skeleton width="100%" height="50px" class="bg-gray-50 shimmer" />
                            <div class="flex gap-2 mt-1">
                                <Skeleton width="110px" height="38px" class="bg-gray-50 shimmer" />
                                <Skeleton width="110px" height="38px" class="bg-gray-50 shimmer" />
                            </div>
                        </div>
                    </div>
                </div>
                <section class="py-4">
                    <div class="bg-gray-50 rounded-md p-3 space-y-2 container mx-auto px-4 shimmer">
                        <div class="flex gap-3 mb-1">
                            <Skeleton width="100px" height="22px" class="bg-gray-50 shimmer" />
                            <Skeleton width="100px" height="22px" class="bg-gray-50 shimmer" />
                            <Skeleton width="120px" height="22px" class="bg-gray-50 shimmer" />
                        </div>
                        <Skeleton width="100%" height="160px" class="bg-gray-50 shimmer" />
                    </div>
                </section>
                <section class="pb-4 container mx-auto px-4">
                    <Skeleton width="150px" height="22px" class="bg-gray-50 mb-2 shimmer" />
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        <div v-for="i in 10" :key="i" class="space-y-1">
                            <Skeleton width="100%" height="120px" class="bg-gray-50 shimmer" />
                            <Skeleton width="70%" height="16px" class="bg-gray-50 shimmer" />
                            <Skeleton width="50%" height="16px" class="bg-gray-50 shimmer" />
                        </div>
                    </div>
                </section>
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
            #f9fafb 20%,
            #f3f4f6 40%,
            #f9fafb 80%);
    background-size: 200% 100%;
    animation: shine 2s infinite linear;
}
</style>