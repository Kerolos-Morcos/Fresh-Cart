<script setup>
import { useAPI } from '@/composables/useAPI';
import toastMessage from '@/helpers/toastMessage';
import { useAuthStore } from '@/stores/authStore';
import { Field, Form } from "vee-validate";

const { user } = useAuthStore();
const { fetchData } = useAPI();

async function updateLoggedUserData(body, { resetForm }) {
    const res = await fetchData({
        url: "/v1/users/updateMe",
        method: "put",
        data: body
    });
    if (res) {
        console.log(res);
        resetForm();
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
            <Form @submit="updateLoggedUserData" class="space-y-5">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input placeholder="Enter your name"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        required="" type="text" :value="user.name" />
                        
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input placeholder="Enter your email"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        required="" type="email" :value="user.email">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input placeholder="01xxxxxxxxx"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        required="" type="tel" value="">
                </div>
                <div class="pt-4">
                    <button type="submit"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                        <svg data-prefix="fas" data-icon="floppy-disk" class="w-3.5 svg-inline--fa fa-floppy-disk"
                            role="img" viewBox="0 0 448 512" aria-hidden="true">
                            <path fill="currentColor"
                                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                            </path>
                        </svg>
                        Save Changes
                    </button>
                </div>
            </Form>
        </div>
        <div class="p-6 sm:p-8 bg-gray-50">
            <h3 class="font-bold text-gray-900 mb-4">Account Information</h3>
            <div class="space-y-3 text-sm">
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">User ID</span>
                    <span class="font-mono text-gray-700">—</span>
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