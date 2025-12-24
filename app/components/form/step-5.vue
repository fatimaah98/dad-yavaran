<template>
    <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-stone-800">
            درخواست خود را بررسی کنید
        </h2>
        <p class="mt-2 text-stone-500 text-sm md:text-base">
            لطفاً قبل از ارسال، اطلاعات خود را بررسی کنید.
        </p>
    </div>
    <div class="space-y-4">
        <PartialsDisabledField v-for="item in fields" :key="item.title" :title="item.title" :subtitle="item.subtitle" />
    </div>
    <PartialsSuccess text="با ارسال، شما موافقت می‌کنید که اطلاعات ارائه شده تا جایی که شما می‌دانید دقیق است."/>
</template>
<script setup>
    const fields = ref([
        {title: 'نوع پرونده', subtitle: 'املاک و مستغلات'},
        {title: 'عنوان پرونده', subtitle: ''},
        {title: 'توضیحات', subtitle: ''},
        {title: 'فوریت', subtitle: ''}
    ])
</script>