<!-- the page scroller is the main scrollable container for the page, update scrollPosition store on scroll -->
<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';

	export let scrollSnapMobile: boolean = true;

	let div: HTMLElement;

	const updateScroll = (e: UIEvent) => {
		scrollPosition.set({ x: 0, y: div.scrollTop });
	};
</script>

<div on:scroll={updateScroll} bind:this={div} class:scrollSnapMobile>
	<slot />
</div>

<style>
	div {
		overflow-y: scroll;
		overscroll-behavior-y: contain;
		height: 100vh;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	div.scrollSnapMobile {
		scroll-snap-type: y mandatory;
	}

	div::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	@media (min-width: 768px) {
		div.scrollSnapMobile {
			scroll-snap-type: none;
		}
	}
</style>
