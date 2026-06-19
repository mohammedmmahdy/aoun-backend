<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import LayoutDefault from '@/layouts/default.vue';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.put(`/users/${props.user.id}`, {
        preserveScroll: true,
        onSuccess: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <layout-default>
        <Head :title="`Edit ${user.name}`" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Directory</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Edit User</h1>
        </template>

        <section class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-8">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">User profile</p>
                    <h2 class="mt-2 text-3xl font-black tracking-tight text-[#17201c]">{{ user.name }}</h2>
                </div>
                <a href="/users" class="text-sm font-black text-[#1d6a58] transition hover:text-[#bd7b2f]">Back to users</a>
            </div>

            <form class="mt-8 grid gap-5 lg:max-w-2xl" @submit.prevent="submit">
                <div>
                    <label for="name" class="mb-2 block text-sm font-bold text-[#27332f]">Name</label>
                    <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        required
                    >
                    <p v-if="form.errors.name" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.name }}</p>
                </div>

                <div>
                    <label for="email" class="mb-2 block text-sm font-bold text-[#27332f]">Email address</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        required
                    >
                    <p v-if="form.errors.email" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.email }}</p>
                </div>

                <div class="rounded-2xl border border-[#eadfce] bg-white p-4">
                    <p class="text-sm font-black text-[#27332f]">Password</p>
                    <p class="mt-1 text-sm font-semibold leading-6 text-[#728078]">Leave both fields blank to keep the current password.</p>

                    <div class="mt-4 grid gap-5 sm:grid-cols-2">
                        <div>
                            <label for="password" class="mb-2 block text-sm font-bold text-[#27332f]">New password</label>
                            <input
                                id="password"
                                v-model="form.password"
                                type="password"
                                class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                                placeholder="At least 8 characters"
                            >
                            <p v-if="form.errors.password" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.password }}</p>
                        </div>

                        <div>
                            <label for="password_confirmation" class="mb-2 block text-sm font-bold text-[#27332f]">Confirm password</label>
                            <input
                                id="password_confirmation"
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
                        Update user
                    </button>
                    <a href="/users" class="flex min-h-14 items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-6 text-base font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]">
                        Cancel
                    </a>
                </div>
            </form>
        </section>
    </layout-default>
</template>
