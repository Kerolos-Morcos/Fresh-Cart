<script setup>

</script>

<template>
    <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <svg data-prefix="fas" data-icon="headset"
                        class="w-4 svg-inline--fa fa-headset text-primary-600 text-lg" role="img" viewBox="0 0 448 512"
                        aria-hidden="true">
                        <path fill="currentColor"
                            d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-gray-900">Send us a Message</h2>
                    <p class="text-gray-500 text-sm">Fill out the form and we'll get back to you</p>
                </div>
            </div>
            <form class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input id="name" required="" placeholder="John Doe"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            type="text" value="" name="name">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input id="email" required="" placeholder="john@example.com"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            type="email" value="" name="email">
                    </div>
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                    </label>
                    <select id="subject" name="subject" required=""
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="shipping">Shipping Question</option>
                        <option value="returns">Returns &amp; Refunds</option>
                        <option value="product">Product Information</option>
                        <option value="feedback">Feedback &amp; Suggestions</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea id="message" name="message" required="" rows="5" placeholder="How can we help you?"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none">
                    </textarea>
                </div>
                <button type="submit"
                    class="cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-primary-600/20">
                    <svg data-prefix="fas" data-icon="paper-plane" class="w-5 svg-inline--fa fa-paper-plane" role="img"
                        viewBox="0 0 576 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z">
                        </path>
                    </svg>
                    Send Message
                </button>
            </form>
        </div>
        <div class="mt-6 bg-primary-50 rounded-2xl p-6 border border-primary-100">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg data-prefix="fas" data-icon="circle-question"
                        class="w-6 svg-inline--fa fa-circle-question text-primary-600 text-xl" role="img"
                        viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor"
                            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Looking for quick answers?</h3>
                    <p class="text-gray-600 text-sm mb-3">
                        Check out our Help Center for frequently asked questions about orders, shipping, returns, and
                        more.</p>
                    <a class="text-primary-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
                        href="/help">Visit Help Center →</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>