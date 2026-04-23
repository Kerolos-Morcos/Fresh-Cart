<script setup>
import { useBreadcrumb } from "@/composables/useBreadcrumb";

const props = defineProps({
    variant: {
        type: String,
        default: "default",
    },
});

const { breadcrumb } = useBreadcrumb();
</script>

<template>
    <div :class="variant === 'default' ? 'py-4 px-4' : 'mb-6'">
        <div class="container mx-auto">
            <ol :class="[
                'flex items-center flex-wrap text-sm font-medium',
                variant === 'default' ? 'gap-1.5' : 'text-white/70 gap-0.5'
            ]">
                <!-- Home -->
                <li class="flex items-center">
                    <RouterLink to="/" :class="[
                        'transition flex items-center gap-2',
                        variant === 'default'
                            ? 'text-gray-500 hover:text-primary-600'
                            : 'hover:text-white'
                    ]">
                        <svg v-if="variant === 'default'" class="text-xs w-3" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208z" />
                        </svg>
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li v-for="(item, index) in breadcrumb" :key="index" class="flex items-center">
                    <span :class="variant === 'default' ? 'text-gray-400 mx-2' : 'text-white/40 mx-1'">
                        /
                    </span>
                    <RouterLink v-if="item.to" :to="item.to" :class="[
                        'transition',
                        variant === 'default'
                            ? 'text-gray-500 hover:text-primary-600'
                            : 'hover:text-white'
                    ]">
                        {{ item.label }}
                    </RouterLink>
                    <span v-else :class="variant === 'default'
                        ? 'text-gray-900 font-medium'
                        : 'text-white font-medium'">
                        {{ item.label }}
                    </span>
                </li>
            </ol>
        </div>
    </div>
</template>