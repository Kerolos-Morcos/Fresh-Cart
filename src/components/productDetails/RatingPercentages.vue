<script setup>
import { computed } from 'vue';

const props = defineProps(['data']);

const ratingStats = computed(() => {
    const reviews = props.data?.reviews || []
    const stats = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }
    reviews.forEach(r => {
        const rate = Math.floor(r.rating)
        if (stats[rate] !== undefined) stats[rate]++
    })
    const total = reviews.length
    return Object.entries(stats)
        .sort((a, b) => b[0] - a[0])
        .map(([star, count]) => ({
            star: Number(star),
            count,
            percent: total ? Math.round((count / total) * 100) : 0
        }))
})
</script>

<template>
    <div class="flex-1 w-full flex flex-col gap-3">
        <div v-for="item in ratingStats" :key="item.star" class="flex items-center gap-3 mb-2">
            <span class="text-sm text-gray-600 w-8">
                {{ item.star }} <span class="text-yellow-400 text-lg">★</span>
            </span>
            <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-400 rounded-full transition-all duration-300"
                    :style="{ width: item.percent + '%' }"></div>
            </div>
            <span class="text-sm text-gray-500 w-10">
                {{ item.percent }}%
            </span>
        </div>
    </div>
</template>

<style scoped></style>