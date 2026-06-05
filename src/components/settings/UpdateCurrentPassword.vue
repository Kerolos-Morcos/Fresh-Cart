<script setup>
import BasePasswordField from '../form/BasePasswordField.vue';
import SubmitButton from '../register/SubmitButton.vue';
import { Form } from 'vee-validate';
import { updatePasswordSchema } from '@/validations/updatePasswordSchema.js';
import { useAPI } from '@/composables/useAPI';
import toastMessage from '@/helpers/toastMessage';

const { fetchData, isLoading } = useAPI();
async function updatePassword(body, { resetForm }) {
    const res = await fetchData({
        url: "/v1/users/changeMyPassword",
        method: "put",
        data: body
    });
    if (res) {
        resetForm();
        toastMessage('Password updated successfully!', 'success');
    }
}
</script>

<template>
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 sm:p-8">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <svg data-prefix="fas" data-icon="lock"
                        class="w-4.5 h-full svg-inline--fa fa-lock text-2xl text-amber-600" role="img"
                        viewBox="0 0 384 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-gray-900">Change Password</h3>
                    <p class="text-sm font-medium text-gray-500">Update your account password</p>
                </div>
            </div>
            <Form class="space-y-5" :validation-schema="updatePasswordSchema" @submit="updatePassword"
                :validate-on-input="true">
                <BasePasswordField name="currentPassword" label="Current Password*" :showIcon="true"
                    placeholder="Enter your current password" :showStrength="false" />
                <BasePasswordField name="password" label="New Password*" :showIcon="true"
                    placeholder="Enter your new password" :showStrength="true" />
                <BasePasswordField name="rePassword" label="Confirm Password*" :showIcon="true"
                    placeholder="Confirm your new password" :showStrength="false" />
                <div class="pt-4">
                    <SubmitButton :isLoading="isLoading" buttonText="Change Password" loadingText="Updating..."
                        btn-class="w-auto! inline-flex! items-center! gap-2! px-6! py-3! rounded-xl! bg-amber-600! text-white! font-semibold! hover:bg-amber-700! transition-colors! disabled:opacity-50! shadow-lg! shadow-amber-600/25!">
                        <template #icon>
                            <svg data-prefix="fas" data-icon="lock" class="w-3 me-2 h-5 svg-inline--fa fa-lock"
                                role="img" viewBox="0 0 384 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                                </path>
                            </svg>
                        </template>
                    </SubmitButton>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped></style>