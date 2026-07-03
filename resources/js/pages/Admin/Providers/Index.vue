<script setup>
import { Head, router, useForm, usePage, Link } from "@inertiajs/vue3";
import { computed, ref, watch } from "vue";
import LayoutDefault from "@/layouts/default.vue";
import Pagination from "@/components/Pagination.vue";
import {
    PlusIcon,
    MagnifyingGlassIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/vue/24/outline";
import ProviderController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ProviderController";

const props = defineProps({
    providers: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({ search: "" }),
    },
});

const page = usePage();
const perPage = ref(props.providers.per_page || 10);
const search = ref(props.filters.search || "");
const deleteForm = useForm({});

const flashSuccess = computed(() => page.props.flash?.success);
const totalProviders = computed(
    () => props.providers.total ?? props.providers.data.length,
);

watch(search, (value) => {
    router.get(
        "/providers",
        { search: value },
        {
            preserveState: true,
            replace: true,
            only: ["providers", "filters"],
        },
    );
});

watch(perPage, (value) => {
    router.get(
        "/providers",
        { per_page: value },
        {
            preserveState: true,
            replace: true,
            only: ["providers", "filters"],
        },
    );
});

const destroy = (provider) => {
    if (!window.confirm(`Delete ${provider.name}?`)) {
        return;
    }

    deleteForm.delete(`/providers/${provider.id}`, {
        preserveScroll: true,
    });
};

console.log("Providers:", props.providers[0]);
</script>

<template>
    <layout-default>
        <Head title="Providers" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                Providers
            </h1>
        </template>

        <Link
            :href="ProviderController.create()"
            class="cursor-pointer flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#eebc55] px-5 text-sm font-black text-[#10251f] shadow-[0_14px_36px_rgba(0,0,0,.18)] transition hover:bg-[#f8d27d]"
        >
            <PlusIcon class="h-5 w-5" />
            New provider
        </Link>

        <section class="mt-6 grid gap-4 sm:grid-cols-3">
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Total providers</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ totalProviders }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Showing</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ providers.data.length }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Page</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ providers.current_page }}
                </p>
            </article>
        </section>

        <section
            class="mt-6 rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6"
        >
            <div
                class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
            >
                <div>
                    <p
                        class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]"
                    >
                        Records
                    </p>
                    <h3
                        class="mt-2 text-2xl font-black tracking-tight text-[#17201c]"
                    >
                        Provider directory
                    </h3>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div
                        class="group flex min-h-12 w-full items-center rounded-2xl border border-[#d6ccbd] bg-white px-4 shadow-sm transition focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10 lg:max-w-sm"
                    >
                        <MagnifyingGlassIcon
                            class="h-5 w-5 flex-none text-[#7b887f]"
                        />
                        <input
                            v-model="search"
                            type="search"
                            class="min-h-12 w-full border-0 bg-transparent px-3 text-sm font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                            placeholder="Search providers"
                        />
                    </div>
                    <div
                        class="group flex min-h-12 items-center rounded-2xl border border-[#d6ccbd] bg-white px-4 shadow-sm transition focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10 lg:max-w-sm"
                    >
                        <select
                            v-model="perPage"
                            class="min-h-12 border-0 bg-transparent px-3 text-sm font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                        </select>
                    </div>
                </div>
            </div>

            <p
                v-if="flashSuccess"
                class="mt-5 rounded-2xl border border-[#bed9d0] bg-[#eef4ef] px-4 py-3 text-sm font-black text-[#1d6a58]"
            >
                {{ flashSuccess }}
            </p>

            <div
                class="mt-6 overflow-hidden rounded-2xl border border-[#eadfce] bg-white"
            >
                <div
                    class="hidden grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_140px_140px_220px] gap-4 border-b border-[#eadfce] bg-[#f8f4ed] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#66756d] md:grid"
                >
                    <span>Name</span>
                    <span>Email</span>
                    <span>Type</span>
                    <span>Joined</span>
                    <span class="text-right">Actions</span>
                </div>

                <div
                    v-if="providers.data.length"
                    class="divide-y divide-[#eadfce]"
                >

                    <article
                        v-for="provider in providers.data"
                        :key="provider.id"
                        class="grid gap-4 px-5 py-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_140px_140px_220px] md:items-center"
                    >
                        <div class="flex items-center gap-3">
                            <div
                                class="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[#1d6a58] text-sm font-black uppercase text-[#fff8e8]"
                            >
                                {{ provider.name.slice(0, 2) }}
                            </div>
                            <div class="min-w-0">
                                <p
                                    class="truncate text-sm font-black text-[#27332f]"
                                >
                                    {{ provider.name }}
                                </p>
                                <p
                                    class="mt-1 text-xs font-semibold text-[#728078] md:hidden"
                                >
                                    {{ provider.email }}
                                </p>
                            </div>
                        </div>
                        <p
                            class="hidden truncate text-sm font-semibold text-[#526158] md:block"
                        >
                            {{ provider.email }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ provider.type_label }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ provider.created_at }}
                        </p>
                        <div class="flex items-center gap-2 md:justify-end">
                            <Link
                                :href="ProviderController.show(provider.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="View provider"
                                title="View provider"
                            >
                                <EyeIcon class="h-5 w-5" />
                            </Link>
                            <Link
                                :href="ProviderController.edit(provider.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Edit provider"
                                title="Edit provider"
                            >
                                <PencilIcon class="h-5 w-5" />
                            </Link>
                            <button
                                @click="destroy(provider)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#b64235] transition hover:border-[#b64235]"
                                aria-label="Delete provider"
                                title="Delete provider"
                                type="button"
                            >
                                <TrashIcon class="h-5 w-5" />
                            </button>
                        </div>
                    </article>
                </div>

                <div v-else class="px-5 py-12 text-center">
                    <svg
                        class="mx-auto h-12 w-12 text-[#c5b3a0]"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M9.172 16.172a4 4 0 0 1 5.656 0M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                        />
                    </svg>
                    <p class="mt-4 text-sm font-semibold text-[#66756d]">
                        No providers found
                    </p>
                </div>
            </div>

            <Pagination :links="providers.links" />
        </section>
    </layout-default>
</template>
