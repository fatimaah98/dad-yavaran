<template>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm 
    font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 
    [&_svg]:shrink-0 border bg-background shadow-sm hover:text-accent-foreground h-9 px-4 py-2 rounded-xl 
    border-stone-200 hover:bg-stone-50 cursor-pointer">
        <slot />
    </button>
</template>