<script setup>
import { registerSchema, passwordValue } from "../../validations/registerSchema";
import RegisterWithMedia from "./RegisterWithMedia.vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import PasswordStrength from "./PasswordStrength.vue";
import { ref } from "vue";
import axios from "axios";
import ShowHidePassword from "./ShowHidePassword.vue";
import { toast } from 'vue3-toastify';
import SubmitButton from "./SubmitButton.vue";
import { useRouter } from "vue-router";

const apiError = ref("");
const isLoading = ref(false);
const router = useRouter();
async function registerUser(body, { resetForm }) {
    try {
        isLoading.value = true;
        await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/signup", body);
        toast.success("Account Created Successfully!", {
            autoClose: 3000,
            pauseOnHover: false,
            closeOnClick: true,
        });
        resetForm();
        setTimeout(() => {
            router.replace("/login");
        }, 3000);
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

const showPassword = ref(false);
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
            :initial-values="{ terms: false }" :validate-on-input="true">
            <div class="flex flex-col gap-2">
                <label for="name">Name*</label>
                <Field :validate-on-input="true" :validate-on-blur="true" name="name" type="text" id="name"
                    class="form-control" placeholder="Ali" aria-invalid="false" />
                <ErrorMessage class="errorMessage" name="name" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="email">Email*</label>
                <Field :validate-on-input="true" :validate-on-blur="true" name="email" type="email" id="email"
                    class="form-control" placeholder="ali@example.com" autocomplete="email" aria-invalid="false" />
                <ErrorMessage class="errorMessage" name="email" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-2">
                    <label for="password">Password*</label>
                    <Field :validate-on-input="true" :validate-on-blur="true" name="password" v-slot="{ field }">
                        <div class="relative">
                            <input id="password" v-bind="field" :type="showPassword ? 'text' : 'password'"
                                placeholder="Create a strong password" class="form-control w-full"
                                v-model="passwordValue" />
                            <ShowHidePassword :field="field" :showPassword="showPassword"
                                @click="showPassword = !showPassword" />
                        </div>
                        <PasswordStrength :password="field.value" />
                    </Field>
                    <ErrorMessage class="errorMessage" name="password" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="rePassword">Confirm Password*</label>
                <Field :validate-on-input="true" :validate-on-blur="true" name="rePassword" type="password"
                    class="form-control" placeholder="confirm your password" id="rePassword" />
                <ErrorMessage class="errorMessage" name="rePassword" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="phone">Phone Number*</label>
                <Field :validate-on-input="true" :validate-on-blur="true" name="phone" type="tel" id="phone"
                    class="form-control" placeholder="+1 234 567 8900" autocomplete="tel" aria-invalid="false" />
                <ErrorMessage class="errorMessage" name="phone" />
            </div>
            <div>
                <div class="flex items-center gap-2">
                    <Field :validate-on-input="true" :validate-on-blur="true" :value="true" name="terms" type="checkbox"
                        id="terms" class="size-4 accent-primary-600" aria-invalid="false" />
                    <label for="terms" class="ms-2">
                        I agree to the
                        <RouterLink class="text-primary-600 hover:underline" to="/terms">
                            Terms of Service
                        </RouterLink>
                        and
                        <RouterLink class="text-primary-600 hover:underline" to="/privacy-policy">
                            Privacy Policy
                        </RouterLink>
                        *
                    </label>
                </div>
                <ErrorMessage class="errorMessage" name="terms" />
            </div>
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
