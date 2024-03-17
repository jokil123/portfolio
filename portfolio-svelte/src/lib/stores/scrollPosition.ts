import { writable } from 'svelte/store';

export const scrollPosition = writable({ x: 0, y: 0 });
