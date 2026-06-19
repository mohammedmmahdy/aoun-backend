<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutDefault from '@/layouts/default.vue';

const metrics = [
    {
        label: 'Total visits',
        value: '48.2K',
        change: '+12.4%',
        tone: 'text-[#1d6a58]',
        icon: 'M4 19V5 M4 19h16 M8 16v-5 M12 16V8 M16 16v-7',
    },
    {
        label: 'Active admins',
        value: '18',
        change: '+3 today',
        tone: 'text-[#bd7b2f]',
        icon: 'M16 11a4 4 0 1 0-8 0 M4.5 20a7.5 7.5 0 0 1 15 0',
    },
    {
        label: 'Open tasks',
        value: '27',
        change: '8 urgent',
        tone: 'text-[#b64235]',
        icon: 'M9 11l2 2 4-5 M5 4h14v16H5z',
    },
    {
        label: 'System score',
        value: '96%',
        change: 'Stable',
        tone: 'text-[#1d6a58]',
        icon: 'M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z',
    },
];

const activityItems = [
    { title: 'New admin signed in', meta: '2 minutes ago', color: 'bg-[#1d6a58]' },
    { title: 'Content queue reviewed', meta: '28 minutes ago', color: 'bg-[#eebc55]' },
    { title: 'Security scan completed', meta: '1 hour ago', color: 'bg-[#12352d]' },
    { title: 'Monthly report exported', meta: 'Yesterday', color: 'bg-[#bd7b2f]' },
];

const quickActions = [
    { label: 'Create report', icon: 'M12 5v14 M5 12h14' },
    { label: 'Review users', icon: 'M16 11a4 4 0 1 0-8 0 M4.5 20a7.5 7.5 0 0 1 15 0' },
    { label: 'Audit logs', icon: 'M5 5h14 M5 12h14 M5 19h14' },
];

const queueItems = [
    { label: 'Content approvals', value: '14', progress: '72%' },
    { label: 'Support tickets', value: '9', progress: '48%' },
    { label: 'Access requests', value: '4', progress: '32%' },
];
</script>

<template>
    <layout-default>
        <Head title="Admin Dashboard" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Overview</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Admin Dashboard</h1>
        </template>

        <section class="overflow-hidden rounded-[28px] bg-[#12352d] text-[#fff8e8] shadow-[0_24px_80px_rgba(42,35,24,.14)]">
            <div class="relative px-5 py-7 sm:px-8 lg:px-10">
                <div class="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(244,240,232,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,.14)_1px,transparent_1px)] [background-size:44px_44px]"></div>
                <div class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div class="max-w-2xl">
                        <p class="w-fit rounded-full border border-[#eebc55]/35 px-4 py-2 text-sm font-semibold text-[#f8e5b9]">
                            Secure workspace
                        </p>
                        <h2 class="mt-5 text-4xl font-black leading-tight tracking-tight text-[#fff8e8] sm:text-5xl">
                            Welcome back to mission control.
                        </h2>
                        <p class="mt-4 max-w-xl text-base leading-7 text-[#d9ebe5]">
                            Review activity, manage approvals, and keep the platform running from one focused admin dashboard.
                        </p>
                    </div>

                    <div class="grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur">
                        <div>
                            <p class="text-2xl font-black">24</p>
                            <p class="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#bed9d0]">Tasks</p>
                        </div>
                        <div>
                            <p class="text-2xl font-black">8</p>
                            <p class="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#bed9d0]">Alerts</p>
                        </div>
                        <div>
                            <p class="text-2xl font-black">96%</p>
                            <p class="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#bed9d0]">Health</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article
                v-for="metric in metrics"
                :key="metric.label"
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <p class="text-sm font-bold text-[#66756d]">{{ metric.label }}</p>
                        <p class="mt-3 text-3xl font-black tracking-tight text-[#17201c]">{{ metric.value }}</p>
                    </div>
                    <div class="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef4ef] text-[#1d6a58]">
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path :d="metric.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <p class="mt-5 text-sm font-black" :class="metric.tone">{{ metric.change }}</p>
            </article>
        </section>

        <section class="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.55fr)]">
            <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Performance</p>
                        <h3 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Weekly activity</h3>
                    </div>
                    <button class="min-h-11 rounded-2xl bg-[#12352d] px-5 text-sm font-black text-[#fff8e8] shadow-[0_12px_32px_rgba(18,53,45,.22)] transition hover:bg-[#1d6a58]" type="button">
                        Export
                    </button>
                </div>

                <div class="mt-8 flex h-64 items-end gap-3 rounded-2xl border border-[#eadfce] bg-white p-4">
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[42%] rounded-t-2xl bg-[#bed9d0]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Mon</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[58%] rounded-t-2xl bg-[#1d6a58]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Tue</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[48%] rounded-t-2xl bg-[#bed9d0]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Wed</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[76%] rounded-t-2xl bg-[#eebc55]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Thu</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[64%] rounded-t-2xl bg-[#1d6a58]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Fri</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[82%] rounded-t-2xl bg-[#12352d]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Sat</p>
                    </div>
                    <div class="flex h-full flex-1 flex-col justify-end gap-2">
                        <div class="h-[55%] rounded-t-2xl bg-[#bed9d0]"></div>
                        <p class="text-center text-xs font-black text-[#66756d]">Sun</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Activity</p>
                    <h3 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Recent updates</h3>

                    <div class="mt-6 space-y-4">
                        <div v-for="item in activityItems" :key="item.title" class="flex gap-3">
                            <div class="mt-1 h-3 w-3 flex-none rounded-full" :class="item.color"></div>
                            <div>
                                <p class="text-sm font-black text-[#27332f]">{{ item.title }}</p>
                                <p class="mt-1 text-sm font-semibold text-[#728078]">{{ item.meta }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Actions</p>
                    <div class="mt-5 grid gap-3">
                        <button
                            v-for="action in quickActions"
                            :key="action.label"
                            type="button"
                            class="flex min-h-12 items-center gap-3 rounded-2xl border border-[#d6ccbd] bg-white px-4 text-sm font-black text-[#27332f] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                        >
                            <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path :d="action.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {{ action.label }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-6 rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Queue</p>
                    <h3 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Needs attention</h3>
                </div>
                <a href="#" class="text-sm font-black text-[#1d6a58] transition hover:text-[#bd7b2f]">View all</a>
            </div>

            <div class="mt-6 grid gap-4 lg:grid-cols-3">
                <article v-for="item in queueItems" :key="item.label" class="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <div class="flex items-center justify-between gap-4">
                        <p class="text-sm font-black text-[#27332f]">{{ item.label }}</p>
                        <p class="text-2xl font-black text-[#17201c]">{{ item.value }}</p>
                    </div>
                    <div class="mt-5 h-2 rounded-full bg-[#eef4ef]">
                        <div class="h-2 rounded-full bg-[#1d6a58]" :style="{ width: item.progress }"></div>
                    </div>
                </article>
            </div>
        </section>
    </layout-default>
</template>
