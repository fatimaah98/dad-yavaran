<template>
    <div class="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
        <p class="text-sm text-green-700 flex items-start gap-2">
            <IconsChecked class="text-green-700!" />
            {{ text }}
        </p>
    </div>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>