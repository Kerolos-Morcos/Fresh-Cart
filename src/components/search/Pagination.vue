<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { pagination } = defineProps(['pagination']);
const route = useRoute();
const router = useRouter();

const currentPage = computed(() => Number(route.query.page) || 1);

const pages = computed(() =>
    Array.from({ length: pagination?.numberOfPages || 1 }, (_, i) => i + 1)
);

function goToPage(page) {
    if (page < 1 || page > pagination.numberOfPages) return;
    router.push({
        query: {
            ...route.query,
            page
        }
    });
}
</script>

<template>
    <div class="flex items-center justify-center gap-2 mt-10">
        <!-- Previous -->
        <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)"
            class="cursor-pointer w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <svg data-prefix="fas" data-icon="chevron-left" class="w-2.5 svg-inline--fa fa-chevron-left" role="img"
                viewBox="0 0 320 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z">
                </path>
            </svg>
        </button>

        <!-- Pages -->
        <button v-for="page in pages" :key="page" @click="goToPage(page)"
            class="cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors"
            :class="page === currentPage
                ? 'bg-primary-600 text-white'
                : 'border border-gray-200 text-gray-600 hover:bg-gray-50'">
            {{ page }}
        </button>

        <!-- Next -->
        <button :disabled="currentPage === pagination.numberOfPages" @click="goToPage(currentPage + 1)"
            class="cursor-pointer w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <svg data-prefix="fas" data-icon="chevron-right" class="w-2.5 svg-inline--fa fa-chevron-right" role="img"
                viewBox="0 0 320 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
                </path>
            </svg>
        </button>
    </div>
</template>

<style scoped></style>