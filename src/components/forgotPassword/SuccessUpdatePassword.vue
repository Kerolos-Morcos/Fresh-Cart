<script setup>
const props = defineProps([
    'step'
]);

</script>

<template>
    <div v-if="props.step === 'done'" class="text-center space-y-6">
        <div class="flex items-center justify-center mb-4"><span class="text-3xl font-bold text-primary-600">Fresh<span
                    class="text-gray-800">Cart</span></span>
        </div>
        <div class="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center my-7">
            <svg data-prefix="fas" data-icon="check" class="w-7 svg-inline--fa fa-check text-green-600 text-3xl"
                role="img" viewBox="0 0 448 512" aria-hidden="true">
                <path fill="currentColor"
                    d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z">
                </path>
            </svg>
        </div>
        <div>
            <h1 class="text-2xl font-bold text-gray-900 mb-3">
                Password Reset!
            </h1>
            <p class="text-gray-600 text-md font-medium leading-relaxed">
                Your password has been successfully reset. You can now sign in
                with your new password.
            </p>
        </div>
        <RouterLink to="/login"
            class="w-full flex items-center justify-center bg-primary-600 text-white py-4 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl">
            Back to Sign In
        </RouterLink>
    </div>
</template>

<style scoped></style>