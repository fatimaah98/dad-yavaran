<template>
  <div class="rounded-md p-4 border" :class="'bg-warning-soft border-border-muted'">
    <div class="flex items-start gap-3">
      <div class="flex-none text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0V7zM10 14.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="text-sm text-text-muted">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// simple presentational component
</script>
