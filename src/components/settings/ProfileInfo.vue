<script setup>
import { useAPI } from '@/composables/useAPI';
import toastMessage from '@/helpers/toastMessage';
import { useAuthStore } from '@/stores/authStore';
import { Form } from "vee-validate";
import BaseField from '../form/BaseField.vue';
import SubmitButton from '../register/SubmitButton.vue';
import { updateProfileSchema } from '@/validations/updateProfileSchema.js';

const authStore = useAuthStore();
const { user, token } = authStore;
const { fetchData, isLoading } = useAPI();

const initialValues = {
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
};

function decodeToken(token) {
    if (!token) return null;
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch {
        return null;
    }
}
const decodedUser = decodeToken(token);

async function updateLoggedUserData(body, { resetForm }) {
    const payload = {
        name: body.name || initialValues.name,
        email: body.email || initialValues.email,
    };
    const res = await fetchData({
        url: "/v1/users/updateMe",
        method: "put",
        data: payload
    });
    if (res) {
        authStore.user = {
            ...authStore.user,
            ...payload,
        };
        localStorage.setItem('user', JSON.stringify(authStore.user));
        resetForm({ values: body });
        toastMessage('Profile updated successfully!', 'success');
    }
}
</script>

<template>
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 sm:p-8 border-b border-gray-100">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <svg data-prefix="fas" data-icon="user" class="w-5 svg-inline--fa fa-user text-2xl text-primary-600"
                        role="img" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-gray-900">Profile Information</h3>
                    <p class="text-sm font-medium text-gray-500">Update your personal details</p>
                </div>
            </div>
            <p class="text-sm text-green-600 mb-5 font-medium p-4 bg-green-50 rounded-xl border border-green-100">
                Please update all the fields below, all the fields are required
                "Don't use the same name or email".
            </p>
            <Form @submit="updateLoggedUserData" :validation-schema="updateProfileSchema" :validate-on-input="true"
                :initial-values="initialValues" class="space-y-5">
                <BaseField name="name" label="Full Name" type="text" placeholder="Enter your name" />
                <BaseField name="email" label="Email" type="email" placeholder="ali@example.com" />
                <BaseField name="phone" label="Phone Number" type="tel" placeholder="01xxxxxxxxx" />
                <div class="pt-4">
                    <SubmitButton :isLoading="isLoading" buttonText="Save Changes" loadingText="Updating..."
                        btnClass="!w-auto !px-6 !py-3 !rounded-xl !shadow-lg !shadow-primary-600/25">
                        <template #icon>
                            <svg data-prefix="fas" data-icon="floppy-disk"
                                class="w-3.5 me-2 svg-inline--fa fa-floppy-disk" role="img" viewBox="0 0 448 512"
                                aria-hidden="true">
                                <path fill="currentColor"
                                    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                                </path>
                            </svg>
                        </template>
                    </SubmitButton>
                </div>
            </Form>
        </div>
        <div class="p-6 sm:p-8 bg-gray-50">
            <h3 class="font-bold text-gray-900 mb-4">Account Information</h3>
            <div class="space-y-3 text-sm">
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">User ID</span>
                    <span class="font-mono text-gray-700">{{ decodedUser?.id || '—' }}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">Role</span>
                    <span class="px-3 py-1 rounded-lg bg-primary-100 text-primary-700 font-medium capitalize">
                        {{ user.role }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>