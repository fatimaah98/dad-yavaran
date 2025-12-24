<template>
  <input
    type="text"
    class="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors 
    file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground 
    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 
    focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 h-12 
    disabled:text-stone-700 disabled:bg-stone-50 disabled:border-stone-100
    rounded-xl border-stone-200 focus:border-teal-500 focus:ring-teal-500/20"
    :placeholder="placeHolder"
    :disabled="disabled"
    :value="data"
  />
</template>
<script setup>
    defineProps({
        placeHolder: {
            type: String, default: ''
        },
        disabled: Boolean,
        data: String
    })
</script>
