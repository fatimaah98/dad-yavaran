<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
  useHead({
    titleTemplate: (title) => {
      return title ? `دادیاوران - ${title}` : `دادیاوران`
    }
  })
</script>