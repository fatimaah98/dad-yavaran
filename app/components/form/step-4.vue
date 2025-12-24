<template>
    <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-stone-800">
            مدارک پشتیبان
        </h2>
        <p class="mt-2 text-stone-500 text-sm md:text-base">
            هرگونه مدرک مرتبطی که ممکن است به توضیح پرونده شما کمک کند را بارگذاری کنید.
        </p>
    </div>
    <div class="space-y-4">
        <UiFilePicker />
        <div class="mt-6">
            <UiLabel>
                نکات تکمیلی (اختیاری)
            </UiLabel>
            <UiTextarea place-holder="هر اطلاعات دیگری که مایل به اشتراک گذاری آن هستید..."/>
        </div>
    </div>
    <PartialsWarnings description="اسناد ممکن است شامل قراردادها، مکاتبات، عکس‌ها یا اطلاعیه‌های رسمی باشد. این مرحله اختیاری است." />
</template>