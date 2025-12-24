<template>
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap 
    text-sm font-medium transition-colors focus-visible:outline-none 
    focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
    disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 rounded-xl 
    h-10 px-4 text-stone-600 hover:text-stone-800 hover:bg-stone-100 cursor-pointer disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
