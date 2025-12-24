<template>
  <button
    type="button"
    class="group flex flex-col items-start p-4 rounded-lg border bg-white text-left transition-shadow transition-colors w-full hover:shadow-sm"
    :class="selected ? 'border-primary bg-primary-light/10 shadow-sm' : 'border-border-muted'"
    @click="$emit('select', id)"
    :aria-pressed="selected"
  >
    <div class="flex items-center gap-3 w-full">
      <div class="flex-none w-10 h-10 rounded-md flex items-center justify-center bg-white" :class="selected ? 'text-primary' : 'text-muted'">
        <slot name="icon" />
      </div>
      <div class="flex-1">
        <div class="text-sm font-medium" :class="selected ? 'text-primary' : 'text-primary'">{{ title }}</div>
        <div class="mt-1 text-xs text-text-muted">{{ description }}</div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  id: string
  title: string
  description?: string
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()
</script>
