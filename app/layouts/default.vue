<template>
    <div class="min-h-screen bg-[#FAFAF8]">
        <header class="bg-white border-b border-stone-100 sticky top-0 z-50">
            <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <nuxt-link to="/profile" class="flex items-center gap-3 group">
                    <span class="w-10 h-10 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex 
                    items-center justify-center shadow-lg shadow-teal-500/20 
                    group-hover:shadow-teal-500/30 transition-shadow">
                        <IconsLegal />
                    </span>
                    <span class="">
                        دادیاوران
                    </span>
                </nuxt-link>
                <nav class="hidden md:flex items-center gap-2">
                    <nuxt-link to="/profile">
                        <UiSecondButton>
                            <IconsUser />
                            <span>پروفایل کاربری</span>
                        </UiSecondButton>
                    </nuxt-link>
                    <nuxt-link to="/request/case-type">
                        <UiButton>
                            <IconsPlus />
                            <span>ثبت درخواست جدید</span>
                        </UiButton>
                    </nuxt-link>
                </nav>
            </div>
        </header>
        <slot />
    </div>
</template>