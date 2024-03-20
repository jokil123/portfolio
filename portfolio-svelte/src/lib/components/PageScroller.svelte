<!-- the page scroller is the main scrollable container for the page, update scrollPosition store on scroll -->
<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';

	let div: HTMLElement;

	const updateScroll = (e: UIEvent) => {
		scrollPosition.set({ x: 0, y: div.scrollTop });
	};
</script>

<div on:scroll={updateScroll} bind:this={div}>
	<slot />
</div>

<style>
	div {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		overscroll-behavior-y: contain;
		height: 100vh;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	div::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	@media (min-width: 768px) {
		div {
			scroll-snap-type: none;
			/* overflow-y: scroll; */
		}
	}
</style>
