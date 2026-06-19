<script setup>
import { computed } from 'vue';

const navItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        match: '/dashboard',
        icon: 'M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z',
    },
    {
        label: 'Content',
        href: '#',
        match: '#',
        icon: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5',
    },
    {
        label: 'Users',
        href: '/users',
        match: '/users',
        icon: 'M16 11a4 4 0 1 0-8 0 M4.5 20a7.5 7.5 0 0 1 15 0',
    },
    {
        label: 'Reports',
        href: '#',
        match: '#',
        icon: 'M5 19V5 M5 19h14 M9 16v-5 M13 16V8 M17 16v-7',
    },
    {
        label: 'Settings',
        href: '#',
        match: '#',
        icon: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z M19 12h2 M3 12h2 M12 3v2 M12 19v2 M17 5l-1.4 1.4 M8.4 17.6 7 19 M19 19l-1.4-1.4 M6.4 6.4 5 5',
    },
];

const currentPath = computed(() => window.location.pathname);

const isActive = (item) => item.match !== '#' && currentPath.value.startsWith(item.match);
</script>

<template>
    <div class="min-h-screen bg-[#f4f0e8] text-[#17201c]">
        <div class="flex min-h-screen">
            <aside class="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-[#d8cfbf] bg-[#12352d] text-[#fff8e8] lg:flex lg:flex-col">
                <div class="flex h-24 items-center gap-3 px-6">
                    <div class="grid h-11 w-11 place-items-center rounded-lg bg-[#eebc55] text-lg font-black text-[#10251f] shadow-[0_18px_45px_rgba(0,0,0,.22)]">
                        A
                    </div>
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-[0.26em] text-[#d7f0e7]">Admin</p>
                        <p class="text-xl font-black">Control Desk</p>
                    </div>
                </div>

                <nav class="flex-1 space-y-2 px-4">
                    <a
                        v-for="item in navItems"
                        :key="item.label"
                        :href="item.href"
                        class="group flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-bold transition"
                        :class="isActive(item) ? 'bg-[#fff8e8] text-[#12352d] shadow-[0_14px_36px_rgba(0,0,0,.18)]' : 'text-[#d9ebe5] hover:bg-white/10 hover:text-white'"
                    >
                        <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path :d="item.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{{ item.label }}</span>
                    </a>
                </nav>

                <div class="m-4 rounded-2xl border border-[#eebc55]/30 bg-white/8 p-4">
                    <p class="text-sm font-black text-[#fff8e8]">Workspace health</p>
                    <div class="mt-4 h-2 rounded-full bg-white/15">
                        <div class="h-2 w-4/5 rounded-full bg-[#eebc55]"></div>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-[#bed9d0]">Systems are stable and ready for review.</p>
                </div>
            </aside>

            <div class="flex min-h-screen flex-1 flex-col lg:pl-72">
                <header class="sticky top-0 z-20 border-b border-[#ded5c5] bg-[#f4f0e8]/90 backdrop-blur">
                    <div class="flex min-h-20 items-center justify-between gap-4 px-5 sm:px-8">
                        <div class="flex items-center gap-3 lg:hidden">
                            <div class="grid h-10 w-10 place-items-center rounded-lg bg-[#12352d] text-base font-black text-[#fff8e8]">
                                A
                            </div>
                            <div>
                                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#5a6c62]">Admin</p>
                                <p class="text-lg font-black text-[#17201c]">Control Desk</p>
                            </div>
                        </div>

                        <div class="hidden lg:block">
                            <slot name="header">
                                <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Overview</p>
                                <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Dashboard</h1>
                            </slot>
                        </div>

                        <div class="ml-auto flex items-center gap-3">
                            <button
                                type="button"
                                class="grid h-11 w-11 place-items-center rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] text-[#526158] shadow-sm transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Search"
                                title="Search"
                            >
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="m21 21-4.3-4.3 M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                class="grid h-11 w-11 place-items-center rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] text-[#526158] shadow-sm transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Notifications"
                                title="Notifications"
                            >
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z M10 21h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="flex h-11 items-center gap-3 rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] px-3 shadow-sm">
                                <div class="grid h-8 w-8 place-items-center rounded-xl bg-[#1d6a58] text-sm font-black text-[#fff8e8]">
                                    ME
                                </div>
                                <span class="hidden text-sm font-black text-[#27332f] sm:inline">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main class="flex-1 px-5 py-6 sm:px-8 sm:py-8">
                    <div class="mx-auto w-full max-w-7xl">
                        <div class="mb-6 lg:hidden">
                            <slot name="header">
                                <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Overview</p>
                                <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Dashboard</h1>
                            </slot>
                        </div>

                        <slot />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
