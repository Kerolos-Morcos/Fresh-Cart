<script setup>

</script>

<template>
    <div
        class="flex h-10 gap-2 *:grow my-10 *:cursor-pointer *:transition-colors *:ease-in-out *:duration-200 *:rounded-lg">
        <button type="button"
            class="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center"
            aria-label="Sign up with Google">
            <svg data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google w-4 me-2.5 text-red-600"
                role="img" viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z">
                </path>
            </svg><span>Google</span>
        </button>
        <button type="button"
            class="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Sign up with Facebook">
            <svg data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook w-4 me-2.5 text-blue-600"
                role="img" viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z">
                </path>
            </svg><span>Facebook</span></button>
    </div>
</template>

<style scoped></style>