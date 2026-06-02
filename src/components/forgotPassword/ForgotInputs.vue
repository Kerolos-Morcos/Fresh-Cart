<script setup>
import ForgotStepper from './ForgotStepper.vue';
import { forgotPasswordSchema } from '../../validations/forgotPassword';
import { ErrorMessage, Field, Form } from 'vee-validate';

</script>

<template>
    <div class="w-full">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-3xl font-bold text-primary-600">
                        Fresh
                        <span class="text-gray-800">
                            Cart
                        </span>
                    </span>
                </div>
                <h1 class="text-2xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
                <p class="text-gray-600">No worries, we'll send you a reset code</p>
            </div>
            <ForgotStepper />
            <Form :validation-schema="forgotPasswordSchema" v-slot="{ submitCount }" class="space-y-6"
                :validate-on-blur="false" :validate-on-change="true" :validate-on-input="true">
                <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>
                    <div class="relative">
                        <Field id="email" :validate-on-input="true"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Enter your email address" type="email" name="email">
                        </Field>
                        <svg data-prefix="fas" data-icon="envelope"
                            class="w-4 svg-inline--fa fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z">
                            </path>
                        </svg>

                    </div>
                    <ErrorMessage v-if="submitCount > 0" name="email"
                        class="block text-sm text-red-500 font-medium mt-1" />
                </div>
                <button type="submit"
                    class="w-full cursor-pointer bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    Send Reset Code
                </button>
                <div class="text-center">
                    <RouterLink
                        class="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        to="/login">
                        <svg data-prefix="fas" data-icon="arrow-left" class="w-4 svg-inline--fa fa-arrow-left text-xs"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
                            </path>
                        </svg>
                        Back to Sign In
                    </RouterLink>
                </div>
            </form>
            <div class="text-center mt-8 pt-6 border-t border-gray-100">
                <p class="text-gray-600">Remember your password?
                    <RouterLink class="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                        to="/login">
                        Sign In
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>