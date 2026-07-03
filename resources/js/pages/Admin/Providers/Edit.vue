<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import LayoutDefault from "@/layouts/default.vue";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import ProviderController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ProviderController";

const props = defineProps({
    provider: {
        type: Object,
        required: true,
    },
    types: {
        type: Array,
    },
});

const form = useForm({
    name: props.provider.name,
    email: props.provider.email,
    type: props.provider.type,
    phone: props.provider.phone || "",
    address: props.provider.address || "",
});

const submit = () => {
    form.put(`/providers/${props.provider.id}`, {
        preserveScroll: true,
    });
};
</script>

<template>
    <layout-default>
        <Head :title="`Edit ${provider.name}`" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                Edit Provider
            </h1>
        </template>

        <section
            class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-8"
        >
            <div
                class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <p
                        class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                    >
                        Provider profile
                    </p>
                    <h2
                        class="mt-2 text-3xl font-black tracking-tight text-[#17201c]"
                    >
                        {{ provider.name }}
                    </h2>
                </div>
                <Link
                    :href="ProviderController.index()"
                    class="text-sm font-black text-[#1d6a58] transition hover:text-[#bd7b2f]"
                    >Back to providers</Link
                >
            </div>

            <form class="mt-8 grid gap-5 lg:max-w-2xl" @submit.prevent="submit">
                <div>
                    <label
                        for="name"
                        class="mb-2 block text-sm font-bold text-[#27332f]"
                        >Name</label
                    >
                    <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        placeholder="Provider name"
                    />
                    <p
                        v-if="form.errors.name"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.name }}
                    </p>
                </div>

                <div>
                    <label
                        for="email"
                        class="mb-2 block text-sm font-bold text-[#27332f]"
                        >Email address</label
                    >
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        placeholder="provider@example.com"
                    />
                    <p
                        v-if="form.errors.email"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.email }}
                    </p>
                </div>

                <div>
                    <label
                        for="type"
                        class="mb-2 block text-sm font-bold text-[#27332f]"
                        >Type</label
                    >
                    <select
                        id="type"
                        v-model="form.type"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                    >
                        <option value="">Select a type</option>
                        <option v-for="(type, key) in types" :key="key" :value="key">
                            {{ type }}
                        </option>
                    </select>
                    <p
                        v-if="form.errors.type"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.type }}
                    </p>
                </div>

                <div>
                    <label
                        for="phone"
                        class="mb-2 block text-sm font-bold text-[#27332f]"
                        >Phone (optional)</label
                    >
                    <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        class="min-h-14 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        placeholder="Phone number"
                    />
                    <p
                        v-if="form.errors.phone"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.phone }}
                    </p>
                </div>

                <div>
                    <label
                        for="address"
                        class="mb-2 block text-sm font-bold text-[#27332f]"
                        >Address (optional)</label
                    >
                    <textarea
                        id="address"
                        v-model="form.address"
                        class="min-h-24 w-full rounded-2xl border border-[#d6ccbd] bg-white px-4 py-3 text-base font-semibold text-[#17201c] outline-none transition placeholder:text-[#9aa49d] focus:border-[#1d6a58] focus:ring-4 focus:ring-[#1d6a58]/10"
                        placeholder="Full address"
                    />
                    <p
                        v-if="form.errors.address"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.address }}
                    </p>
                </div>

                <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                        type="submit"
                        class="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#12352d] px-6 text-base font-black text-[#fff8e8] shadow-[0_16px_40px_rgba(18,53,45,.22)] transition hover:bg-[#1d6a58] disabled:cursor-not-allowed disabled:opacity-70"
                        :disabled="form.processing"
                    >
                        <ArrowPathIcon
                            v-if="form.processing"
                            class="h-5 w-5 animate-spin"
                        />
                        Update provider
                    </button>
                    <Link
                        :href="ProviderController.index()"
                        class="flex min-h-14 items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-6 text-base font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </section>
    </layout-default>
</template>
