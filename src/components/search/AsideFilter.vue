<script setup>

</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <div class="space-y-6">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-900">Categories</h3>
                    </div>
                    <div class="space-y-2 max-h-52 overflow-y-auto">
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Music</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Men's
                                Fashion</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Women's
                                Fashion</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">SuperMarket</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Baby
                                &amp; Toys</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Home</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Books</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Beauty
                                &amp; Health</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Mobiles</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Electronics</span>
                        </label>
                    </div>
                </div>
                <hr class="border-gray-100">
                <div>
                    <h3 class="font-bold text-gray-900 mb-4">Price Range</h3>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <label class="text-xs text-gray-500 mb-1 block">Min (EGP)</label>
                            <input placeholder="0"
                                class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                                type="number" value="">
                        </div>
                        <div>
                            <label class="text-xs text-gray-500 mb-1 block">Max (EGP)</label>
                            <input placeholder="No limit"
                                class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                                type="number" value="">
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            500
                        </button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            1K</button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            5K</button>
                        <button
                            class="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">Under
                            10K
                        </button>
                    </div>
                </div>
                <hr class="border-gray-100">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-900">Brands</h3>
                    </div>
                    <div class="space-y-2 max-h-52 overflow-y-auto">
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Canon</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Dell</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Lenovo</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">SONY</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Infinix</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Realme</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">HONOR</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Nokia</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">OPPO</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Huawei</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Apple</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Xiaomi</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span
                                class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Samsung</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Jack
                                &amp; Jones</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                type="checkbox">
                            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">LC
                                Waikiki</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>