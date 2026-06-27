import { computed, reactive } from 'vue';

const storageKey = 'admin.dashboard.preferences';

const defaults = {
    theme: 'system',
    density: 'comfortable',
    landingPage: 'dashboard',
    showHealth: true,
    compactSidebar: false,
    autoRefresh: true,
    refreshInterval: 30,
};

const preferences = reactive({ ...defaults });
let initialized = false;

const normalizePreferences = (value = {}) => ({
    theme: ['system', 'light', 'dark'].includes(value.theme) ? value.theme : defaults.theme,
    density: ['comfortable', 'compact'].includes(value.density) ? value.density : defaults.density,
    landingPage: ['dashboard', 'users', 'activity'].includes(value.landingPage) ? value.landingPage : defaults.landingPage,
    showHealth: typeof value.showHealth === 'boolean' ? value.showHealth : defaults.showHealth,
    compactSidebar: typeof value.compactSidebar === 'boolean' ? value.compactSidebar : defaults.compactSidebar,
    autoRefresh: typeof value.autoRefresh === 'boolean' ? value.autoRefresh : defaults.autoRefresh,
    refreshInterval: Number.isFinite(Number(value.refreshInterval))
        ? Math.min(120, Math.max(10, Number(value.refreshInterval)))
        : defaults.refreshInterval,
});

const loadPreferences = () => {
    if (initialized || typeof window === 'undefined') {
        return;
    }

    initialized = true;

    try {
        const stored = window.localStorage.getItem(storageKey);

        if (stored) {
            Object.assign(preferences, normalizePreferences(JSON.parse(stored)));
        }
    } catch {
        Object.assign(preferences, defaults);
    }
};

const persistPreferences = () => {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(preferences));
};

export function useDashboardPreferences() {
    loadPreferences();

    const effectiveTheme = computed(() => {
        if (preferences.theme !== 'system') {
            return preferences.theme;
        }

        if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    });

    const saveDashboardPreferences = (value) => {
        Object.assign(preferences, normalizePreferences(value));
        persistPreferences();
    };

    const resetDashboardPreferences = () => {
        Object.assign(preferences, defaults);
        persistPreferences();
    };

    return {
        defaults,
        effectiveTheme,
        preferences,
        resetDashboardPreferences,
        saveDashboardPreferences,
    };
}
