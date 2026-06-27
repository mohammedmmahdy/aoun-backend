<script setup>
import { computed, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';

const showPassword = ref(false);

const form = useForm({
    email: '',
    password: '',
    remember: true,
});

const passwordInputType = computed(() => (showPassword.value ? 'text' : 'password'));

const submit = () => {
    form.post('/login', {
        preserveScroll: true,
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Admin Login" />

    <main class="min-h-screen bg-[#f4f0e8] text-[#17201c]">
        <section class="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_480px]">
            <div class="relative hidden overflow-hidden bg-[#12352d] lg:block">
                <div class="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(244,240,232,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,.12)_1px,transparent_1px)] [background-size:44px_44px]"></div>
                <div class="absolute left-12 top-12 flex items-center gap-3 text-[#f7f1e4]">
                    <div class="grid h-11 w-11 place-items-center rounded-lg bg-[#eebc55] text-lg font-black text-[#10251f] shadow-[0_18px_45px_rgba(0,0,0,.22)]">
                        A
                    </div>
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-[0.26em] text-[#d7f0e7]">Admin</p>
                        <p class="text-xl font-black">Control Desk</p>
                    </div>
                </div>

                <div class="absolute inset-x-12 bottom-12">
                    <div class="max-w-xl">
                        <p class="mb-5 w-fit rounded-full border border-[#eebc55]/35 px-4 py-2 text-sm font-semibold text-[#f8e5b9]">
                            Secure workspace
                        </p>
                        <h1 class="text-6xl font-black leading-[0.95] text-[#fff8e8]">
                            Welcome back to mission control.
                        </h1>
                        <p class="mt-6 max-w-lg text-lg leading-8 text-[#d9ebe5]">
                            Review activity, manage content, and keep the platform moving from one focused dashboard.
                        </p>
                    </div>

                    <div class="mt-12 grid grid-cols-3 gap-3">
                        <div class="border-l border-[#eebc55]/45 pl-4">
                            <p class="text-3xl font-black text-[#fff8e8]">24/7</p>
                            <p class="mt-1 text-sm text-[#bed9d0]">Access</p>
                        </div>
                        <div class="border-l border-[#eebc55]/45 pl-4">
                            <p class="text-3xl font-black text-[#fff8e8]">2FA</p>
                            <p class="mt-1 text-sm text-[#bed9d0]">Ready</p>
                        </div>
                        <div class="border-l border-[#eebc55]/45 pl-4">
                            <p class="text-3xl font-black text-[#fff8e8]">Fast</p>
                            <p class="mt-1 text-sm text-[#bed9d0]">Workflow</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
                <div class="w-full max-w-md">
                    <div class="mb-10 flex items-center gap-3 lg:hidden">
                        <div class="grid h-11 w-11 place-items-center rounded-lg bg-[#12352d] text-lg font-black text-[#fff8e8]">
                            A
                        </div>
                        <div>
                            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-[#5a6c62]">Admin</p>
                            <p class="text-xl font-black text-[#17201c]">Control Desk</p>
                        </div>
                    </div>

                    <div class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-6 shadow-[0_24px_80px_rgba(42,35,24,.14)] sm:p-8">
                        <div class="mb-8">
                            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Sign in</p>
                            <h2 class="mt-3 text-3xl font-black tracking-tight text-[#17201c]">Admin panel</h2>
                            <p class="mt-3 text-sm leading-6 text-[#66756d]">
                                Use your administrator credentials to continue.
                            </p>
                        </div>

                        <form class="space-y-5" @submit.prevent="submit">
                            <div>
                                <label for="email" class="mb-2 block text-sm font-bold text-[#27332f]">Email address</label>
                                <div class="group flex items-center rounded-2xl border border-[#d6ccbd] bg-white px-4 shadow-sm transition focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10">
                                    <svg class="h-5 w-5 flex-none text-[#7b887f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M4 6.5h16v11H4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                                        <path d="m5 8 7 5 7-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        autocomplete="email"
                                        class="min-h-14 w-full border-0 bg-transparent px-3 text-base font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                                        placeholder="admin@example.com"
                                        required
                                    >
                                </div>
                                <p v-if="form.errors.email" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.email }}</p>
                            </div>

                            <div>
                                <div class="mb-2 flex items-center justify-between gap-3">
                                    <label for="password" class="block text-sm font-bold text-[#27332f]">Password</label>
                                    <a href="#" class="text-sm font-bold text-[#1d6a58] transition hover:text-[#bd7b2f]">Forgot?</a>
                                </div>
                                <div class="group flex items-center rounded-2xl border border-[#d6ccbd] bg-white px-4 shadow-sm transition focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10">
                                    <svg class="h-5 w-5 flex-none text-[#7b887f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M7 10V8a5 5 0 0 1 10 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                        <path d="M6 10h12v9H6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                                    </svg>
                                    <input
                                        id="password"
                                        v-model="form.password"
                                        :type="passwordInputType"
                                        autocomplete="current-password"
                                        class="min-h-14 w-full border-0 bg-transparent px-3 text-base font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                                        placeholder="Enter password"
                                        required
                                    >
                                    <button
                                        type="button"
                                        class="grid h-10 w-10 flex-none place-items-center rounded-xl text-[#66756d] transition hover:bg-[#eef4ef] hover:text-[#1d6a58]"
                                        :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                        :title="showPassword ? 'Hide password' : 'Show password'"
                                        @click="showPassword = !showPassword"
                                    >
                                        <svg v-if="showPassword" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                            <path d="M8.1 5.7A10.4 10.4 0 0 1 12 5c5 0 8.4 4.2 9.5 6.1a1.8 1.8 0 0 1 0 1.8 16 16 0 0 1-2.4 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.1 18.8A10.4 10.4 0 0 1 12 19c-5 0-8.4-4.2-9.5-6.1a1.8 1.8 0 0 1 0-1.8 16.4 16.4 0 0 1 4-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M2.5 12.9a1.8 1.8 0 0 1 0-1.8C3.6 9.2 7 5 12 5s8.4 4.2 9.5 6.1a1.8 1.8 0 0 1 0 1.8C20.4 14.8 17 19 12 19s-8.4-4.2-9.5-6.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                                            <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" stroke-width="1.8" />
                                        </svg>
                                    </button>
                                </div>
                                <p v-if="form.errors.password" class="mt-2 text-sm font-semibold text-[#b64235]">{{ form.errors.password }}</p>
                            </div>

                            <div class="flex items-center justify-between gap-4">
                                <label class="flex cursor-pointer items-center gap-3 text-sm font-semibold text-[#526158]">
                                    <input
                                        v-model="form.remember"
                                        type="checkbox"
                                        class="h-5 w-5 rounded border-[#c8bdad] text-[#1d6a58] focus:ring-[#1d6a58]"
                                    >
                                    Remember this device
                                </label>
                            </div>

                            <button
                                type="submit"
                                class="flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#12352d] px-5 text-base font-black text-[#fff8e8] shadow-[0_16px_40px_rgba(18,53,45,.28)] transition hover:bg-[#1d6a58] focus:outline-none focus:ring-4 focus:ring-[#1d6a58]/25 disabled:cursor-not-allowed disabled:opacity-70"
                                :disabled="form.processing"
                            >
                                <svg v-if="form.processing" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <circle class="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" />
                                    <path class="opacity-90" d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                                </svg>
                                <span>{{ form.processing ? 'Checking access' : 'Enter dashboard' }}</span>
                            </button>
                        </form>
                    </div>

                    <p class="mt-6 text-center text-sm font-semibold text-[#728078]">
                        Protected administrator access
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>
