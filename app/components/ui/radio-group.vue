<template>
    <label for="" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
    peer-disabled:opacity-70 flex items-center gap-3 p-4 
    rounded-xl border-2 cursor-pointer transition-all border-stone-200 hover:border-stone-300">
        <button class="aspect-square h-4 w-4 rounded-full border border-teal-600
        shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:cursor-not-allowed disabled:opacity-50">
            <span class="flex items-center justify-center" v-if="checked">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-600">

                </span>
            </span>
        </button>
        <div>
            <p class="font-medium text-stone-700">
                {{ title }}
            </p>
            <p class="text-xs text-stone-400">
                {{ desc }}
            </p>
        </div>
    </label>
</template>
<script setup>
    defineProps({
        title: String,
        desc: String,
        checked: Boolean
    })
</script>