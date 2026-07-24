<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import LayoutDefault from "@/layouts/default.vue";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import ServiceController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ServiceController";

const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    name: props.service.name,
    email: props.service.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.put(ServiceController.update(props.service.id), {
        preserveScroll: true,
        onSuccess: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <layout-default>
        <Head :title="`Edit ${service.name}`" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                Edit Service
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
                        Service
                    </p>
                    <h2
                        class="mt-2 text-3xl font-black tracking-tight text-[#17201c]"
                    >
                        {{ service.name }}
                    </h2>
                </div>
                <Link
                    :href="ServiceController.index()"
                    class="text-sm font-black text-[#1d6a58] transition hover:text-[#bd7b2f]"
                    >Back to services</Link
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
                        required
                    />
                    <p
                        v-if="form.errors.name"
                        class="mt-2 text-sm font-semibold text-[#b64235]"
                    >
                        {{ form.errors.name }}
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
                        Update service
                    </button>
                    <Link
                        :href="ServiceController.index()"
                        class="flex min-h-14 items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-6 text-base font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </section>
    </layout-default>
</template>
