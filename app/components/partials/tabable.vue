<template>
    <div class="inline-flex h-9 items-center justify-center text-muted-foreground 
    bg-white border border-stone-200 p-1 rounded-xl">
        <button 
        :data-state="userProfileActivated ? 'active' : 'inactive'"
        @click="userProfileActivated = true; $emit('isProfile', userProfileActivated)"
        class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1 
        text-sm font-medium ring-offset-background transition-all 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:shadow cursor-pointer rounded-lg data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <UserIcon class="w-4"/>
            پروفایل
        </button>
        <button 
        :data-state="!userProfileActivated ? 'active': 'inactive'"
        @click="userProfileActivated = false; $emit('isProfile', userProfileActivated)"
        class="inline-flex items-center justify-center whitespace-nowrap 
        px-3 py-1 text-sm font-medium ring-offset-background transition-all 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:shadow cursor-pointer rounded-lg data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <DocumentTextIcon class="w-4" />
            درخواست های من
        </button>
    </div>
</template>
<script setup>
    import { UserIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
    const userProfileActivated = ref(true)
</script>