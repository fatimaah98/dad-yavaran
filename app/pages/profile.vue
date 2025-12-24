<template >
    <main>
        <div class="max-w-5xl mx-auto px-4 py-8 md:py-12">
            <div class="space-y-6">
                <PartialsTabable @isProfile="(data) => isEnableUserForm = data" />
                <ProfileUserInfo v-if="isEnableUserForm" />
                <ProfileRequests v-else />
            </div>
        </div>
    </main>
</template>
<script setup>
    const isEnableUserForm = ref(true)
</script>