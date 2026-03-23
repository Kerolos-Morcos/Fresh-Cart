<script setup>
defineProps(['order'])
</script>

<template>
    <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
        <span class="flex items-center gap-1.5 font-medium">
            <svg data-prefix="fas" data-icon="calendar-days"
                class="w-2.5 svg-inline--fa fa-calendar-days text-xs text-gray-400" role="img" viewBox="0 0 448 512"
                aria-hidden="true">
                <path fill="currentColor"
                    d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z">
                </path>
            </svg>
            {{ new Date(order.createdAt).toDateString().split(" ").slice(1).join(" ") }}
        </span>
        <span class="w-1 h-1 rounded-full bg-gray-300 font-medium"></span>
        <span class="flex items-center gap-1.5 font-medium">
            <svg data-prefix="fas" data-icon="box" class="w-3 svg-inline--fa fa-box text-xs text-gray-400" role="img"
                viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z">
                </path>
            </svg>
            {{order.cartItems.reduce((acc, item) => acc + item.count, 0)}} items
        </span>
        <span class="w-1 h-1 rounded-full bg-gray-300 font-medium"></span>
        <span class="flex items-center gap-1.5 font-medium">
            <svg data-prefix="fas" data-icon="location-dot"
                class="w-2.5 svg-inline--fa fa-location-dot text-xs text-gray-400" role="img" viewBox="0 0 384 512"
                aria-hidden="true">
                <path fill="currentColor"
                    d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z">
                </path>
            </svg>
            {{ order.shippingAddress?.city }}
        </span>
    </div>
</template>

<style scoped></style>