<script setup>
defineProps({
    badgeIcon: String,
    badgeText: String,
    title: String,
    description: String,
    discount: String,
    code: String,
    buttonText: String,
    buttonColor: String,
    gradientFrom: String,
    gradientTo: String,
    link: String
});
</script>

<template>
    <div class="relative overflow-hidden rounded-2xl p-8 text-white"
        :class="`bg-linear-to-br ${gradientFrom} ${gradientTo}`">
        <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div class="relative z-10">
            <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                <span>{{ badgeIcon }}</span>
                <span>{{ badgeText }}</span>
            </div>
            <h3 class="sm:text-xl md:text-3xl font-bold mb-2">
                {{ title }}
            </h3>
            <p class="text-white/80 mb-4">
                {{ description }}
            </p>
            <div class="flex items-center gap-4 mb-6">
                <div class="text-3xl font-bold">
                    {{ discount }}
                </div>
                <div class="text-sm text-white/70">
                    Use code:
                    <span class="font-bold text-white">{{ code }}</span>
                </div>
            </div>
            <RouterLink :to="link"
                class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                :class="buttonColor">
                {{ buttonText }}
                <svg data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right w-4" role="img"
                    viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
                    </path>
                </svg>
            </RouterLink>
        </div>
    </div>
</template>