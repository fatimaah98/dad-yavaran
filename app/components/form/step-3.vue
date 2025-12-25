<template>
    <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-stone-800">
            تاریخ‌های مهم
        </h2>
        <p class="mt-2 text-stone-500 text-sm md:text-base">
            به ما کمک کنید تا جدول زمانی پرونده شما را درک کنیم.
        </p>
    </div>
    <div class="space-y-5">
        <div>
            <UiLabel>
                چه زمانی این حادثه رخ داده است؟ (اختیاری)
            </UiLabel>
            <UiInput place-holder="روز / ماه / سال" />
        </div>
        <div>
            <UiLabel>
                آیا مهلت‌های مهمی دارید؟ (اختیاری)
            </UiLabel>
            <UiInput place-holder="روز / ماه / سال" />
            <p class="text-xs text-stone-400 mt-1">
                تاریخ‌های دادگاه، مهلت‌های ثبت پرونده یا سایر تاریخ‌های حساس به زمان
            </p>
        </div>
    </div>
    <PartialsWarnings description="این تاریخ‌ها به وکلا کمک می‌کند تا پرونده شما را اولویت‌بندی کرده و برای آن آماده شوند." />
</template>