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
import ServiceCategoryController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ServiceCategoryController";
const props = defineProps({
    serviceCategories: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({ search: "" }),
    },
});

const page = usePage();
const perPage = ref(props.serviceCategories.per_page || 10);
const search = ref(props.filters.search || "");
const deleteForm = useForm({});

const flashSuccess = computed(() => page.props.flash?.success);
const flashError = computed(() => page.props.flash?.error);
const totalServiceCategories = computed(() => props.serviceCategories.total ?? props.serviceCategories.data.length);

watch(search, (value) => {
    router.get(
        ServiceCategoryController.index(),
        { search: value },
        {
            preserveState: true,
            replace: true,
            only: ["serviceCategories", "filters"],
        },
    );
});

watch(perPage, (value) => {
    router.get(
        ServiceCategoryController.index(),
        { per_page: value },
        {
            preserveState: true,
            replace: true,
            only: ["serviceCategories", "filters"],
        },
    );
});

const destroy = (serviceCategory) => {
    if (!window.confirm(`Delete ${serviceCategory.name}?`)) {
        return;
    }

    deleteForm.delete(ServiceCategoryController.destroy(serviceCategory.id), {
        preserveScroll: true,
    });
};
</script>

<template>
    <layout-default>
        <Head title="Service Categories" />

        <template #header>
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]"
            >
                Directory
            </p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">
                ServiceCategories
            </h1>
        </template>

        <Link
            :href="ServiceCategoryController.create()"
            class="cursor-pointer flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#eebc55] px-5 text-sm font-black text-[#10251f] shadow-[0_14px_36px_rgba(0,0,0,.18)] transition hover:bg-[#f8d27d]"
        >
            <PlusIcon class="h-5 w-5" />
            New Service Category
        </Link>

        <section class="mt-6 grid gap-4 sm:grid-cols-3">
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Total Service Categories</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ totalServiceCategories }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Showing</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ serviceCategories.data.length }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Page</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ serviceCategories.current_page }}
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
                        Service Category directory
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
                            placeholder="Search Service Categories"
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
            <p
                v-if="flashError"
                class="mt-5 rounded-2xl border border-[#e4c1bc] bg-[#fff5f3] px-4 py-3 text-sm font-black text-[#b64235]"
            >
                {{ flashError }}
            </p>

            <div
                class="mt-6 overflow-hidden rounded-2xl border border-[#eadfce] bg-white"
            >
                <div
                    class="hidden grid-cols-4 gap-4 border-b border-[#eadfce] bg-[#f8f4ed] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#66756d] md:grid"
                >
                    <span>Name</span>
                    <span>Service Count</span>
                    <span>Created</span>
                    <span class="text-right">Actions</span>
                </div>

                <div v-if="serviceCategories.data.length" class="divide-y divide-[#eadfce]">
                    <article
                        v-for="serviceCategory in serviceCategories.data"
                        :key="serviceCategory.id"
                        class="grid gap-4 px-5 py-4 md:grid-cols-4 md:items-center"
                    >
                        <div class="flex items-center gap-3">
                            <div
                                class="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[#1d6a58] text-sm font-black uppercase text-[#fff8e8]"
                            >
                                {{ serviceCategory.name.slice(0, 2) }}
                            </div>
                            <div class="min-w-0">
                                <p
                                    class="truncate text-sm font-black text-[#27332f]"
                                >
                                    {{ serviceCategory.name }}
                                </p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ serviceCategory.service_count }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ serviceCategory.created_at }}
                        </p>
                        <div class="flex items-center gap-2 md:justify-end">
                            <!-- <Link
                                :href="ServiceCategoryController.show(serviceCategory.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="View Service Category"
                                title="View Service Category"
                            >
                                <EyeIcon class="h-5 w-5" />
                            </Link> -->
                            <Link
                                :href="ServiceCategoryController.edit(serviceCategory.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Edit Service Category"
                                title="Edit Service Category"
                            >
                                <PencilIcon class="h-5 w-5" />
                            </Link>
                            <button
                                type="button"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#e4c1bc] text-[#b64235] transition hover:border-[#b64235] hover:bg-[#fff5f3]"
                                aria-label="Delete Service Category"
                                title="Delete Service Category"
                                :disabled="deleteForm.processing"
                                @click="destroy(serviceCategory)"
                            >
                                <TrashIcon class="h-5 w-5" />
                            </button>
                        </div>
                    </article>
                </div>

                <div v-else class="px-5 py-12 text-center">
                    <p class="text-lg font-black text-[#27332f]">
                        No Service Categories found
                    </p>
                    <p class="mt-2 text-sm font-semibold text-[#728078]">
                        Adjust the search or create a new Service Category.
                    </p>
                </div>
            </div>

            <Pagination :links="serviceCategories.links" />
        </section>
    </layout-default>
</template>
