<template>
    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <p class="text-sm text-stone-500">
                جمع در خواست های شما تا کنون: 1
            </p>
        </div>
        <UiCard>
            <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 font-normal bg-blue-100 text-blue-700">
                            <ClipboardDocumentCheckIcon class="w-4" />
                            ارسال شد
                        </span>
                        <span class="text-xs text-stone-400">
                            املاک و مستغلات
                        </span>
                    </div>
                    <h3 class="font-semibold text-stone-800 truncate group-hover:text-teal-700 transition-colors">
                        اختلاف حقوقی در قرارداد فروش ملک مسکونی
                    </h3>
                    <p class="text-sm text-stone-500 mt-1 line-clamp-2">
                        در این پرونده، اختلافی میان خریدار و فروشنده در خصوص مفاد قرارداد فروش یک واحد مسکونی به وجود آمده است. فروشنده به تعهدات خود در زمینه انتقال رسمی سند و تحویل به‌موقع ملک عمل نکرده و این موضوع منجر به بروز خسارات مالی برای خریدار شده است. درخواست بررسی حقوقی، ارائه راهکار قانونی و پیگیری از طریق مراجع ذی‌صلاح وجود دارد.
                    </p>
                    <div class="flex items-center gap-4 mt-3 text-xs text-stone-400">
                        <span>
                            ارسال شده در تاریخ: ۱ دی ۱۴۰۴
                        </span>
                    </div>
                </div>
                <span>
                    <ChevronRightIcon class="w-5 rotate-180 lucide lucide-chevron-right h-5 text-stone-300 group-hover:text-teal-500 transition-colors shrink-0" />
                </span>
            </div>
        </UiCard>
    </div>
</template>
<script setup>
    import { ClipboardDocumentCheckIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
</script>