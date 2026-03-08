<script setup>
import SubscribeInputs from './SubscribeInputs.vue';
import SubscribeMobileApp from './SubscribeMobileApp.vue';


</script>

<template>
    <div class="py-16 bg-linear-to-b from-white to-gray-50">
        <div class="container mx-auto px-8">
            <div class="relative">
                <div
                    class="absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-emerald-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/12 pointer-events-none">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-teal-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/12 pointer-events-none">
                </div>
                <div class="bg-linear-to-br from-emerald-50 via-white to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-2xl shadow-emerald-500/10 overflow-hidden"
                    style="opacity: 1; transform: none;">

                    <div class="relative grid lg:grid-cols-5 gap-8 p-8 lg:p-14">
                        <SubscribeInputs />
                        <SubscribeMobileApp />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>