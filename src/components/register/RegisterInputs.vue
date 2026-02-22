<script setup>
import * as z from "zod";
import RegisterWithMedia from "./RegisterWithMedia.vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import PasswordStrength from "./PasswordStrength.vue";
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const apiError = ref("");
// API
async function registerUser(body) {
    console.log("body", body);
    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", body).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.response);
        apiError.value = err.response?.data?.message || "Something went wrong";
        toast.error(apiError.value);
    })
}

const registerSchema = toTypedSchema(
    z.object({
        name: z.string({ required_error: "*Please enter your name" })
            .min(3, "*Name must be at least 3 characters")
            .max(50, "*Name must not exceed 50 characters"),
        email: z.string({ required_error: "*Please enter your email" })
            .email("*Invalid email address"),
        password: z.string({ required_error: "*Please enter your password" })
            .min(8, "*Password must be at least 8 characters")
            .regex(/[A-Z]/, "*Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "*Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "*Password must contain at least one number")
            .regex(
                /[^A-Za-z0-9]/,
                "*Password must contain at least one special character",
            ),
        rePassword: z.string({ required_error: "*Please confirm your password" }),
        phone: z.string({ required_error: "*Please enter your phone number" })
            .transform(val => val.replace(/\s+/g, ""))
            .refine(val => /^(?:\+20|0)?1[0125][0-9]{8}$/.test(val), {
                message: "*Please enter a valid Egyptian phone number"
            }),
        terms: z.boolean({ required_error: "*You must accept the terms" })
            .refine((val) => val === true, {
                message: "*You must accept the terms",
            }),
    }).refine(
        (data) => data.password === data.rePassword,
        {
            message: "*Passwords do not match",
            path: ["rePassword"],
        }
    )
);

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
        <!-- Validate Form with Zod (Vee-Validate/Zod) -->
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
                    <Field :validate-on-input="true" :validate-on-blur="false" name="password" v-slot="{ field }">
                        <div class="relative">
                            <input v-bind="field" :type="showPassword ? 'text' : 'password'"
                                placeholder="Create a strong password" class="form-control w-full" />
                            <div class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                                @click="showPassword = !showPassword">
                                <svg v-if="!showPassword && field.value" class="w-3.5 h-3.5" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M22.295 6.31a.75.75 0 0 1 .394.986L22 7l.69.296v.001l-.002.003l-.003.007l-.01.024l-.039.084a14 14 0 0 1-.727 1.321a15 15 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1.001-1a11.6 11.6 0 0 1-2.274 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 0 1-1.5 0v-1.775a10.5 10.5 0 0 1-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.258-.818l.913-1.402a11.5 11.5 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924A15 15 0 0 1 1.514 7.72a10 10 0 0 1-.188-.388l-.01-.025l-.004-.007v-.003H1.31L2 7l-.69.296a.75.75 0 0 1 1.379-.592v.002l.007.014l.029.063q.04.086.125.255a13.3 13.3 0 0 0 2.706 3.584c.866.805 1.927 1.546 3.196 2.034A9 9 0 0 0 12 13.25a9 9 0 0 0 3.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.3 13.3 0 0 0 2.789-3.8l.028-.063l.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394zM2.69 6.704"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-if="showPassword && field.value" xmlns="http://www.w3.org/2000/svg"
                                    class="w-3.5 h-3.5" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path
                                            d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z" />
                                        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <PasswordStrength :password="field.value" />
                    </Field>
                    <ErrorMessage class="errorMessage" name="password" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="rePassword">Confirm Password*</label>
                <Field :validate-on-input="true" :validate-on-blur="true" name="rePassword" type="password"
                    class="form-control" placeholder="confirm your password" autocomplete="new-password" />
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
            <button type="submit"
                class="btn bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors"
                aria-busy="false">
                <svg data-prefix="fas" data-icon="user-plus" class="svg-inline--fa fa-user-plus w-5 me-2" role="img"
                    viewBox="0 0 640 512" aria-hidden="true">
                    <path fill="currentColor"
                        d="M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z">
                    </path>
                </svg>
                <span>Create My Account</span>
            </button>
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
