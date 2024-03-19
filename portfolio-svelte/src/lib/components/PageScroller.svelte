<!-- the page scroller is the main scrollable container for the page, update scrollPosition store on scroll -->
<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';

	let div: HTMLElement;

	const updateScroll = (e: UIEvent) => {
		scrollPosition.set({ x: div.scrollTop, y: 0 });
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
	}

	@media (min-width: 768px) {
		div {
			scroll-snap-type: none;
			/* overflow-y: scroll; */
		}
	}
</style>
