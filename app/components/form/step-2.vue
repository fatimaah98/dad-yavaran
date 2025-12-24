<template>
    <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-stone-800">
            درباره پرونده‌تان به ما بگویید
        </h2>
        <p class="mt-2 text-stone-500 text-sm md:text-base">
            یک توضیح کوتاه درباره موضوع حقوقی خود ارائه دهید.
        </p>
    </div>
    <div class="space-y-5">
        <div>
            <UiLabel>
                عنوان پرونده
            </UiLabel>
            <UiInput place-holder="به عنوان مثال، اختلاف در قرارداد کار"/>
            <p class="text-xs text-stone-400 mt-1">
                یک عنوان کوتاه و توصیفی برای پرونده شما
            </p>
        </div>
        <div>
            <UiLabel>
                شرح پرونده
            </UiLabel>
            <UiTextarea place-holder="لطفاً وضعیت خود را با جزئیات شرح دهید. رویدادهای کلیدی، طرف‌های درگیر و نتیجه‌ای که به دنبال آن هستید را ذکر کنید..." />
        </div>
        <div>
            <UiLabel>
                این موضوع چقدر فوری است؟
            </UiLabel>
            <div class="grid grid-cols-2 gap-3">
                <UiRadioGroup v-for="(item, itemIndex) in urgentsGroup" @click="changeSetup(itemIndex)" 
                :key="item.title" :title="item.title" :desc="item.desc" :checked="item.checked" />
            </div>
        </div>
    </div>
    <PartialsWarnings description="هرچه جزئیات بیشتری را به اشتراک بگذارید، ما بهتر می‌توانیم شما را با کمک حقوقی مناسب مرتبط کنیم." />
</template>
<script setup>
    const urgentsGroup = ref([
        {title: 'کم', desc: 'بدون ضرب‌الاجل فوری', checked: true},
        {title: 'متوسط', desc: 'طی چند هفته آینده', checked: false},
        {title: 'زیاد', desc: 'طی یک هفته', checked: false},
        {title: 'فوری', desc: 'نیاز به رسیدگی فوری دارد', checked: false}
    ])

    const changeSetup = (index) => {
        urgentsGroup.value.forEach(item => item.checked = false);
        urgentsGroup.value[index].checked = true;
    }
</script>