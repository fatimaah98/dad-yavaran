<template>
    <main>
        <div class="min-h-screen bg-[#FAFAF8] flex flex-col">
            <div class="bg-white border-b border-stone-200 sticky top-0 z-10">
                <div class="max-w-6xl mx-auto px-4 py-4">
                    <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <UiSecondButton>
                                <ArrowRightIcon class="w-5" />
                            </UiSecondButton>
                            <div>
                                <h1 class="font-semibold text-stone-800">
                                     اختلاف حقوقی در قرارداد فروش ملک مسکونی 
                                </h1>
                                <p class="text-xs text-stone-500">
                                    تیکت: 694bd9ba
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-stone-500">
                            <IconsShield />
                            <span class="hidden sm:inline">
                                ایمن و خصوصی
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <TicketMainContent v-motion-slide-visible-once-bottom />
        </div>
    </main>
</template>
<script setup>
    import { ArrowRightIcon } from '@heroicons/vue/16/solid';
import TicketMainContent from '~/components/profile/ticket-main-content.vue';
</script>