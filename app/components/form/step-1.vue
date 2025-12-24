<template>
    <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-stone-800">
            در مورد چه نوع موضوع حقوقی به کمک نیاز دارید؟
        </h2>
        <p class="mt-2 text-stone-500 text-sm md:text-base">
            دسته‌بندی‌ای را انتخاب کنید که به بهترین شکل وضعیت شما را توصیف می‌کند.
        </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <button class="p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-teal-300 
        hover:bg-teal-50/30 focus:outline-none focus:ring-2 
        focus:ring-teal-500/20 border-stone-200 bg-white cursor-pointer" 
        v-for="topic in topics" :key="topic.title">
            <div class="flex items-start gap-3">
                <span class="p-2 rounded-lg transition-colors bg-stone-100 text-stone-500">
                    <component :is="topic.icon" class="w-5" />
                </span>
                <div class="text-right">
                    <h3 class="font-medium transition-colors text-stone-700">
                        {{ topic.title }}
                    </h3>
                    <p class="text-xs text-stone-400 mt-0.5">
                        {{ topic.desc }}
                    </p>
                </div>
            </div>
        </button>
    </div>
    <PartialsWarnings description="اگر مطمئن نیستید نگران نباشید — در مرحله‌ی بعد می‌توانید جزئیات بیشتری ارائه دهید." />
</template>
<script setup>
    import 
    { UsersIcon, BriefcaseIcon, HomeIcon, BuildingOffice2Icon, GlobeAltIcon, DocumentTextIcon, QuestionMarkCircleIcon } 
    from '@heroicons/vue/24/outline';
    import HeartBroken from '../ui/heart-broken.vue';
    import shield from '../icons/shield.vue';

    const topics = ref([
        {title: 'حقوق خانواده', desc: 'طلاق، حضانت، فرزندخواندگی', icon: UsersIcon},
        {title: 'حقوق کار و استخدام', desc: 'اختلافات محیط کار، قراردادها', icon: BriefcaseIcon},
        {title: 'املاک و مستغلات', desc: 'ملک، اجاره‌نامه‌ها، معاملات', icon: HomeIcon},
        {title: 'حقوق کسب‌وکار', desc: 'قراردادها، اختلافات، ثبت و تأسیس شرکت', icon: BuildingOffice2Icon},
        {title: 'صدمات شخصی', desc: 'تصادفات، قصور پزشکی', icon: HeartBroken},
        {title: 'مهاجرت', desc: 'ویزا، شهروندی، پناهندگی', icon: GlobeAltIcon},
        {title: 'دفاع کیفری', desc: 'پرونده‌های کیفری', icon: shield},
        {title: 'اموال و ارث', desc: 'وصیت‌نامه، تراست، انحصار وراثت', icon: DocumentTextIcon},
        {title: 'سایر', desc: 'مواردی که در بالا ذکر نشده‌اند', icon: QuestionMarkCircleIcon}
    ])

</script>