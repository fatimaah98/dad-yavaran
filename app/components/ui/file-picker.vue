<template>
  <div
    class="relative border-2 border-dashed rounded-xl p-10 text-center transition
           cursor-pointer bg-white"
    :class="isDragging
      ? 'border-teal-500 bg-teal-50'
      : 'border-stone-200 hover:border-teal-400'"
    @dragenter.prevent="isDragging = true"
    @dragover.prevent
    @dragleave.prevent="isDragging = false"
    @drop.prevent="onDrop"
    @click="openFileDialog"
  >
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      multiple
      :accept="accept"
      @change="onFileChange"
    />

    <!-- Icon -->
    <div class="mx-auto mb-4 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
      <svg
        class="w-6 h-6 text-stone-500"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16V8m0 0l-3 3m3-3l3 3M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1"
        />
      </svg>
    </div>

    <!-- Text -->
    <p class="text-stone-700 font-medium">
      فایل‌ها را اینجا رها کنید
    </p>

    <p class="text-sm text-stone-500 mt-1">
      یا
      <span class="text-teal-600 font-medium underline">
        از کامپیوتر خود انتخاب کنید
      </span>
    </p>

    <p class="text-xs text-stone-400 mt-3">
      PDF، DOC، DOCX، JPG، PNG — حداکثر ۱۰ مگابایت
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const MAX_SIZE = 10 * 1024 * 1024 // 10MB
const accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png'

const emit = defineEmits<{
  (e: 'files', files: File[]): void
}>()

const openFileDialog = () => {
  fileInput.value?.click()
}

const validateFiles = (files: File[]) => {
  return files.filter(file => file.size <= MAX_SIZE)
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files) return

  const files = validateFiles(Array.from(target.files))
  emit('files', files)

  target.value = ''
}

const onDrop = (event: DragEvent) => {
  isDragging.value = false
  if (!event.dataTransfer?.files) return

  const files = validateFiles(Array.from(event.dataTransfer.files))
  emit('files', files)
}
</script>
