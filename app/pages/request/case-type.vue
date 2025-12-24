<template>
    <main class="min-h-screen bg-[#FAFAF8]">
        <div class="max-w-3xl mx-auto px-4 py-8 md:py-12">
            <div class="text-center mb-8">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 
                text-sm mb-4">
                    <IconsShield />
                    <span>
                        اطلاعات شما امن و محرمانه است
                    </span>
                </div>
                <h1 class="text-2xl md:text-3xl font-bold text-stone-800">
                    یک درخواست حقوقی ارسال کنید
                </h1>
                <p class="text-stone-500 mt-2">
                    ما شما را در هر مرحله راهنمایی خواهیم کرد تا به شما در توضیح وضعیتتان کمک کنیم.
                </p>
            </div>
            <FormIndicator :step-selected="step" />
            <section class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
                <Transition name="slide">
                     <component :is="currentStep" :key="step" />
                </Transition>
            </section>
            <div class="flex items-center justify-between mt-8">
                <SecondButton @click="step --">
                   <ArrowRightIcon class="w-5" />
                    <span>مرحله قبل</span>
                </SecondButton>
                <Button @click="nextStep">
                    <div v-if="step == 4" class="flex items-center gap-x-2">
                        <PaperAirplaneIcon class="w-5 -rotate-45" />
                        ارسال درخواست
                    </div>
                    <div v-else class="flex items-center gap-x-2">
                        <span> مرحله بعد</span>
                        <ArrowRightIcon class="w-5 rotate-180" />
                    </div>
                </Button>
            </div>
        </div>
    </main>
</template>
<script setup>
    import Button from '~/components/ui/button.vue';
    import SecondButton from '~/components/ui/second-button.vue';
    import { ArrowRightIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
    import Step1 from '~/components/form/step-1.vue';
    import Step2 from '~/components/form/step-2.vue';
    import Step3 from '~/components/form/step-3.vue';
    import Step4 from '~/components/form/step-4.vue';
import Step5 from '~/components/form/step-5.vue';

    definePageMeta({
        title: "ثبت درخواست"
    })

    const step = ref(0)
    const currentStep = computed(() => {
        switch (step.value) {
            case 0:
                return Step1
            case 1:
                return Step2
            case 2:
                return Step3
            case 3: 
                return Step4 
            case 4:
                return Step5
            default:
                break;
        }
    })

    const nextStep = () => {
        if(step.value < 4) {
            step.value ++;
        }
    }

</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
