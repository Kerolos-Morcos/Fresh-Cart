<script setup>
defineProps({
    // Icon SVG path(s) - string or array of objects { d, fill? }
    iconPaths: {
        type: [String, Array],
        required: true,
    },
    // SVG viewBox
    iconViewBox: {
        type: String,
        default: '0 0 512 512',
    },
    // Icon wrapper size: 'md' = w-20 h-20 | 'lg' = w-24 h-24 | 'xl' = w-32 h-32
    iconSize: {
        type: String,
        default: 'lg',
        validator: (v) => ['md', 'lg', 'xl'].includes(v),
    },
    // Icon wrapper shape: 'rounded' = rounded-2xl | 'circle' = rounded-full
    iconShape: {
        type: String,
        default: 'rounded',
        validator: (v) => ['rounded', 'circle'].includes(v),
    },
    // Icon wrapper background - tailwind class string
    iconBg: {
        type: String,
        default: 'bg-gray-100',
    },
    // Icon svg width class e.g. 'w-10', 'w-15', 'w-18'
    iconWidth: {
        type: String,
        default: 'w-10',
    },
    // Icon color class e.g. 'text-gray-400', 'text-amber-500'
    iconColor: {
        type: String,
        default: 'text-gray-400',
    },
    // Heading text
    title: {
        type: String,
        required: true,
    },
    // Title size: 'xl' | '2xl'
    titleSize: {
        type: String,
        default: '2xl',
        validator: (v) => ['xl', '2xl'].includes(v),
    },
    // Description text (supports <br> via v-html)
    description: {
        type: String,
        default: '',
    },
    // CTA button label
    ctaLabel: {
        type: String,
        default: '',
    },
    // CTA route path
    ctaTo: {
        type: String,
        default: '/',
    },
    // Optional trailing icon SVG path for the CTA button
    ctaIconPath: {
        type: String,
        default: '',
    },
    // Optional leading icon SVG path for the CTA button
    ctaLeadingIconPath: {
        type: String,
        default: '',
    },
    ctaIconViewBox: {
        type: String,
        default: '0 0 512 512',
    },
    // CTA button extra classes (width, shadow, etc.)
    ctaClass: {
        type: String,
        default: '',
    },
    // Outer wrapper extra classes (py, flex centering, etc.)
    wrapperClass: {
        type: String,
        default: 'py-8 flex items-center justify-center px-4',
    },
    // Inner max-width class
    maxWidthClass: {
        type: String,
        default: 'max-w-sm',
    },
})

const iconSizeMap = {
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
}

const iconShapeMap = {
    rounded: 'rounded-2xl',
    circle: 'rounded-full',
}

const titleSizeMap = {
    xl: 'text-xl',
    '2xl': 'text-2xl',
}
</script>

<template>
    <div :class="wrapperClass">
        <div :class="[maxWidthClass, 'text-center']">

            <!-- Icon -->
            <div
                :class="[iconSizeMap[iconSize], iconShapeMap[iconShape], iconBg, 'flex items-center justify-center mx-auto mb-6']">
                <svg :class="[iconWidth, iconColor, 'svg-inline--fa']" role="img" :viewBox="iconViewBox"
                    aria-hidden="true">
                    <template v-if="Array.isArray(iconPaths)">
                        <path v-for="(p, i) in iconPaths" :key="i" :fill="p.fill || 'currentColor'" :d="p.d" />
                    </template>
                    <path v-else fill="currentColor" :d="iconPaths" />
                </svg>
            </div>

            <!-- Title -->
            <h2 :class="[titleSizeMap[titleSize], 'font-bold text-gray-900 mb-2']">{{ title }}</h2>

            <!-- Description -->
            <p v-if="description" class="text-gray-500 text-sm mb-6 font-medium leading-relaxed" v-html="description" />

            <!-- CTA -->
            <RouterLink v-if="ctaLabel" :to="ctaTo"
                :class="['inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3.5 px-8 rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/20', ctaClass]">

                <!-- Leading icon -->
                <svg v-if="ctaLeadingIconPath" class="w-4 svg-inline--fa" role="img" :viewBox="ctaIconViewBox"
                    aria-hidden="true">
                    <path fill="currentColor" :d="ctaLeadingIconPath" />
                </svg>

                {{ ctaLabel }}

                <!-- Trailing icon -->
                <svg v-if="ctaIconPath" class="w-3.5 svg-inline--fa" role="img" :viewBox="ctaIconViewBox"
                    aria-hidden="true">
                    <path fill="currentColor" :d="ctaIconPath" />
                </svg>
            </RouterLink>

        </div>
    </div>
</template>

<style scoped></style>