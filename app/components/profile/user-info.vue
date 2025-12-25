<template>
    <section class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 
    focus-visible:ring-ring focus-visible:ring-offset-2" v-motion-slide-bottom>
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-stone-800">
                    اطلاعات شخصی
                </h2>
                <UiThirdButton @click="EditableControl" v-if="showEdit">
                    <PencilIcon class="w-5" />
                    ویرایش
                </UiThirdButton>
                <div class="flex gap-2 flex-wrap" v-else>
                    <UiSecondButton @click="disableForm">
                        <XMarkIcon class="w-4" />
                        <span class="hidden md:block">انصراف</span>
                    </UiSecondButton>
                    <UiButton @click="disableForm">
                        <BookmarkSquareIcon class="w-4" />
                        <span class="hidden md:block"> ذخیره تغییرات</span>
                    </UiButton>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2" v-for="item in userFormData" :key="item.title">
                    <UiLabel class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-stone-500 text-sm flex items-center gap-2">
                        <component :is="item.icon" class="w-4" />
                        <span>{{ item.title }}</span>
                    </UiLabel>
                    <UiInput v-model="item.data" :disabled="item.disabled" :data="item.data" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { PencilIcon, UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, BriefcaseIcon, CalendarIcon, XMarkIcon, BookmarkSquareIcon } from '@heroicons/vue/24/outline';

    const showEdit = ref(true)
    const userFormData = ref([
        {title: 'نام کامل', icon: UserIcon, data: 'فاطمه نصاری', disabled: true}, 
        {title: 'ایمیل', icon: EnvelopeIcon, data: 'fatimah.nassari98@gmail.com', disabled: true},
        {title: 'تلفن', icon: PhoneIcon, data: '09050690417', disabled: true},
        {title: 'آدرس', icon: MapPinIcon, data: 'قم', disabled: true},
        {title: 'شغل', icon: BriefcaseIcon, data: 'برنامه نویس', disabled: true},
        {title: 'تاریخ عضویت', icon: CalendarIcon, data: '۱۲ خرداد 1404', disabled: true}
    ])

    const EditableControl = () => {
        showEdit.value = false;
        userFormData.value.forEach((item, index) => {
            if(index != 1 && index != 5) {
                item.disabled = false;
            }
        })
    }

    const disableForm = () => {
        showEdit.value = true;

        userFormData.value.forEach(item => item.disabled = true)
    }
</script>