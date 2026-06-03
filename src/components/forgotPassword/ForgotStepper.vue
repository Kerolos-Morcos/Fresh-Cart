<script setup>
import { computed } from 'vue';

const props = defineProps({
    step: {
        type: String,
        default: 'email' // email | code | password
    }
});

const isEmailDone = computed(() => ['code', 'password'].includes(props.step));
const isCodeActive = computed(() => props.step === 'code');
const isCodeDone = computed(() => props.step === 'password');
const isPasswordActive = computed(() => props.step === 'password');

const activeClass =
    'bg-green-600 text-white ring-4 ring-green-100';

const doneClass =
    'bg-green-600 text-white ring-4 ring-green-100';

const inactiveClass =
    'bg-gray-100 text-gray-400';

const activeLineClass = 'bg-green-600';
const inactiveLineClass = 'bg-gray-200';
</script>

<template>
    <div class="flex items-center justify-center mb-8">
        <!-- Email -->
        <div class="flex items-center">
            <div :class="isEmailDone ? doneClass : activeClass"
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ring-4 ring-primary-100">
                <svg v-if="isEmailDone" class="w-3.5 text-xs" viewBox="0 0 448 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z">
                    </path>
                </svg>
                <svg v-else data-prefix="fas" data-icon="envelope" class="w-3 svg-inline--fa fa-envelope text-xs"
                    role="img" viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z">
                    </path>
                </svg>
            </div>
            <div class="w-16 h-0.5 mx-2 transition-all duration-300"
                :class="isEmailDone ? activeLineClass : inactiveLineClass"></div>
        </div>
        <!-- Code -->
        <div class="flex items-center">
            <div :class="isCodeActive || isCodeDone ? activeClass : inactiveClass"
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                <svg v-if="isCodeDone" class="w-3.5 text-xs" viewBox="0 0 448 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z">
                    </path>
                </svg>
                <svg v-else data-prefix="fas" data-icon="key" class="w-3 svg-inline--fa fa-key text-xs" role="img"
                    viewBox="0 0 512 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z">
                    </path>
                </svg>
            </div>
            <div class="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"
                :class="isCodeDone ? activeLineClass : inactiveLineClass"></div>
        </div>
        <!-- Password -->
        <div class="flex items-center">
            <div :class="isPasswordActive ? activeClass : inactiveClass"
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                <svg data-prefix="fas" data-icon="lock" class="w-3.5 h-full svg-inline--fa fa-lock text-xs" role="img"
                    viewBox="0 0 384 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped></style>