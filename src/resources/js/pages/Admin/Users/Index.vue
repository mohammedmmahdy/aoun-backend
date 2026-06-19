<script setup>
import { Head, router, useForm, usePage, Link } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
import LayoutDefault from '@/layouts/default.vue';
import UserController from '../../../wayfinder/actions/App/Http/Controllers/Admin/UserController';


const props = defineProps({
    users: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({ search: '' }),
    },
});

const page = usePage();
const search = ref(props.filters.search || '');
const deleteForm = useForm({});

const flashSuccess = computed(() => page.props.flash?.success);
const totalUsers = computed(() => props.users.total ?? props.users.data.length);

watch(search, (value) => {
    router.get(
        '/users',
        { search: value },
        {
            preserveState: true,
            replace: true,
            only: ['users', 'filters'],
        },
    );
});

const destroy = (user) => {
    if (!window.confirm(`Delete ${user.name}?`)) {
        return;
    }

    deleteForm.delete(`/users/${user.id}`, {
        preserveScroll: true,
    });
};
</script>

<template>
    <layout-default>
        <Head title="Users" />

        <template #header>
            <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Directory</p>
            <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Users</h1>
        </template>

        <section class="overflow-hidden rounded-[28px] bg-[#12352d] text-[#fff8e8] shadow-[0_24px_80px_rgba(42,35,24,.14)]">
            <div class="relative px-5 py-7 sm:px-8 lg:px-10">
                <div class="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(244,240,232,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,.14)_1px,transparent_1px)] [background-size:44px_44px]"></div>
                <div class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div class="max-w-2xl">
                        <p class="w-fit rounded-full border border-[#eebc55]/35 px-4 py-2 text-sm font-semibold text-[#f8e5b9]">
                            Account management
                        </p>
                        <h2 class="mt-5 text-4xl font-black leading-tight tracking-tight text-[#fff8e8] sm:text-5xl">
                            Keep every user record tidy.
                        </h2>
                        <p class="mt-4 max-w-xl text-base leading-7 text-[#d9ebe5]">
                            Create, edit, search, and remove user accounts from the same focused admin workspace.
                        </p>
                    </div>

                    <Link
                        :href="UserController.create()"
                        class="cursor-pointer flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#eebc55] px-5 text-sm font-black text-[#10251f] shadow-[0_14px_36px_rgba(0,0,0,.18)] transition hover:bg-[#f8d27d]"
                    >
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 5v14 M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                        </svg>
                        New user
                    </Link>
                </div>
            </div>
        </section>

        <section class="mt-6 grid gap-4 sm:grid-cols-3">
            <article class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm">
                <p class="text-sm font-bold text-[#66756d]">Total users</p>
                <p class="mt-3 text-3xl font-black tracking-tight text-[#17201c]">{{ totalUsers }}</p>
            </article>
            <article class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm">
                <p class="text-sm font-bold text-[#66756d]">Showing</p>
                <p class="mt-3 text-3xl font-black tracking-tight text-[#17201c]">{{ users.data.length }}</p>
            </article>
            <article class="rounded-2xl border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm">
                <p class="text-sm font-bold text-[#66756d]">Page</p>
                <p class="mt-3 text-3xl font-black tracking-tight text-[#17201c]">{{ users.current_page }}</p>
            </article>
        </section>

        <section class="mt-6 rounded-[28px] border border-[#ded5c5] bg-[#fffbf3] p-5 shadow-sm sm:p-6">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#bd7b2f]">Records</p>
                    <h3 class="mt-2 text-2xl font-black tracking-tight text-[#17201c]">User directory</h3>
                </div>

                <div class="group flex min-h-12 w-full items-center rounded-2xl border border-[#d6ccbd] bg-white px-4 shadow-sm transition focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10 lg:max-w-sm">
                    <svg class="h-5 w-5 flex-none text-[#7b887f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m21 21-4.3-4.3 M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                    </svg>
                    <input
                        v-model="search"
                        type="search"
                        class="min-h-12 w-full border-0 bg-transparent px-3 text-sm font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                        placeholder="Search users"
                    >
                </div>
            </div>

            <p v-if="flashSuccess" class="mt-5 rounded-2xl border border-[#bed9d0] bg-[#eef4ef] px-4 py-3 text-sm font-black text-[#1d6a58]">
                {{ flashSuccess }}
            </p>

            <div class="mt-6 overflow-hidden rounded-2xl border border-[#eadfce] bg-white">
                <div class="hidden grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_140px_220px] gap-4 border-b border-[#eadfce] bg-[#f8f4ed] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#66756d] md:grid">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Joined</span>
                    <span class="text-right">Actions</span>
                </div>

                <div v-if="users.data.length" class="divide-y divide-[#eadfce]">
                    <article
                        v-for="user in users.data"
                        :key="user.id"
                        class="grid gap-4 px-5 py-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_140px_220px] md:items-center"
                    >
                        <div class="flex items-center gap-3">
                            <div class="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[#1d6a58] text-sm font-black uppercase text-[#fff8e8]">
                                {{ user.name.slice(0, 2) }}
                            </div>
                            <div class="min-w-0">
                                <p class="truncate text-sm font-black text-[#27332f]">{{ user.name }}</p>
                                <p class="mt-1 text-xs font-semibold text-[#728078] md:hidden">{{ user.email }}</p>
                            </div>
                        </div>
                        <p class="hidden truncate text-sm font-semibold text-[#526158] md:block">{{ user.email }}</p>
                        <p class="text-sm font-semibold text-[#66756d]">{{ user.created_at }}</p>
                        <div class="flex items-center gap-2 md:justify-end">
                            <a
                                :href="`/users/${user.id}`"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="View user"
                                title="View user"
                            >
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M2.5 12.9a1.8 1.8 0 0 1 0-1.8C3.6 9.2 7 5 12 5s8.4 4.2 9.5 6.1a1.8 1.8 0 0 1 0 1.8C20.4 14.8 17 19 12 19s-8.4-4.2-9.5-6.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                                    <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" stroke-width="1.8" />
                                </svg>
                            </a>
                            <a
                                :href="`/users/${user.id}/edit`"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#d6ccbd] text-[#526158] transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                aria-label="Edit user"
                                title="Edit user"
                            >
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z M14 8l2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <button
                                type="button"
                                class="grid h-10 w-10 place-items-center rounded-xl border border-[#e4c1bc] text-[#b64235] transition hover:border-[#b64235] hover:bg-[#fff5f3]"
                                aria-label="Delete user"
                                title="Delete user"
                                :disabled="deleteForm.processing"
                                @click="destroy(user)"
                            >
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 7h14 M10 11v6 M14 11v6 M8 7l1-3h6l1 3 M7 7l1 13h8l1-13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </article>
                </div>

                <div v-else class="px-5 py-12 text-center">
                    <p class="text-lg font-black text-[#27332f]">No users found</p>
                    <p class="mt-2 text-sm font-semibold text-[#728078]">Adjust the search or create a new user.</p>
                </div>
            </div>

            <div v-if="users.links.length > 3" class="mt-6 flex flex-wrap gap-2">
                <a
                    v-for="link in users.links"
                    :key="link.label"
                    :href="link.url || '#'"
                    class="flex min-h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-black transition"
                    :class="[
                        link.active ? 'border-[#12352d] bg-[#12352d] text-[#fff8e8]' : 'border-[#d6ccbd] bg-white text-[#526158] hover:border-[#1d6a58] hover:text-[#1d6a58]',
                        !link.url ? 'pointer-events-none opacity-45' : '',
                    ]"
                    v-html="link.label"
                />
            </div>
        </section>
    </layout-default>
</template>
