<script setup>
import ForgotStepper from './ForgotStepper.vue';
import { forgotPasswordSchema } from '../../validations/forgotPassword';
import { verifyCodeSchema } from '../../validations/verifyCodeSchema';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { useAPI } from '@/composables/useAPI';
import toastMessage from '@/helpers/toastMessage';
import { computed, ref } from 'vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import UpdateForgotPassword from './UpdateForgotPassword.vue';
import { resetPasswordSchema } from '@/validations/resetPasswordSchema.js';
import SuccessUpdatePassword from './SuccessUpdatePassword.vue';


const { fetchData, isLoading } = useAPI();
const step = ref('email');
const sentEmail = ref('');
const resendLoading = ref(false);

const currentSchema = computed(() => {
    if (step.value === 'email') {
        return forgotPasswordSchema;
    }
    if (step.value === 'code') {
        return verifyCodeSchema;
    }
    return resetPasswordSchema;
});

async function forgotPasswordSubmit(body, { resetForm }) {
    if (step.value === 'email') {
        const res = await fetchData({
            url: "/v1/auth/forgotPasswords",
            method: "post",
            data: body,
        });
        if (res) {
            sentEmail.value = body.email;
            step.value = 'code';
            toastMessage(
                'Reset code sent to your email successfully!',
                'success'
            );
        }
        return;
    }
    if (step.value === 'code') {
        const res = await fetchData({
            url: "/v1/auth/verifyResetCode",
            method: "post",
            data: {
                resetCode: body.resetCode
            },
        })
        if (res) {
            toastMessage(
                'Verification successful! You can now reset your password.',
                'success'
            );
        }
        step.value = 'password';
        return;
    }
    if (step.value === 'password') {
        const res = await fetchData({
            url: "/v1/auth/resetPassword",
            method: "put",
            data: {
                email: sentEmail.value,
                newPassword: body.password,
            },
        });

        if (res) {
            toastMessage(
                'Password reset successfully.',
                'success'
            );
            step.value = 'done';
            resetForm();
        }
    }
}

function changeEmail() {
    step.value = 'email';
    sentEmail.value = '';
}


async function resendCode() {
    if (resendLoading.value) return;
    resendLoading.value = true;
    const res = await fetchData({
        url: "/v1/auth/forgotPasswords",
        method: "post",
        data: {
            email: sentEmail.value
        },
    });
    if (res) {
        toastMessage('New code sent!', 'success');
    }
    resendLoading.value = false;
}
</script>

<template>
    <div class="w-full">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div v-if="step !== 'done'" class="text-center mb-8">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-3xl font-bold text-primary-600">
                        Fresh
                        <span class="text-gray-800">
                            Cart
                        </span>
                    </span>
                </div>
                <h1 class="text-2xl font-bold text-gray-800 mb-2">
                    {{
                        step === 'email'
                            ? 'Forgot Password?'
                            : step === 'code'
                                ? 'Check Your Email'
                                : 'Create New Password'
                    }}
                </h1>
                <p class="text-gray-600">
                    {{
                        step === 'email'
                            ? "No worries, we'll send you a reset code"
                            : step === 'code'
                                ? `Enter the 6-digit code sent to ${sentEmail}`
                                : "Create a strong password for your account"
                    }}
                </p>
            </div>
            <ForgotStepper v-if="step !== 'done'" :step="step" />
            <SuccessUpdatePassword v-if="step === 'done'" :step="step" />
            <Form v-if="step !== 'done'" :validation-schema="currentSchema" @submit="forgotPasswordSubmit"
                v-slot="{ submitCount }" class="space-y-6" :validate-on-blur="false" :validate-on-change="true"
                :validate-on-input="true">
                <div v-if="step === 'email'">
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
                <!-- Success - Verification Code -->
                <div v-if="step === 'code'">
                    <label for="resetCode" class="block text-sm font-semibold text-gray-700 mb-2">
                        Verification Code
                    </label>
                    <div class="relative">
                        <Field id="resetCode" maxlength="6"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all text-center text-2xl tracking-[0.5em] font-mono"
                            placeholder="••••••" type="text" name="resetCode">
                        </Field>
                        <svg data-prefix="fas" data-icon="shield-halved"
                            class="w-4 svg-inline--fa fa-shield-halved absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z">
                            </path>
                        </svg>
                    </div>
                    <ErrorMessage name="resetCode" class="block text-sm text-red-500 font-medium mt-1" />
                </div>
                <!-- Password Reset -->
                <UpdateForgotPassword v-if="step === 'password'" />
                <!-- Submit -->
                <button type="submit" :disabled="isLoading"
                    class="w-full flex items-center justify-center cursor-pointer bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <LoadingSpinner v-if="isLoading" class="mr-2" />
                    {{
                        isLoading
                            ? 'Processing...'
                            : step === 'email'
                                ? 'Send Reset Code'
                                : step === 'code'
                                    ? 'Verify Code'
                                    : 'Reset Password'
                    }}
                </button>
                <div v-if="step === 'code'" class="text-center">
                    <p class="text-sm text-gray-500">
                        Didn't receive the code?
                        <button type="button" @click="resendCode" :disabled="resendLoading"
                            class="cursor-pointer text-green-600 hover:text-green-700 font-semibold transition-colors disabled:opacity-50">
                            {{ resendLoading ? 'Verifying...' : 'Resend Code' }}
                        </button>
                    </p>
                </div>
                <div class="text-center">
                    <RouterLink v-if="step === 'email'"
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
                    <button v-else type="button" @click="changeEmail"
                        class="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors cursor-pointer">
                        <svg data-prefix="fas" data-icon="arrow-left" class="w-4 svg-inline--fa fa-arrow-left text-xs"
                            role="img" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 0 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
                            </path>
                        </svg>
                        Change email address
                    </button>
                </div>
            </Form>
            <div v-if="step === 'email'" class="text-center mt-8 pt-6 border-t border-gray-100">
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