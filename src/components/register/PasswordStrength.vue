<script setup>
import { computed } from 'vue';

const props = defineProps(['password'])

const score = computed(() => {
    const password = props.password || ''
    let s = 0
    if (password.length >= 8) s++
    if (/[A-Z]/.test(password)) s++
    if (/[a-z]/.test(password)) s++
    if (/[0-9]/.test(password)) s++
    if (/[^A-Za-z0-9]/.test(password)) s++
    return s
})

const strengthText = computed(() => {
    if (score.value <= 1) return "Weak"
    if (score.value === 2) return "Fair"
    if (score.value === 3 || score.value === 4) return "Good"
    return "Strong"
})

const strengthPercent = computed(() => (score.value / 5) * 100)

const strengthColor = computed(() => {
    if (score.value <= 1) return "bg-red-500"
    if (score.value === 2) return "bg-yellow-400"
    if (score.value === 3 || score.value === 4) return "bg-blue-500"
    return "bg-green-500"
})
</script>

<template>
    <div class="flex items-center gap-2">
        <div class="grow h-1 bg-gray-200 rounded-md overflow-hidden" role="progressbar" :aria-valuenow="strengthPercent"
            aria-valuemin="0" aria-valuemax="100" :aria-label="`Password strength: ${strengthText}`">
            <div class="progress h-full transition-all duration-300 ease-out" :class="strengthColor"
                :style="{ width: strengthPercent + '%' }"></div>
        </div>
        <span class="text-sm font-medium min-w-12.5">{{ strengthText }}</span>
    </div>
    <p class="text-gray-500 -mt-2 text-xs">
        Must be at least 8 characters with numbers and symbols
    </p>
</template>

<style scoped></style>
