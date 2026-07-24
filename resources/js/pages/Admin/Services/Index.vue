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
import ServiceController from "../../../wayfinder/actions/App/Http/Controllers/Admin/ServiceController";
const props = defineProps({
    services: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({ search: "" }),
    },
});

const page = usePage();
const perPage = ref(props.services.per_page || 10);
const search = ref(props.filters.search || "");
const deleteForm = useForm({});

const flashSuccess = computed(() => page.props.flash?.success);
const totalServices = computed(
    () => props.services.total ?? props.services.data.length,
);

watch(search, (value) => {
    router.get(
        ServiceController.index(),
        { search: value },
        {
            preserveState: true,
            replace: true,
            only: ["services", "filters"],
        },
    );
});

watch(perPage, (value) => {
    router.get(
        ServiceController.index(),
        { per_page: value },
        {
            preserveState: true,
            replace: true,
            only: ["services", "filters"],
        },
    );
});

const destroy = (service) => {
    if (!window.confirm(`Delete ${service.name}?`)) {
        return;
    }

    deleteForm.delete(ServiceController.destroy(service.id), {
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
                Services
            </h1>
        </template>

        <!-- <Link
            :href="ServiceController.create()"
            class="cursor-pointer flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#eebc55] px-5 text-sm font-black text-[#10251f] shadow-[0_14px_36px_rgba(0,0,0,.18)] transition hover:bg-[#f8d27d]"
        >
            <PlusIcon class="h-5 w-5" />
            New Service
        </Link> -->

        <section class="mt-6 grid gap-4 sm:grid-cols-3">
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Total Services</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ totalServices }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Showing</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ services.data.length }}
                </p>
            </article>
            <article
                class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm"
            >
                <p class="text-sm font-bold text-[#66756d]">Page</p>
                <p
                    class="mt-3 text-3xl font-black tracking-tight text-[#17201c]"
                >
                    {{ services.current_page }}
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
                        Service directory
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
                            placeholder="Search Services"
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
                    class="hidden grid-cols-9 w-auto gap-4 border-b border-[#eadfce] bg-[#f8f4ed] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#66756d] md:grid"
                >
                    <span>Name</span>
                    <span>Image</span>
                    <span>Category</span>
                    <span>Price</span>
                    <span>Duration</span>
                    <span>Provider</span>
                    <span>Status</span>
                    <span>Created</span>
                    <span class="text-right">Actions</span>
                </div>

                <div
                    v-if="services.data.length"
                    class="divide-y divide-[#eadfce]"
                >
                    <article
                        v-for="service in services.data"
                        :key="service.id"
                        class="grid grid-cols-9 gap-4 px-5 py-4 md:items-center"
                    >
                        <div class="flex items-center gap-3">
                            <div
                                class="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[#1d6a58] text-sm font-black uppercase text-[#fff8e8]"
                            >
                                {{ service.name.slice(0, 2) }}
                            </div>
                            <div class="min-w-0">
                                <p
                                    class="truncate text-sm font-black text-[#27332f]"
                                >
                                    {{ service.name }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <img
                                :src="service.image"
                                alt="Service Image"
                                class="h-11 w-11 rounded-2xl object-cover"
                            />
                        </div>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ service.category }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ service.price }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ service.duration }}
                        </p>
                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ service.provider }}
                        </p>
                        <p :class="`text-sm font-semibold text-${service.status_color}`">
                            <!-- use ServiceStatusEnum -->
                                {{ service.status_label }}
                        </p>

                        <p class="text-sm font-semibold text-[#66756d]">
                            {{ service.created_at }}
                        </p>
                        <div
                            class="flex items-center gap-2 md:justify-end col-auto"
                        >
                            <Link
                                :href="ServiceController.show(service.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="View Service"
                                title="View Service"
                            >
                                <EyeIcon class="h-5 w-5" />
                            </Link>
                            <!-- <Link
                                :href="ServiceController.edit(service.id)"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Edit Service Category"
                                title="Edit Service Category"
                            >
                                <PencilIcon class="h-5 w-5" />
                            </Link> -->
                            <button
                                type="button"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#e4c1bc] text-[#b64235] transition hover:border-[#b64235] hover:bg-[#fff5f3]"
                                aria-label="Delete Service Category"
                                title="Delete Service Category"
                                :disabled="deleteForm.processing"
                                @click="destroy(service)"
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

            <Pagination :links="services.links" />
        </section>
    </layout-default>
</template>
