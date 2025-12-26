<template>
    <div class="hidden lg:block w-80 space-y-4">
        <div class="bg-white rounded-xl p-6 border border-stone-100 shadow-sm">
            <h3 class="text-sm font-medium text-stone-700 mb-4">
                پیشرفت پرونده
            </h3>
            <div class="relative">
                <div class="absolute top-5 left-5 right-5 h-0.5 bg-stone-200"></div>
                <div class="absolute top-5 left-5 h-0.5 bg-teal-500 transition-all duration-500" style="width: calc(0% - 1.25rem);"></div>
                <div class="relative flex justify-between">
                    <div class="flex flex-col items-center">
                        <span class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all bg-white border-teal-500 text-teal-600 shadow-lg shadow-teal-500/20">
                            <ClipboardDocumentCheckIcon class="w-5" />
                        </span>
                        <span class="mt-2 text-xs font-medium text-center max-w-20 text-teal-600">
                            ارسال شده
                        </span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all bg-stone-100 border-stone-200 text-stone-400">
                            <InformationCircleIcon class="w-5 rotate-180" />
                        </span>
                        <span class="mt-2 text-xs font-medium text-center max-w-20 text-stone-400">
                            در حال بررسی
                        </span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all bg-stone-100 border-stone-200 text-stone-400">
                            <CheckCircleIcon class="w-5" />
                        </span>
                        <span class="mt-2 text-xs font-medium text-center max-w-20 text-stone-400">
                            تایید شده
                        </span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all bg-stone-100 border-stone-200 text-stone-400">
                            <legal class="text-stone-400! lucide lucide-scale w-5! h-5!" />
                        </span>
                        <span class="mt-2 text-xs font-medium text-center max-w-20 text-stone-400">
                            در حال انجام
                        </span>
                    </div>
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-stone-100 space-y-2 text-xs">
                <div class="flex justify-between">
                    <span class="text-stone-500">
                        ارسال شده
                    </span>
                    <span class="text-stone-700 font-medium">
                        ۱۴ دی ۱۴۰۴
                    </span>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
            <h3 class="text-sm font-medium text-stone-700 mb-4 flex items-center gap-2">
                <DocumentTextIcon class="lucide lucide-file-text w-4 h-4" />
                اطلاعات موردی
            </h3>
            <div class="space-y-3 text-sm">
                <div>
                    <p class="text-stone-500 text-xs mb-1">توضیحات</p>
                    <p class="text-stone-700 text-xs leading-relaxed">
                        اختلاف حقوقی در قرارداد فروش ملک مسکونی
                    </p>
                </div>
                <div class="pt-3 border-t border-stone-100">
                    <p class="text-stone-500 text-xs mb-1">نوع پرونده</p>
                    <p class="text-stone-700 capitalize"> املاک و مستغلات </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ClipboardDocumentCheckIcon, InformationCircleIcon, CheckCircleIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
    import legal from '../icons/legal.vue';
</script>