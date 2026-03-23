<script setup>
defineProps(['order']);
</script>

<template>
    <div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2"
            :class="order.isDelivered ? 'bg-green-100' : order.isPaid ? 'bg-blue-100' : 'bg-amber-100'">
            <svg data-prefix="fas" data-icon="clock" class="w-3.5 svg-inline--fa fa-clock text-xs"
                :class="order.isDelivered ? 'text-green-600' : order.isPaid ? 'text-blue-600' : 'text-amber-600'"
                role="img" viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                </path>
            </svg>
            <span class="text-xs font-semibold"
                :class="order.isDelivered ? 'text-green-600' : order.isPaid ? 'text-blue-600' : 'text-amber-600'">
                {{ order.isDelivered ? 'Delivered' : order.isPaid ? 'Paid' : 'Processing' }}
            </span>
        </div>
        <h3 class="font-bold text-gray-900 text-lg flex items-center gap-1">
            <svg data-prefix="fas" data-icon="hashtag" class="w-4 svg-inline--fa fa-hashtag text-xs text-gray-400"
                role="img" viewBox="0 0 512 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z">
                </path>
            </svg>
            {{ order.id }}
        </h3>
    </div>
</template>

<style scoped></style>