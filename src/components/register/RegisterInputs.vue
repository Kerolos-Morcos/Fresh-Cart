<script setup>
import { registerSchema, passwordValue } from "../../validations/registerSchema";
import RegisterWithMedia from "./RegisterWithMedia.vue";
import { Form } from "vee-validate";
import { ref } from "vue";
import { toast } from 'vue3-toastify';
import SubmitButton from "./SubmitButton.vue";
import { useRouter } from "vue-router";
import BaseField from "../form/BaseField.vue";
import BaseCheckBox from "../form/BaseCheckBox.vue";
import BasePasswordField from "../form/BasePasswordField.vue";
import { useAPI } from "@/composables/useAPI";

const router = useRouter();
const { fetchData, error, isLoading } = useAPI();

async function registerUser(body, { resetForm }) {
    const res = await fetchData({
        url: "/v1/auth/signup",
        method: "post",
        data: body,
    });
    if (res) {
        resetForm();
        router.replace("/login").then(() => {
            toast.success('Account Created Successfully!', {
                autoClose: 2000,
                pauseOnHover: false,
                closeOnClick: true,
            });
        })
    } else if (error.value) {
        toast.error(error.value.msg, {
            autoClose: 3000,
            pauseOnHover: false,
            closeOnClick: true,
        });
    }
}
</script>

<template>
    <div class="bg-white rounded-2xl shadow-lg px-6 py-10">
        <h2 class="text-center text-3xl font-semibold mb-2">Create Your Account</h2>
        <p class="text-center font-medium">
            Start your fresh journey with us today
        </p>
        <RegisterWithMedia />
        <div class="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"
            aria-hidden="true">
            <span class="sr-only">or</span>
        </div>
        <Form @submit="registerUser" :validation-schema="registerSchema" class="space-y-7 *:font-medium"
            :validate-on-input="true">
            <BaseField name="name" label="Name*" placeholder="Ali" />
            <BaseField name="email" label="Email*" type="email" placeholder="ali@example.com" />
            <BasePasswordField name="password" label="Password*" placeholder="Create a strong password"
                v-model="passwordValue" :showStrength="true" />
            <BasePasswordField name="rePassword" label="Confirm Password*" placeholder="Confirm your password"
                :showStrength="false" />
            <BaseField name="phone" label="Phone Number*" type="tel" placeholder="+1 234 567 8900" />
            <BaseCheckBox name="terms">
                I agree to Terms
                <RouterLink class="text-primary-600 hover:underline" to="/terms">
                    Terms of Service
                </RouterLink>
                and
                <RouterLink class="text-primary-600 hover:underline" to="/privacy-policy">
                    Privacy Policy
                </RouterLink>*
            </BaseCheckBox>
            <SubmitButton :isLoading="isLoading" />
        </Form>
        <p class="border-t pt-10 border-gray-300/30 my-4 text-center">
            Already have an account?
            <RouterLink class="text-primary-600 hover:underline font-medium" to="/login">
                Sign In
            </RouterLink>
        </p>
    </div>
</template>

<style scoped></style>
