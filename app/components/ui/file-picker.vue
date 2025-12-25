<template>
  <div>
    <!-- Dropzone -->
    <div
      class="relative border-2 border-dashed rounded-xl p-10 text-center transition
             cursor-pointer bg-white"
      :class="isDragging
        ? 'border-teal-500 bg-teal-50'
        : 'border-stone-200 hover:border-teal-400'"
      @dragenter.prevent="onDragEnter"
      @dragover.prevent
      @dragleave.prevent="onDragLeave"
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

    <!-- Preview -->
    <div
      v-if="previews.length"
      class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3"
    >
      <div
        v-for="(src, index) in previews"
        :key="index"
        class="relative group"
      >
        <img
          :src="src"
          class="w-full h-32 object-cover rounded-lg border"
        />

        <!-- remove -->
        <button
          class="absolute top-1 right-1 bg-black/60 text-white text-xs rounded-full w-6 h-6
                 opacity-0 group-hover:opacity-100 transition"
          @click.stop="removeFile(index)"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const dragCounter = ref(0)

const files = ref<File[]>([])
const previews = ref<string[]>([])

const MAX_SIZE = 10 * 1024 * 1024
const accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png'

const openFileDialog = () => {
  fileInput.value?.click()
}

const validateFiles = (newFiles: File[]) =>
  newFiles.filter(file => file.size <= MAX_SIZE)

const addFiles = (newFiles: File[]) => {
  newFiles.forEach(file => {
    files.value.push(file)

    if (file.type.startsWith('image/')) {
      previews.value.push(URL.createObjectURL(file))
    }
  })
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files) return

  addFiles(validateFiles(Array.from(target.files)))
  target.value = ''
}

const onDragEnter = () => {
  dragCounter.value++
  isDragging.value = true
}

const onDragLeave = () => {
  dragCounter.value--
  if (dragCounter.value === 0) {
    isDragging.value = false
  }
}

const onDrop = (event: DragEvent) => {
  dragCounter.value = 0
  isDragging.value = false

  if (!event.dataTransfer?.files) return
  addFiles(validateFiles(Array.from(event.dataTransfer.files)))
}

const removeFile = (index: number) => {
  URL.revokeObjectURL(previews.value[index])
  previews.value.splice(index, 1)
  files.value.splice(index, 1)
}
</script>
