<template>
    <div class="p-4 bg-stone-50 rounded-xl">
        <p class="text-xs text-stone-400 uppercase tracking-wide">
            {{ title }}
        </p>    
        <p class="text-stone-700 mt-1 capitalize">
            {{ subtitle }}
        </p>
    </div>
</template>
<script setup>
    defineProps({
        title: String,
        subtitle: String
    })
</script>