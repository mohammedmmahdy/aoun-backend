<script setup>
import { computed } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import LayoutDefault from '@/layouts/default.vue';

const props = defineProps({
    admin: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const flashSuccess = computed(() => page.props.flash?.success);
const initials = computed(() => props.admin.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('') || 'A');
</script>

<template>
    <layout-default>
        <Head title="Profile" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Account</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Profile</h1>
        </template>

        <section class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-8">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div class="flex items-start gap-4">
                    <div class="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-[#1d6a58] text-xl font-black uppercase text-[#fff8e8]">
                        {{ initials }}
                    </div>
                    <div class="min-w-0">
                        <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Admin profile</p>
                        <h2 class="mt-2 break-words text-3xl font-black tracking-tight text-[#17201c]">{{ admin.name }}</h2>
                        <p class="mt-2 break-words text-sm font-semibold text-[#728078]">{{ admin.email }}</p>
                    </div>
                </div>

                <Link
                    href="/profile/edit"
                    class="flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#12352d] px-5 text-sm font-black text-[#fff8e8] shadow-[0_14px_36px_rgba(18,53,45,.18)] transition hover:bg-[#1d6a58]"
                >
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z M14 8l2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Edit profile
                </Link>
            </div>

            <p v-if="flashSuccess" class="mt-6 rounded-2xl border border-[#bed9d0] bg-[#eef4ef] px-4 py-3 text-sm font-black text-[#1d6a58]">
                {{ flashSuccess }}
            </p>

            <div class="mt-8 grid gap-4 md:grid-cols-2">
                <article class="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-[#66756d]">Name</p>
                    <p class="mt-2 break-words text-base font-black text-[#27332f]">{{ admin.name }}</p>
                </article>

                <article class="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-[#66756d]">Email address</p>
                    <p class="mt-2 break-words text-base font-black text-[#27332f]">{{ admin.email }}</p>
                </article>

                <article class="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-[#66756d]">Joined</p>
                    <p class="mt-2 text-base font-black text-[#27332f]">{{ admin.created_at || 'Not available' }}</p>
                </article>

                <article class="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-[#66756d]">Last updated</p>
                    <p class="mt-2 text-base font-black text-[#27332f]">{{ admin.updated_at || 'Not available' }}</p>
                </article>
            </div>
        </section>
    </layout-default>
</template>
