<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    links: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div v-if="links.length > 3" class="mt-6 flex flex-wrap gap-2">
        <Link
            v-for="link in links"
            :key="link.label"
            :href="link.url || '#'"
            class="flex min-h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-black transition"
            :class="[
                link.active
                    ? 'border-[#12352d] bg-[#12352d] text-[#fff8e8]'
                    : 'border-[#d6ccbd] bg-white text-[#526158] hover:border-[#1d6a58] hover:text-[#1d6a58]',
                !link.url ? 'pointer-events-none opacity-45' : '',
            ]"
            v-html="link.label"
        />
    </div>
</template>
