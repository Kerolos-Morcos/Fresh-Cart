<script setup>
import toastMessage from '@/helpers/toastMessage';

const props = defineProps(['data']);

async function shareProduct() {
    const url = window.location.href;
    const title = props.data?.title || 'Check out this product!';
    const text = `${title} - ${props.data?.priceAfterDiscount || props.data?.price} EGP`;
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
        } catch (err) {
            toastMessage('Share failed!', 'error');
        }
    } else {
        await navigator.clipboard.writeText(url);
        toastMessage('Link copied to clipboard!', 'success');
    }
}
</script>

<template>
    <button @click="shareProduct"
        class="cursor-pointer border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
        <svg data-prefix="fas" data-icon="share-nodes" class="svg-inline--fa fa-share-nodes w-4" role="img"
            viewBox="0 0 512 512" aria-hidden="true">
            <path fill="currentColor"
                d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z">
            </path>
        </svg>
    </button>
</template>

<style scoped></style>