<script setup>
import ContactInfo from '@/components/contact/ContactInfo.vue';
import ContactInputs from '@/components/contact/ContactInputs.vue';
import PagesHeaderComponent from '@/components/PagesHeaderComponent.vue';


</script>

<template>
    <PagesHeaderComponent label="Contact Us" description="We'd love to hear from you. Get in touch with our team.">
        <template #icon>
            <svg data-prefix="fas" data-icon="headset" class="w-6.5 svg-inline--fa fa-headset text-3xl" role="img"
                viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z">
                </path>
            </svg>
        </template>
    </PagesHeaderComponent>
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContactInfo />
            <ContactInputs />
        </div>
    </div>
</template>

<style scoped></style>