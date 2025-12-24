<template>
    <div class="w-full py-6">
        <div class="flex items-center justify-between relative">
            <span class="absolute top-5 left-0 right-0 h-0.5 bg-stone-200 mx-8"></span>
            <span class="absolute top-5 right-0 h-0.5 bg-linear-to-l from-teal-500 to-teal-400 
                mx-8 transition-all duration-500"
                :style="{width: `calc(${getLineWidth()}% - 4rem)`}">
            </span>
            <div class="flex flex-col items-center relative z-10" v-for="(step, stepIndex) in steps" :key="step">
                <div class="w-10 h-10 rounded-full flex items-center justify-center 
                transition-all duration-300 border-2"
                :class="{'bg-stone-100 text-stone-400 border-stone-200' : stepSelected != stepIndex, 
                'bg-white text-teal-600 border-teal-500 shadow-lg shadow-teal-500/20' : stepSelected == stepIndex,
                'bg-teal-500 border-teal-500': stepSelected > stepIndex}">
                    <IconsChecked v-if="stepSelected > stepIndex" />
                    <span class="text-sm font-medium" v-else>{{stepIndex + 1}}</span>
                </div>
                <span class="mt-2 text-xs font-medium transition-colors hidden sm:block"
                :class="{'text-stone-400': stepSelected != stepIndex, 'text-teal-600': stepSelected == stepIndex}">
                    {{step}}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        stepSelected: {
            type: Number, 
            default: 0
        }
    })
    const steps = ref([
        'نوع پرونده', 'جزییات' , 'جدول زمانی', 'مستندات', 'بازبینی'
    ])
    // const stepSelected = ref(0)
    const getLineWidth = () => `${props.stepSelected * 25}`
</script>
