<script setup>
import { Form } from 'vee-validate';
import LoginInputFeatures from './LoginInputFeatures.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BaseField from '../form/BaseField.vue';
import BasePasswordField from '../form/BasePasswordField.vue';
import BaseCheckBox from '../form/BaseCheckBox.vue';
import SubmitButton from '../register/SubmitButton.vue';
import LoginInputsStaticData from './LoginInputsStaticData.vue';
import { toast } from 'vue3-toastify';
import { loginSchema } from '@/validations/loginSchema';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const apiError = ref("");
const isLoading = ref(false);
const router = useRouter();

async function loginUser(body, { resetForm }) {
    try {
        isLoading.value = true;
        const res = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/signin", body);
        resetForm();
        // token
        const token = res.data.token;
        localStorage.setItem("token", token);
        authStore.token = token;

        setTimeout(() => {
            router.push({ name: 'home' });
        }, 700);

        toast.success("Logged in successfully!", {
            autoClose: 3000,
            pauseOnHover: false,
            closeOnClick: true,
        });
    } catch (err) {
        apiError.value = err.response?.data?.message || "Something went wrong";
        toast.error(apiError.value, {
            autoClose: 3000,
            pauseOnHover: false,
            closeOnClick: true,
        });
    } finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <div class="w-full">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <LoginInputsStaticData />
            <Form :validation-schema="loginSchema" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(loginUser)" @blur.capture.stop class="space-y-6">
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>
                    <BaseField name="email" type="email" placeholder="Enter your email"
                        inputClass="pl-12 py-3 border-2 border-gray-200 rounded-xl" gap="0">
                        <template #icon>
                            <svg data-prefix="fas" data-icon="envelope"
                                class="svg-inline--fa fa-envelope w-4 h-4 flex  absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                role="img" viewBox="0 0 512 512" aria-hidden="true">
                                <path fill="currentColor"
                                    d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z">
                                </path>
                            </svg>
                        </template>
                    </BaseField>
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
                            <RouterLink
                                class="text-sm text-primary-600 transition-colors duration-200 hover:text-primary-800 cursor-pointer font-medium"
                                to="/forgetPassword">Forgot Password?</RouterLink>
                        </div>
                        <BasePasswordField name="password" placeholder="Enter your password" :showIcon="true"
                            inputClass="pl-12 py-3 border-2 border-gray-200 rounded-xl" gap="0">
                            <template #icon>
                                <svg data-prefix="fas" data-icon="lock"
                                    class="svg-inline--fa fa-lock absolute w-4 h-4 left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    role="img" viewBox="0 0 384 512" aria-hidden="true">
                                    <path fill="currentColor"
                                        d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z">
                                    </path>
                                </svg>
                            </template>
                        </BasePasswordField>
                    </div>
                    <BaseCheckBox label="Keep me signed in" name="rememberMe" label-class="text-sm text-gray-700" />
                    <SubmitButton btn-class="h-13.5 font-semibold text-lg shadow-lg hover:shadow-xl"
                        :isLoading="isLoading" buttonText="Sign In" loadingText="Signing In..." />
                </form>
            </Form>
            <div class="text-center mt-8 pt-6 border-t border-gray-100">
                <p class="text-gray-600">
                    New to FreshCart?
                    <RouterLink class="text-primary-600 hover:text-primary-700 ms-2 font-semibold cursor-pointer"
                        to="/register">
                        Create an account
                    </RouterLink>
                </p>
            </div>
            <LoginInputFeatures />
        </div>
    </div>
</template>

<style scoped></style>