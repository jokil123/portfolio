import { writable } from 'svelte/store';

// Check if the code is running on the client side
const isClient = typeof window !== 'undefined';

// Initial window size values
const initialWidth = isClient ? window.innerWidth : 0;
const initialHeight = isClient ? window.innerHeight : 0;

// Create a writable store with the initial values
const windowSize = writable({ width: initialWidth, height: initialHeight });

// Update the store when the window is resized
if (isClient) {
	window.addEventListener('resize', () => {
		windowSize.set({ width: window.innerWidth, height: window.innerHeight });
	});
}

export default windowSize;
