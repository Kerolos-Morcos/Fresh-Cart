<script setup>
defineProps(['isLoading', 'buttonText', 'loadingText', 'btnClass']);
</script>

<template>
    <button type="submit" :disabled="isLoading"
        class="btn bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors"
        :class="btnClass">
        <div v-if="!isLoading" class="flex items-center justify-center">
            <svg v-show="!buttonText" data-prefix="fas" data-icon="user-plus"
                class="svg-inline--fa fa-user-plus w-5 me-2" role="img" viewBox="0 0 640 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z">
                </path>
            </svg>
            <span>{{ buttonText || 'Create My Account' }}</span>
        </div>
        <div v-if="isLoading" class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <g fill="none">
                    <path
                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                        d="M12 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M7.885 6.337A1.5 1.5 0 1 1 6.122 3.91a1.5 1.5 0 0 1 1.763 2.427M3.452 10.8a1.5 1.5 0 1 0 .927-2.853a1.5 1.5 0 0 0-.927 2.853m1.89 3.363a1.5 1.5 0 1 1-2.853.927a1.5 1.5 0 0 1 2.854-.927m2.875 5.595a1.5 1.5 0 1 0-2.427-1.763a1.5 1.5 0 0 0 2.427 1.763M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6.21-1.005a1.5 1.5 0 1 0-2.427 1.763a1.5 1.5 0 0 0 2.427-1.763m.447-3.832a1.5 1.5 0 1 1 2.853.927a1.5 1.5 0 0 1-2.853-.927m.963-6.216a1.5 1.5 0 1 0 .927 2.853a1.5 1.5 0 0 0-.927-2.853m-3.506-1.61a1.5 1.5 0 1 1 1.764-2.427a1.5 1.5 0 0 1-1.764 2.427" />
                </g>
            </svg>
            <span class="ml-2">{{ loadingText || 'Creating Account...' }}</span>
        </div>
    </button>
</template>

<style scoped></style>