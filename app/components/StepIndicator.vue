<template>
  <nav aria-label="Progress" class="w-full">
    <ol class="flex items-center justify-center gap-6">
      <li v-for="(label, idx) in labels" :key="idx" class="flex flex-col items-center text-center">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center border"
          :class="currentStep === idx + 1 ? 'border-primary bg-primary text-white' : 'border-border-muted bg-white text-text-muted'"
        >
          <span class="text-sm font-medium">{{ idx + 1 }}</span>
        </div>
        <div class="mt-2 text-xs" :class="currentStep === idx + 1 ? 'text-primary' : 'text-text-muted'">{{ label }}</div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps<{
  currentStep?: number
  total?: number
  labels?: string[]
}>()

const defaultLabels = ['Case Type', 'Details', 'Timeline', 'Documents', 'Review']

const labels = computed(() => props.labels ?? defaultLabels)
const currentStep = computed(() => props.currentStep ?? 1)
</script>
