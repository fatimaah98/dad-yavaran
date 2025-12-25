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
                        <component :is="isProfileRoute ? primaryButton : secondButton">
                            <IconsUser />
                            <span>پروفایل کاربری</span>
                        </component>
                    </nuxt-link>
                    <nuxt-link to="/request/case-type">
                        <component :is="isProfileRoute ? secondButton : primaryButton">
                            <IconsPlus />
                            <span>ثبت درخواست جدید</span>
                        </component>
                    </nuxt-link>
                </nav>
                <secondButton @click="isOpenMobileNav = !isOpenMobileNav">
                    <Bar3 class="size-5" v-if="!isOpenMobileNav" />
                    <XMarkIcon class="size-5" v-else />
                </secondButton>
            </div>
            <div class="md:hidden border-t border-stone-100 bg-white" v-motion-slide-top v-if="isOpenMobileNav">
                <nav class="px-4 py-3 space-y-1">
                    <nuxt-link to="/profile">
                        <button class="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-colors text-stone-600"
                        :class="{'bg-teal-50 text-teal-700': route.path == '/profile'}"
                        >
                            <UserIcon class="w-5" /> پروفایل کاربری
                        </button>
                    </nuxt-link>
                    <nuxt-link to="/request/case-type">
                        <button class="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-colors text-stone-600"
                        :class="{'bg-teal-50 text-teal-700': route.path == '/request/case-type'}"
                        >
                            <PlusIcon class="w-5" /> ثبت درخواست
                        </button>
                    </nuxt-link>
                </nav>
            </div>
        </header>
        <slot />
    </div>
</template>
<script setup>
    import Bar3 from '~/components/ui/bar-3.vue';
    import primaryButton from '~/components/ui/button.vue';
    import secondButton from '~/components/ui/second-button.vue';
    import { UserIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline';
    const route = useRoute()
    const isProfileRoute = computed(() => route.path == '/profile' ? true : false);
    const isOpenMobileNav = ref(false)

    watch(() => route.path, () => isOpenMobileNav.value = false)
</script>