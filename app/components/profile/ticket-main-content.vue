<template>
    <section class="flex-1 overflow-hidden">
        <div class="max-w-6xl mx-auto h-full flex gap-6 p-4">
            <div class="flex-1 flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                <div class="flex-1 overflow-y-auto p-6">
                    <div class="flex flex-col items-center justify-center h-full text-center px-4">
                        <span class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <IconsShield class="lucide lucide-shield w-8 h-8 text-amber-600" />
                        </span>
                        <h3 class="text-lg font-semibold text-stone-800 mb-2">
                            پرونده در دست بررسی
                        </h3>
                        <p class="text-stone-600 max-w-md mb-6">
                            پرونده شما در حال حاضر در انتظار بررسی توسط تیم حقوقی ما است. به محض اینکه وکیل پرونده شما را تأیید کند، می‌توانید مستقیماً از طریق این تیکت با او ارتباط برقرار کنید.
                        </p>
                        <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-right max-w-md">
                            <div class="flex items-start gap-3">
                                <InformationCircleIcon class="lucide lucide-info w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                                <div class="text-sm text-teal-700">
                                    <p class="font-medium mb-1">
                                        بعد چه اتفاقی می‌افتد؟
                                    </p>
                                    <ol class="list-decimal list-inside space-y-1 text-teal-600">
                                        <li>
                                            یک وکیل جزئیات پرونده شما را بررسی خواهد کرد.
                                        </li>
                                        <li>
                                            در صورت تأیید، اعلانی دریافت خواهید کرد.
                                        </li>
                                        <li>
                                            پیام‌رسانی برای ارتباط مستقیم فعال خواهد شد.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-amber-50 border-t border-amber-200 p-4 text-center">
                    <p class="text-sm text-amber-700 flex items-center justify-center gap-2">
                        <InformationCircleIcon class="lucide lucide-circle-alert w-4 h-4 rotate-180" />
                        پس از بررسی و تأیید پرونده شما، امکان ارسال پیام فعال خواهد شد.
                    </p>
                </div>
            </div>
            <!-- ? side bar -->
            <ProfileTicketSideBar />
        </div>
    </section>
</template>
<script setup>
    import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>