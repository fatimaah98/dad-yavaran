<template>
    <div class="mt-6 p-4 bg-amber-50/50 rounded-xl border border-amber-100/50">
        <p class="text-sm text-amber-700/80 flex items-start gap-2">
            <span class="text-amber-500">
                💡
            </span>
            {{ description }}
        </p>
    </div>
</template>
<script setup>
    defineProps({
        description: String
    })
</script>