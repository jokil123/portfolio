<!-- the page scroller is the main scrollable container for the page, update scrollPosition store on scroll -->
<script lang="ts">
	import { scrollDirection, scrollPosition } from '$lib/stores/scrollPosition';
	import { onDestroy } from 'svelte';

	export let scrollSnapMobile: boolean = true;

	let div: HTMLElement;

	const updateScroll = (e: UIEvent) => {
		scrollPosition.set({ x: 0, y: div.scrollTop });
	};

	let lastY = 0;
	const unsubscribe = scrollPosition.subscribe(({ y }) => {
		if (lastY > y) {
			scrollDirection.set('up');
		}

		if (lastY < y) {
			scrollDirection.set('down');
		}

		lastY = y;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div on:scroll={updateScroll} bind:this={div} class:scrollSnapMobile>
	<slot />
</div>

<style>
	div {
		overflow-y: scroll;
		overscroll-behavior-y: contain;
		height: 100dvh;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	div::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	div {
		scroll-behavior: smooth;
	}
</style>
