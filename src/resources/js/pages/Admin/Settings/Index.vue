<script setup>
import { computed, reactive, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import LayoutDefault from '@/layouts/default.vue';
import { useDashboardPreferences } from '@/composables/useDashboardPreferences';

const { defaults, preferences, resetDashboardPreferences, saveDashboardPreferences } = useDashboardPreferences();

const draft = reactive({ ...preferences });
const saved = ref(false);

const previewText = computed(() => {
    const mode = draft.theme === 'system' ? 'system theme' : `${draft.theme} theme`;
    return `${mode}, ${draft.density} density, ${draft.refreshInterval}s refresh`;
});

const savePreferences = () => {
    saveDashboardPreferences(draft);
    saved.value = true;
};

const resetPreferences = () => {
    Object.assign(draft, defaults);
    resetDashboardPreferences();
    saved.value = true;
};
</script>

<template>
    <layout-default>
        <Head title="Dashboard Settings" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Preferences</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Dashboard Settings</h1>
        </template>

        <section class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div class="space-y-6">
                <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Appearance</p>
                    <h2 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Theme and layout</h2>

                    <div class="mt-6 grid gap-5">
                        <div>
                            <p class="mb-3 text-sm font-bold text-[#27332f]">Theme</p>
                            <div class="grid gap-2 sm:grid-cols-3">
                                <button
                                    v-for="option in ['system', 'light', 'dark']"
                                    :key="option"
                                    type="button"
                                    class="min-h-12 rounded-2xl border px-4 text-sm font-black capitalize transition"
                                    :class="draft.theme === option ? 'border-[#12352d] bg-[#12352d] text-[#fff8e8]' : 'border-[#d6ccbd] bg-white text-[#526158] hover:border-[#1d6a58] hover:text-[#1d6a58]'"
                                    @click="draft.theme = option"
                                >
                                    {{ option }}
                                </button>
                            </div>
                        </div>

                        <div>
                            <p class="mb-3 text-sm font-bold text-[#27332f]">Dashboard density</p>
                            <div class="grid gap-2 sm:grid-cols-2">
                                <button
                                    v-for="option in ['comfortable', 'compact']"
                                    :key="option"
                                    type="button"
                                    class="min-h-12 rounded-2xl border px-4 text-sm font-black capitalize transition"
                                    :class="draft.density === option ? 'border-[#12352d] bg-[#12352d] text-[#fff8e8]' : 'border-[#d6ccbd] bg-white text-[#526158] hover:border-[#1d6a58] hover:text-[#1d6a58]'"
                                    @click="draft.density = option"
                                >
                                    {{ option }}
                                </button>
                            </div>
                        </div>

                        <label class="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-[#eadfce] bg-white px-4">
                            <span class="text-sm font-black text-[#27332f]">Compact sidebar</span>
                            <input v-model="draft.compactSidebar" type="checkbox" class="h-5 w-5 accent-[#1d6a58]">
                        </label>
                    </div>
                </div>

                <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Workspace</p>
                    <h2 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Dashboard behavior</h2>

                    <div class="mt-6 grid gap-5">
                        <div>
                            <label for="landing-page" class="mb-2 block text-sm font-bold text-[#27332f]">Default landing page</label>
                            <select
                                id="landing-page"
                                v-model="draft.landingPage"
                                class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                            >
                                <option value="dashboard">Dashboard overview</option>
                                <option value="users">User directory</option>
                                <option value="activity">Recent activity</option>
                            </select>
                        </div>

                        <label class="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-[#eadfce] bg-white px-4">
                            <span class="text-sm font-black text-[#27332f]">Show workspace health card</span>
                            <input v-model="draft.showHealth" type="checkbox" class="h-5 w-5 accent-[#1d6a58]">
                        </label>

                        <label class="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-[#eadfce] bg-white px-4">
                            <span class="text-sm font-black text-[#27332f]">Auto refresh dashboard data</span>
                            <input v-model="draft.autoRefresh" type="checkbox" class="h-5 w-5 accent-[#1d6a58]">
                        </label>

                        <div>
                            <label for="refresh-interval" class="mb-2 block text-sm font-bold text-[#27332f]">Refresh interval</label>
                            <input
                                id="refresh-interval"
                                v-model="draft.refreshInterval"
                                type="range"
                                min="10"
                                max="120"
                                step="10"
                                class="w-full accent-[#1d6a58]"
                                :disabled="!draft.autoRefresh"
                            >
                            <p class="mt-2 text-sm font-black text-[#526158]">{{ draft.refreshInterval }} seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            <aside class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
                <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Preview</p>
                <h2 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">Current preferences</h2>

                <div class="mt-6 rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p class="text-sm font-black text-[#27332f]">{{ previewText }}</p>
                    <p class="mt-4 text-sm font-semibold leading-6 text-[#728078]">
                        Landing on {{ draft.landingPage }}, health card {{ draft.showHealth ? 'shown' : 'hidden' }}, sidebar {{ draft.compactSidebar ? 'compact' : 'standard' }}.
                    </p>
                </div>

                <p v-if="saved" class="mt-5 rounded-2xl border border-[#bed9d0] bg-[#eef4ef] px-4 py-3 text-sm font-black text-[#1d6a58]">
                    Preferences saved.
                </p>

                <button
                    type="button"
                    class="mt-5 flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#12352d] px-5 text-sm font-black text-[#fff8e8] shadow-[0_14px_36px_rgba(18,53,45,.18)] transition hover:bg-[#1d6a58]"
                    @click="savePreferences"
                >
                    Save preferences
                </button>

                <button
                    type="button"
                    class="mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-5 text-sm font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    @click="resetPreferences"
                >
                    Reset defaults
                </button>
            </aside>
        </section>
    </layout-default>
</template>
