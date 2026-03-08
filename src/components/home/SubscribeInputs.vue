<script setup>
import { ref } from 'vue';
import SubscribeInfoData from './SubscribeInfoData.vue';

const email = ref("")
const success = ref(false)

const handleSubmit = () => {
    success.value = true
    setTimeout(() => {
        success.value = false
        email.value = ""
    }, 3000)
}
</script>

<template>
    <div class="lg:col-span-3 space-y-6">
        <SubscribeInfoData />
        <form class="pt-2" @submit.prevent="handleSubmit">
            <div class="flex flex-col sm:flex-row gap-3">
                <div class="relative flex-1">
                    <input v-model="email" type="email" placeholder="you@example.com" required
                        class="w-full pl-5 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-base shadow-sm">
                </div>
                <button type="submit" :disabled="success"
                    :class="success ? 'bg-emerald-500 text-white' : 'bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white'"
                    class="group cursor-pointer flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]">
                    <template v-if="success">
                        <svg class="w-4" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z" />
                        </svg>
                        <span>You're In!</span>
                    </template>
                    <template v-else>
                        <span>Subscribe</span>
                        <svg class="w-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </template>
                </button>
            </div>
            <p class="text-xs text-gray-400 mt-3 pl-1">✨ Unsubscribe anytime. No spam, ever.</p>
        </form>
    </div>
</template>

<style scoped></style>