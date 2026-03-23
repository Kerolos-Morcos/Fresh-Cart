<script setup>
import LoadingSpinner from '../LoadingSpinner.vue';

const props = defineProps(['isSelectedMethod', 'isLoading']);

</script>

<template>
    <button v-if="props.isSelectedMethod === 'cash'" type="submit" :disabled="props.isLoading"
        class="disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer w-full mt-6 text-white py-4 rounded-xl font-bold bg-primary-600 hover:bg-primary-700 duration-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-[0.98]">
        <LoadingSpinner v-if="props.isLoading" />
        <template v-else>
            <svg data-prefix="fas" data-icon="box" class="w-4 svg-inline--fa fa-box" role="img" viewBox="0 0 448 512"
                aria-hidden="true">
                <path fill="currentColor"
                    d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z">
                </path>
            </svg>
        </template>
        {{ props.isLoading ? 'Processing...' : 'Place Order' }}
    </button>
    <button v-else type="submit" :disabled="props.isLoading"
        class="disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer w-full mt-6 text-white py-4 rounded-xl font-bold bg-primary-600 hover:bg-primary-700 duration-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-[0.98]">
        <LoadingSpinner v-if="props.isLoading" />
        <template v-else>
            <svg data-prefix="fas" data-icon="shield-halved" class="w-4 svg-inline--fa fa-shield-halved" role="img"
                viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                </path>
            </svg>
        </template>
        {{ props.isLoading ? 'Processing...' : 'Proceed to Payment' }}
    </button>
</template>

<style scoped></style>