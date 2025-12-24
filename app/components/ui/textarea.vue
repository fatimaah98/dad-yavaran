<template>
    <textarea name="" id="" cols="30" rows="10"
    class="flex w-full border bg-transparent px-3 py-2 text-base 
    shadow-sm placeholder:text-muted-foreground focus-visible:outline-none 
    focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed 
    disabled:opacity-50 md:text-sm mt-2 min-h-37.5 rounded-xl border-stone-200 focus:border-teal-500 
    focus:ring-teal-500/20 resize-none"
    :placeholder="placeHolder"
    ></textarea>
</template>
<script setup>
    defineProps({
        placeHolder: String
    })
</script>