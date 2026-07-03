<script setup>
import { Head, Link } from "@inertiajs/vue3";
import LayoutDefault from "@/layouts/default.vue";
import ProviderController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ProviderController";

const props = defineProps({
    provider: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <layout-default>
        <Head :title="provider.name" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                {{ provider.name }}
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
                        Provider details
                    </p>
                    <h2
                        class="mt-2 text-3xl font-black tracking-tight text-[#17201c]"
                    >
                        {{ provider.name }}
                    </h2>
                </div>
                <div
                    class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
                >
                    <Link
                        :href="ProviderController.edit(provider.id)"
                        class="flex min-h-12 items-center justify-center rounded-2xl border border-[#d6ccbd] bg-white px-5 text-sm font-black text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                    >
                        Edit provider
                    </Link>
                    <Link
                        :href="ProviderController.index()"
                        class="text-sm font-black text-[#1d6a58] transition hover:text-[#bd7b2f]"
                        >Back to providers</Link
                    >
                </div>
            </div>

            <div class="mt-8 grid gap-6 lg:max-w-2xl">
                <div class="rounded-2xl border border-[#d6ccbd] bg-white p-5">
                    <p
                        class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                    >
                        General information
                    </p>

                    <div class="mt-5 grid gap-6 sm:grid-cols-2">
                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Name
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.name }}
                            </p>
                        </div>

                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Type
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.type_label }}
                            </p>
                        </div>

                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Email
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.email }}
                            </p>
                        </div>

                        <div v-if="provider.phone">
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Phone
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.phone }}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    v-if="provider.address"
                    class="rounded-2xl border border-[#d6ccbd] bg-white p-5"
                >
                    <p
                        class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                    >
                        Address
                    </p>
                    <p class="mt-3 text-base text-[#526158]">
                        {{ provider.address }}
                    </p>
                </div>

                <div class="rounded-2xl border border-[#d6ccbd] bg-white p-5">
                    <p
                        class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                    >
                        Timeline
                    </p>

                    <div class="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Created
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.created_at }}
                            </p>
                        </div>

                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.2em] text-[#66756d]"
                            >
                                Last updated
                            </p>
                            <p class="mt-2 text-lg font-black text-[#17201c]">
                                {{ provider.updated_at }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </layout-default>
</template>
