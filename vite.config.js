import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import { wayfinder } from "@laravel/vite-plugin-wayfinder";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true,
        }),
        tailwindcss(),
        vue(),
        inertia(),
        wayfinder(),
    ],
    server: {
        host: '0.0.0.0',      // listen on all interfaces inside the container
        port: 5173,
        strictPort: true,      // Fix: stop Vite from auto-incrementing to 5174, 5175, etc.
        hmr: {
            host: 'localhost', // browser on your machine connects here
            port: 5173,
        },
    },
});
