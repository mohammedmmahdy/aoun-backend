<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import LayoutDefault from "@/layouts/default.vue";
import { PencilIcon, TrashIcon, ArrowLeftIcon } from "@heroicons/vue/24/outline";
import ServiceCategoryController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ServiceCategoryController";

const props = defineProps({
    serviceCategory: {
        type: Object,
        required: true,
    },
});

const deleteForm = useForm({});

const destroy = () => {
    if (!window.confirm(`Delete ${props.serviceCategory.name}?`)) {
        return;
    }

    deleteForm.delete(ServiceCategoryController.destroy(props.serviceCategory.id), {
        preserveScroll: true,
    });
};
</script>

<template>
    <layout-default>
        <Head :title="serviceCategory.name" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                ServiceCategory Details
            </h1>
        </template>

        <section
            class="overflow-hidden rounded-[28px] bg-[#12352d] text-[#fff8e8] shadow-[0_24px_80px_rgba(42,35,24,.14)]"
        >
            <div class="relative px-5 py-7 sm:px-8 lg:px-10">
                <div
                    class="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(244,240,232,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,.14)_1px,transparent_1px)] [background-size:44px_44px]"
                ></div>
                <div
                    class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div class="flex items-center gap-4">
                        <div
                            class="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-[#eebc55] text-xl font-black uppercase text-[#10251f]"
                        >
                            {{ serviceCategory.name.slice(0, 2) }}
                        </div>
                        <div>
                            <p
                                class="text-sm font-semibold uppercase tracking-[0.22em] text-[#f8e5b9]"
                            >
                                Service Category account
                            </p>
                            <h2
                                class="mt-2 text-4xl font-black leading-tight tracking-tight text-[#fff8e8]"
                            >
                                {{ serviceCategory.name }}
                            </h2>
                            <p
                                class="mt-2 text-base font-semibold text-[#d9ebe5]"
                            >
                                {{ serviceCategory.email }}
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <Link
                            :href="ServiceCategoryController.edit(serviceCategory.id)"
                            class="flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#eebc55] px-5 text-sm font-black text-[#10251f] shadow-[0_14px_36px_rgba(0,0,0,.18)] transition hover:bg-[#f8d27d]"
                        >
                            <PencilIcon class="h-5 w-5" />
                            Edit
                        </Link>
                        <button
                            type="button"
                            class="flex min-h-12 items-center justify-center gap-3 rounded-2xl border border-[#f3b9b1] px-5 text-sm font-black text-[#ffd6d0] transition hover:bg-white/10"
                            :disabled="deleteForm.processing"
                            @click="destroy"
                        >
                            <TrashIcon class="h-5 w-5" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div
                class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6"
            >
                <p
                    class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                >
                    Profile
                </p>
                <h3
                    class="mt-2 text-2xl font-black tracking-tight text-[#17201c]"
                >
                    Account information
                </h3>

                <div
                    class="mt-6 divide-y divide-[#eadfce] overflow-hidden rounded-2xl border border-[#eadfce] bg-white"
                >
                    <div class="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                        <p class="text-sm font-black text-[#66756d]">Name</p>
                        <p class="text-sm font-semibold text-[#27332f]">
                            {{ serviceCategory.name }}
                        </p>
                    </div>
                    <div class="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                        <p class="text-sm font-black text-[#66756d]">Email</p>
                        <p class="text-sm font-semibold text-[#27332f]">
                            {{ serviceCategory.email }}
                        </p>
                    </div>
                    <div class="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                        <p class="text-sm font-black text-[#66756d]">
                            Verified
                        </p>
                        <p class="text-sm font-semibold text-[#27332f]">
                            {{ serviceCategory.email_verified_at || "Not verified" }}
                        </p>
                    </div>
                    <div class="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                        <p class="text-sm font-black text-[#66756d]">Created</p>
                        <p class="text-sm font-semibold text-[#27332f]">
                            {{ serviceCategory.created_at }}
                        </p>
                    </div>
                    <div class="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                        <p class="text-sm font-black text-[#66756d]">Updated</p>
                        <p class="text-sm font-semibold text-[#27332f]">
                            {{ serviceCategory.updated_at }}
                        </p>
                    </div>
                </div>
            </div>

            <aside
                class="rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6"
            >
                <p
                    class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                >
                    Actions
                </p>
                <div class="mt-5 grid gap-3">
                    <Link
                        :href="ServiceCategoryController.index()"
                        class="flex min-h-12 items-center gap-3 rounded-2xl border border-[#d6ccbd] bg-white px-4 text-sm font-black text-[#27332f] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    >
                        <ArrowLeftIcon class="h-5 w-5 flex-none" />
                        Back to serviceCategorys
                    </Link>
                    <Link
                        :href="ServiceCategoryController.edit(serviceCategory.id)"
                        class="flex min-h-12 items-center gap-3 rounded-2xl border border-[#d6ccbd] bg-white px-4 text-sm font-black text-[#27332f] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    >
                        <PencilIcon class="h-5 w-5 flex-none" />
                        Edit profile
                    </Link>
                </div>
            </aside>
        </section>
    </layout-default>
</template>
