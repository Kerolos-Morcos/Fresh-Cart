<script setup>
import Skeleton from 'primevue/skeleton';
</script>

<template>
    <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

        <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4 flex-1">

                <!-- icon -->
                <Skeleton shape="square" size="44px" class="rounded-xl" />

                <div class="flex-1">
                    <!-- title -->
                    <Skeleton width="40%" height="16px" class="mb-2" />

                    <!-- description -->
                    <Skeleton width="80%" height="12px" class="mb-1" />
                    <Skeleton width="60%" height="12px" class="mb-3" />

                    <!-- phone + city -->
                    <div class="flex gap-4">
                        <Skeleton width="80px" height="12px" />
                        <Skeleton width="60px" height="12px" />
                    </div>
                </div>
            </div>

            <!-- actions -->
            <div class="flex gap-2">
                <Skeleton shape="square" size="36px" class="rounded-lg" />
                <Skeleton shape="square" size="36px" class="rounded-lg" />
            </div>
        </div>
    </div>
</template>