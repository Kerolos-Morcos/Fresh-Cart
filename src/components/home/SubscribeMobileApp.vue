<script setup>
const socials = [
    {
        text: 'DOWNLOAD ON',
        store: 'App Store',
        icon: `<svg data-prefix="fab" data-icon="apple" class="svg-inline--fa fa-apple text-xl w-4"
                                role="img" viewBox="0 0 384 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                </path>
                            </svg>`
    },
    {
        text: 'GET IT ON',
        store: 'Google Play',
        icon: `<svg data-prefix="fab" data-icon="google-play"
                                class="svg-inline--fa fa-google-play text-xl w-4" role="img" viewBox="0 0 448 512"
                                aria-hidden="true">
                                <path fill="currentColor"
                                    d="M293.6 234.3L72.9 13 353.7 174.2 293.6 234.3zM15.3 0C2.3 6.8-6.4 19.2-6.4 35.3l0 441.3c0 16.1 8.7 28.5 21.7 35.3L271.9 255.9 15.3 0zM440.5 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM72.9 499L353.7 337.8 293.6 277.7 72.9 499z">
                                </path>
                            </svg>`
    },
]
</script>

<template>
    <div class="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
        <div class="h-full flex flex-col justify-center">
            <div class="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl">
                </div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl">
                </div>
                <div class="relative space-y-5">
                    <div
                        class="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                        📱 MOBILE APP
                    </div>
                    <h3 class="text-2xl font-bold leading-tight">Shop Faster on Our App</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Get app-exclusive deals &
                        15% off your first order.</p>
                    <div class="flex flex-col gap-3 pt-2">
                        <a href="#" v-for="social in socials"
                            class="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                            <div v-html="social.icon"></div>
                            <div class="text-left">
                                <div class="text-[10px] text-gray-400 uppercase tracking-wide">
                                    {{ social.text }}
                                </div>
                                <div class="text-sm font-semibold -mt-0.5">{{ social.store }}</div>
                            </div>
                        </a>
                    </div>
                    <div class="flex items-center gap-2 pt-2 text-sm">
                        <span class="text-yellow-400">★★★★★</span>
                        <span class="text-gray-400">
                            4.9 • 100K+ downloads
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>