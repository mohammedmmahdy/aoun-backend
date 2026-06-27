<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import { useDashboardPreferences } from '@/composables/useDashboardPreferences';

const navItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        match: '/dashboard',
        icon: 'M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z',
    },
    // {
    //     label: 'Content',
    //     href: '#',
    //     match: '#',
    //     icon: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5',
    // },
    {
        label: 'Users',
        href: '/users',
        match: '/users',
        icon: 'M16 11a4 4 0 1 0-8 0 M4.5 20a7.5 7.5 0 0 1 15 0',
    },
    // {
    //     label: 'Reports',
    //     href: '#',
    //     match: '#',
    //     icon: 'M5 19V5 M5 19h14 M9 16v-5 M13 16V8 M17 16v-7',
    // },
    // {
    //     label: 'Settings',
    //     href: '#',
    //     match: '#',
    //     icon: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z M19 12h2 M3 12h2 M12 3v2 M12 19v2 M17 5l-1.4 1.4 M8.4 17.6 7 19 M19 19l-1.4-1.4 M6.4 6.4 5 5',
    // },
];

const page = usePage();
const { effectiveTheme, preferences } = useDashboardPreferences();
const currentPath = computed(() => page.url.split('?')[0]);
const searchOpen = ref(false);
const notificationsOpen = ref(false);
const userMenuOpen = ref(false);
const searchQuery = ref('');
const searchPanel = ref(null);
const notificationPanel = ref(null);
const userMenuPanel = ref(null);
const searchInput = ref(null);

const isActive = (item) => item.match !== '#' && currentPath.value.startsWith(item.match);
const isDark = computed(() => effectiveTheme.value === 'dark');
const sidebarWidthClass = computed(() => preferences.compactSidebar ? 'lg:w-20' : 'lg:w-72');
const contentOffsetClass = computed(() => preferences.compactSidebar ? 'lg:pl-20' : 'lg:pl-72');
const shellClass = computed(() => isDark.value ? 'bg-[#101816] text-[#f4f0e8]' : 'bg-[#f4f0e8] text-[#17201c]');
const headerClass = computed(() => isDark.value ? 'border-[#2c3f38] bg-[#101816]/90' : 'border-[#ded5c5] bg-[#f4f0e8]/90');
const headerTitleClass = computed(() => isDark.value ? 'text-[#f4f0e8]' : 'text-[#17201c]');
const dropdownClass = computed(() => isDark.value ? 'border-[#2c3f38] bg-[#18231f] shadow-[0_24px_70px_rgba(0,0,0,.34)]' : 'border-[#ded5c5] bg-[#fffbf3] shadow-[0_24px_70px_rgba(42,35,24,.18)]');
const dropdownTextClass = computed(() => isDark.value ? 'text-[#f4f0e8]' : 'text-[#27332f]');
const dropdownMutedClass = computed(() => isDark.value ? 'text-[#bed9d0]' : 'text-[#728078]');

const admin = computed(() => page.props.auth?.admin);
const adminName = computed(() => admin.value?.name || 'Admin');
const adminEmail = computed(() => admin.value?.email || 'admin@example.com');
const adminInitials = computed(() => {
    const initials = adminName.value
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('');

    return initials || 'A';
});

const quickSearchItems = [
    { label: 'Dashboard', href: '/dashboard', meta: 'Overview and activity' },
    { label: 'Users', href: '/users', meta: 'Browse account records' },
    { label: 'Create user', href: '/users/create', meta: 'Add a new account' },
];

const notificationItems = [
    { title: 'System health is stable', meta: 'Just now' },
    { title: 'User directory ready', meta: '15 minutes ago' },
    { title: 'Admin session active', meta: 'Today' },
];

const userMenuItems = [
    { label: 'Profile', href: '/profile', icon: 'M16 11a4 4 0 1 0-8 0 M4.5 20a7.5 7.5 0 0 1 15 0' },
    { label: 'Settings', href: '/settings', icon: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z M19 12h2 M3 12h2 M12 3v2 M12 19v2 M17 5l-1.4 1.4 M8.4 17.6 7 19 M19 19l-1.4-1.4 M6.4 6.4 5 5' },
    { label: 'Edit profile', href: '/profile/edit', icon: 'M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z M14 8l2 2' },
];

const closePanels = () => {
    searchOpen.value = false;
    notificationsOpen.value = false;
    userMenuOpen.value = false;
};

const toggleSearch = async () => {
    const nextState = !searchOpen.value;
    closePanels();
    searchOpen.value = nextState;

    if (nextState) {
        await nextTick();
        searchInput.value?.focus();
    }
};

const toggleNotifications = () => {
    const nextState = !notificationsOpen.value;
    closePanels();
    notificationsOpen.value = nextState;
};

const toggleUserMenu = () => {
    const nextState = !userMenuOpen.value;
    closePanels();
    userMenuOpen.value = nextState;
};

const submitSearch = () => {
    const search = searchQuery.value.trim();

    closePanels();
    router.get('/users', search ? { search } : {}, {
        preserveState: false,
    });
};

const logout = () => {
    closePanels();
    router.post('/logout');
};

const handleDocumentClick = (event) => {
    if (
        searchPanel.value?.contains(event.target)
        || notificationPanel.value?.contains(event.target)
        || userMenuPanel.value?.contains(event.target)
    ) {
        return;
    }

    closePanels();
};

const handleKeydown = (event) => {
    if (event.key === 'Escape') {
        closePanels();
    }
};

onMounted(() => {
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick);
    document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <div class="min-h-screen transition-colors" :class="[shellClass, isDark ? 'admin-dark' : '']">
        <div class="flex min-h-screen">
            <aside class="fixed inset-y-0 left-0 z-30 hidden border-r border-[#d8cfbf] bg-[#12352d] text-[#fff8e8] transition-all lg:flex lg:flex-col" :class="sidebarWidthClass">
                <div class="flex h-24 items-center gap-3 px-6" :class="preferences.compactSidebar ? 'justify-center px-3' : ''">
                    <div class="grid h-11 w-11 place-items-center rounded-lg bg-[#eebc55] text-lg font-black text-[#10251f] shadow-[0_18px_45px_rgba(0,0,0,.22)]">
                        A
                    </div>
                    <div v-if="!preferences.compactSidebar">
                        <p class="text-sm font-semibold uppercase tracking-[0.26em] text-[#d7f0e7]">Admin</p>
                        <p class="text-xl font-black">Control Desk</p>
                    </div>
                </div>

                <nav class="flex-1 space-y-2 px-4">
                    <Link
                        v-for="item in navItems"
                        :key="item.label"
                        :href="item.href"
                        class="group flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-bold transition"
                        :class="[
                            isActive(item) ? 'bg-[#fff8e8] text-[#12352d] shadow-[0_14px_36px_rgba(0,0,0,.18)]' : 'text-[#d9ebe5] hover:bg-white/10 hover:text-white',
                            preferences.compactSidebar ? 'justify-center px-3' : '',
                        ]"
                    >
                        <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path :d="item.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span v-if="!preferences.compactSidebar">{{ item.label }}</span>
                    </Link>
                </nav>

                <div v-if="preferences.showHealth && !preferences.compactSidebar" class="m-4 rounded-2xl border border-[#eebc55]/30 bg-white/8 p-4">
                    <p class="text-sm font-black text-[#fff8e8]">Workspace health</p>
                    <div class="mt-4 h-2 rounded-full bg-white/15">
                        <div class="h-2 w-4/5 rounded-full bg-[#eebc55]"></div>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-[#bed9d0]">Systems are stable and ready for review.</p>
                </div>
            </aside>

            <div class="flex min-h-screen flex-1 flex-col transition-all" :class="contentOffsetClass">
                <header class="sticky top-0 z-20 border-b backdrop-blur transition-colors" :class="headerClass">
                    <div class="flex min-h-20 items-center justify-between gap-4 px-5 sm:px-8">
                        <div class="flex items-center gap-3 lg:hidden">
                            <div class="grid h-10 w-10 place-items-center rounded-lg bg-[#12352d] text-base font-black text-[#fff8e8]">
                                A
                            </div>
                            <div>
                                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#5a6c62]">Admin</p>
                                <p class="text-lg font-black text-[#17201c]">Control Desk</p>
                            </div>
                        </div>

                        <div class="hidden lg:block">
                            <slot name="header">
                                <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Overview</p>
                                <h1 class="mt-1 text-2xl font-black tracking-tight" :class="headerTitleClass">Dashboard</h1>
                            </slot>
                        </div>

                        <div class="ml-auto flex items-center gap-3">
                            <div ref="searchPanel" class="relative">
                                <button
                                    type="button"
                                    class="grid h-11 w-11 place-items-center rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] text-[#526158] shadow-sm transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                    :class="searchOpen ? 'border-[#1d6a58] text-[#1d6a58]' : ''"
                                    aria-label="Search"
                                    title="Search"
                                    :aria-expanded="searchOpen"
                                    aria-controls="header-search"
                                    @click.stop="toggleSearch"
                                >
                                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="m21 21-4.3-4.3 M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                    </svg>
                                </button>

                                <div
                                    v-if="searchOpen"
                                    id="header-search"
                                    class="absolute right-0 top-14 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border p-3"
                                    :class="dropdownClass"
                                    @click.stop
                                >
                                    <form class="flex min-h-12 items-center rounded-2xl border border-[#d6ccbd] bg-white px-3 focus-within:border-[#1d6a58] focus-within:ring-4 focus-within:ring-[#1d6a58]/10" @submit.prevent="submitSearch">
                                        <svg class="h-5 w-5 flex-none text-[#7b887f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="m21 21-4.3-4.3 M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                                        </svg>
                                        <input
                                            ref="searchInput"
                                            v-model="searchQuery"
                                            type="search"
                                            class="min-h-12 w-full border-0 bg-transparent px-3 text-sm font-semibold text-[#17201c] outline-none placeholder:text-[#9aa49d]"
                                            placeholder="Search users"
                                        >
                                    </form>

                                    <div class="mt-3 space-y-1">
                                        <Link
                                            v-for="item in quickSearchItems"
                                            :key="item.label"
                                            :href="item.href"
                                            class="block rounded-xl px-3 py-2 transition hover:bg-[#eef4ef]"
                                            @click="closePanels"
                                        >
                                            <span class="block text-sm font-black" :class="dropdownTextClass">{{ item.label }}</span>
                                            <span class="mt-1 block text-xs font-semibold" :class="dropdownMutedClass">{{ item.meta }}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div ref="notificationPanel" class="relative">
                                <button
                                    type="button"
                                    class="relative grid h-11 w-11 place-items-center rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] text-[#526158] shadow-sm transition hover:border-[#1d6a58] hover:text-[#1d6a58]"
                                    :class="notificationsOpen ? 'border-[#1d6a58] text-[#1d6a58]' : ''"
                                    aria-label="Notifications"
                                    title="Notifications"
                                    :aria-expanded="notificationsOpen"
                                    aria-controls="header-notifications"
                                    @click.stop="toggleNotifications"
                                >
                                    <span class="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#b64235]"></span>
                                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z M10 21h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div
                                    v-if="notificationsOpen"
                                    id="header-notifications"
                                    class="absolute right-0 top-14 w-[min(21rem,calc(100vw-2.5rem))] rounded-2xl border p-3"
                                    :class="dropdownClass"
                                    @click.stop
                                >
                                    <div class="px-2 pb-2">
                                        <p class="text-sm font-black" :class="dropdownTextClass">Notifications</p>
                                        <p class="mt-1 text-xs font-semibold" :class="dropdownMutedClass">Latest admin activity</p>
                                    </div>
                                    <div class="space-y-1">
                                        <div
                                            v-for="item in notificationItems"
                                            :key="item.title"
                                            class="rounded-xl px-3 py-2 hover:bg-[#eef4ef]"
                                        >
                                            <p class="text-sm font-black" :class="dropdownTextClass">{{ item.title }}</p>
                                            <p class="mt-1 text-xs font-semibold" :class="dropdownMutedClass">{{ item.meta }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div ref="userMenuPanel" class="relative">
                                <button
                                    type="button"
                                    class="flex h-11 items-center gap-3 rounded-2xl border border-[#d6ccbd] bg-[#fffbf3] px-3 shadow-sm transition hover:border-[#1d6a58]"
                                    :class="userMenuOpen ? 'border-[#1d6a58]' : ''"
                                    aria-label="Account menu"
                                    title="Account menu"
                                    :aria-expanded="userMenuOpen"
                                    aria-controls="header-user-menu"
                                    @click.stop="toggleUserMenu"
                                >
                                    <div class="grid h-8 w-8 place-items-center rounded-xl bg-[#1d6a58] text-sm font-black uppercase text-[#fff8e8]">
                                        {{ adminInitials }}
                                    </div>
                                    <span class="hidden max-w-32 truncate text-sm font-black text-[#27332f] sm:inline">{{ adminName }}</span>
                                    <svg class="hidden h-4 w-4 text-[#728078] sm:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div
                                    v-if="userMenuOpen"
                                    id="header-user-menu"
                                    class="absolute right-0 top-14 w-[min(18rem,calc(100vw-2.5rem))] rounded-2xl border p-3"
                                    :class="dropdownClass"
                                    @click.stop
                                >
                                    <div class="border-b border-[#eadfce] px-2 pb-3">
                                        <p class="truncate text-sm font-black" :class="dropdownTextClass">{{ adminName }}</p>
                                        <p class="mt-1 truncate text-xs font-semibold" :class="dropdownMutedClass">{{ adminEmail }}</p>
                                    </div>

                                    <div class="mt-2 space-y-1">
                                        <Link
                                            v-for="item in userMenuItems"
                                            :key="item.label"
                                            :href="item.href"
                                            class="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-black transition hover:bg-[#eef4ef]"
                                            :class="dropdownTextClass"
                                            @click="closePanels"
                                        >
                                            <svg class="h-5 w-5 flex-none text-[#66756d]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <path :d="item.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            {{ item.label }}
                                        </Link>
                                        <button
                                            type="button"
                                            class="mt-2 flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-black text-[#b64235] transition hover:bg-[#fff5f3]"
                                            @click="logout"
                                        >
                                            <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <path d="M10 17l5-5-5-5 M15 12H3 M21 4v16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main class="flex-1 px-5 py-6 sm:px-8 sm:py-8">
                    <div class="mx-auto w-full max-w-7xl">
                        <div class="mb-6 lg:hidden">
                            <slot name="header">
                                <p class="text-sm font-bold uppercase tracking-[0.22em] text-[#bd7b2f]">Overview</p>
                                <h1 class="mt-1 text-2xl font-black tracking-tight text-[#17201c]">Dashboard</h1>
                            </slot>
                        </div>

                        <slot />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
