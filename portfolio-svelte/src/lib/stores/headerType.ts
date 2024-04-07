import { writable, type Writable } from 'svelte/store';

export const headerType: Writable<HeaderType> = writable('desktop');

export type HeaderType = 'mobile' | 'desktop';
