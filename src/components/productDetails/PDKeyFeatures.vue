<script setup>

const keyFeaturesData = [
    {
        id: 1,
        content: 'Premium Quality Product'
    },
    {
        id: 2,
        content: '100% Authentic Guarantee'
    },
    {
        id: 3,
        content: 'Fast & Secure Packaging'
    },
    {
        id: 4,
        content: 'Quality Tested'
    }
]
</script>

<template>
    <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-medium text-gray-900 mb-3">Key Features</h4>
        <ul class="space-y-2">
            <li v-for="keyFeature in keyFeaturesData" :key="keyFeature.id"
                class="flex items-center text-sm text-gray-600">
                <svg data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                    role="img" viewBox="0 0 448 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z">
                    </path>
                </svg>
                {{ keyFeature.content }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>