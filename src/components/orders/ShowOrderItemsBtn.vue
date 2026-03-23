<script setup>
const { openedOrder, order } = defineProps(['order', 'openedOrder']);

const emit = defineEmits(['toggle']);

function toggleOrder() {
    emit('toggle', order._id);
}
</script>

<template>
    <div class="flex items-center justify-between gap-4">
        <div>
            <span class="text-2xl font-bold text-gray-900">{{ order.totalOrderPrice }}</span>
            <span class="text-sm font-medium text-gray-400 ml-1">EGP</span>
        </div>
        <button @click="toggleOrder" :class="openedOrder === order._id
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
            {{ openedOrder === order._id ? 'Hide' : 'Details' }}
            <svg class="w-2.5 text-xs transition-transform duration-300"
                :class="openedOrder === order._id ? 'rotate-180' : ''" viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                </path>
            </svg>
        </button>
    </div>
</template>

<style scoped></style>