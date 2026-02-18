<script setup>
import RegisterWithMedia from './RegisterWithMedia.vue';


</script>

<template>
    <div class="bg-white rounded-2xl shadow-lg px-6 py-10">
        <h2 class="text-center text-3xl font-semibold mb-2">Create Your Account</h2>
        <p class="text-center">Start your fresh journey with us today</p>
        <RegisterWithMedia />
        <div class="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"
            aria-hidden="true"><span class="sr-only">or</span></div>
        <form class="space-y-7" novalidate="">
            <div class="flex flex-col gap-2">
                <label for="name">Name*</label>
                <input type="text" id="name" class="form-control" placeholder="Ali" aria-invalid="false" name="name">
            </div>
            <div class="flex flex-col gap-2">
                <label for="email">Email*</label>
                <input type="email" id="email" class="form-control" placeholder="ali@example.com" autocomplete="email"
                    aria-invalid="false" name="email">
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-2">
                    <label for="password">Password*</label>
                    <input type="password" id="password" class="form-control" placeholder="create a strong password"
                        autocomplete="new-password" aria-invalid="false" name="password">
                    <div class="password-requirements">
                        <div class="flex items-center gap-2">
                            <div class="bar grow h-1 bg-gray-200 rounded-md overflow-hidden" role="progressbar"
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                aria-label="Password strength: Weak">
                                <div class="progress bg-red-500 h-full transition-all duration-300 ease-out"
                                    style="width:0%"></div>
                            </div>
                            <span class="text-sm font-medium min-w-12.5">Weak</span>
                        </div>
                    </div>
                    <p class="text-gray-500 -mt-2 text-xs">
                        Must be at least 8 characters with numbers and symbols
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="rePassword">Confirm Password*</label>
                <input type="password" id="rePassword" class="form-control" placeholder="confirm your password"
                    autocomplete="new-password" aria-invalid="false" name="rePassword">
            </div>
            <div class="flex flex-col gap-2">
                <label for="phone">Phone Number*</label>
                <input type="tel" id="phone" class="form-control" placeholder="+1 234 567 8900" autocomplete="tel"
                    aria-invalid="false" name="phone">
            </div>
            <div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="terms" class="size-4 accent-primary-600" name="terms">
                    <label for="terms" class="ms-2">I agree to the
                        <a class="text-primary-600 hover:underline" href="/terms">Terms of Service</a>
                        and <a class="text-primary-600 hover:underline" href="/privacy-policy">
                            Privacy Policy</a>*
                    </label>
                </div>
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
        </form>
        <p class="border-t pt-10 border-gray-300/30 my-4 text-center">Already have an account? <a
                class="text-primary-600 hover:underline font-medium" href="/login">Sign In</a>
        </p>
    </div>
</template>

<style scoped></style>