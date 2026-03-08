<script setup>
import SpecialSectionTitle from '../SpecialSectionTitle.vue';

const features = [
    {
        text: "Fresh Picks Weekly",
        icon: `<svg data-prefix="fas" data-icon="leaf" class="svg-inline--fa fa-leaf text-emerald-600 text-xs w-3.5"
                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z">
                    </path>
                </svg>`
    },
    {
        text: "Free Delivery Codes",
        icon: `<svg data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck text-emerald-600 text-xs w-3.5"
                    role="img" viewBox="0 0 576 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                    </path>
                </svg>`
    },
    {
        text: "Members-Only Deals",
        icon: `<svg data-prefix="fas" data-icon="tag" class="svg-inline--fa fa-tag text-emerald-600 text-xs w-3.5"
                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                    </path>
                </svg>`
    }
]
</script>

<template>
    <div class="flex items-center gap-4">
        <div
            class="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <svg data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope text-white text-xl w-5"
                role="img" viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z">
                </path>
            </svg>
        </div>
        <div>
            <h3 class="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Newsletter
            </h3>
            <p class="text-xs text-gray-500">50,000+ subscribers</p>
        </div>
    </div>
    <div>
        <SpecialSectionTitle :section-title="'Get the Freshest Updates'" :special-title="'Delivered Free'"
            class="mt-0 mb-0 [&_h2]:text-3xl! lg:[&_h2]:text-4xl! [&_h2]:leading-snug max-w-110" />
        <p class="text-gray-500 mt-3 text-lg">
            Weekly recipes, seasonal offers & exclusive
            member perks.
        </p>
    </div>
    <div class="flex flex-wrap gap-3">
        <div v-for="feature in features" :key="feature + '525654A'"
            class="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
            <div class="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center" v-html="feature.icon">
            </div>
            <span class="text-sm font-medium text-gray-700">
                {{ feature.text }}
            </span>
        </div>
    </div>
</template>

<style scoped></style>