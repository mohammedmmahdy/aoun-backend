<script setup>
import { computed } from 'vue';
import { Head, useForm, usePage } from '@inertiajs/vue3';
import LayoutDefault from '@/layouts/default.vue';

const props = defineProps({
    admin: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const flashSuccess = computed(() => page.props.flash?.success);

const form = useForm({
    name: props.admin.name,
    email: props.admin.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.put('/profile', {
        preserveScroll: true,
        onSuccess: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <layout-default>
        <Head title="Edit Profile" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Account</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Edit Profile</h1>
        </template>

        <section class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-8">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Account details</p>
                    <h2 class="mt-2 text-3xl font-black tracking-tight text-[#17201c]">{{ admin.name }}</h2>
                    <p class="mt-2 text-sm font-semibold text-[#728078]">{{ admin.email }}</p>
                </div>

                <div class="rounded-2xl border border-[#eadfce] bg-white px-4 py-3">
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-[#66756d]">Last updated</p>
                    <p class="mt-1 text-sm font-black text-[#27332f]">{{ admin.updated_at || 'Not available' }}</p>
                </div>
            </div>

            <p v-if="flashSuccess" class="mt-6 rounded-2xl border border-[#bed9d0] bg-[#eef4ef] px-4 py-3 text-sm font-black text-[#1d6a58]">
                {{ flashSuccess }}
            </p>

            <form class="mt-8 grid gap-5 lg:max-w-2xl" @submit.prevent="submit">
                <div>
                    <label for="profile-name" class="mb-2 block text-sm font-bold text-[#27332f]">Name</label>
                    <input
                        id="profile-name"
                        v-model="form.name"
                        type="text"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        required
                    >
                    <p v-if="form.errors.name" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.name }}</p>
                </div>

                <div>
                    <label for="profile-email" class="mb-2 block text-sm font-bold text-[#27332f]">Email address</label>
                    <input
                        id="profile-email"
                        v-model="form.email"
                        type="email"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        required
                    >
                    <p v-if="form.errors.email" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.email }}</p>
                </div>

                <div class="rounded-2xl border border-[#eadfce] bg-white p-4">
                    <p class="text-sm font-black text-[#27332f]">Password</p>
                    <p class="mt-1 text-sm font-semibold leading-6 text-[#728078]">Leave both fields blank to keep your current password.</p>

                    <div class="mt-4 grid gap-5 sm:grid-cols-2">
                        <div>
                            <label for="profile-password" class="mb-2 block text-sm font-bold text-[#27332f]">New password</label>
                            <input
                                id="profile-password"
                                v-model="form.password"
                                type="password"
                                class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                                placeholder="At least 8 characters"
                            >
                            <p v-if="form.errors.password" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.password }}</p>
                        </div>

                        <div>
                            <label for="profile-password-confirmation" class="mb-2 block text-sm font-bold text-[#27332f]">Confirm password</label>
                            <input
                                id="profile-password-confirmation"
                                v-model="form.password_confirmation"
                                type="password"
                                class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                                placeholder="Repeat password"
                            >
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                        type="submit"
                        class="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#12352d] px-6 text-base font-black text-[#fff8e8] shadow-[0_16px_40px_rgba(18,53,45,.22)] transition hover:bg-[#1d6a58] disabled:cursor-not-allowed disabled:opacity-70"
                        :disabled="form.processing"
                    >
                        <svg v-if="form.processing" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle class="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" />
                            <path class="opacity-90" d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                        </svg>
                        Save profile
                    </button>
                    <a href="/profile" class="flex min-h-14 items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-6 text-base font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]">
                        Cancel
                    </a>
                </div>
            </form>
        </section>
    </layout-default>
</template>
