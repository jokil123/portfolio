<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';

	const handleScroll = (e: Event) => {
		const target = e.target as HTMLElement;
		const scroll = target.scrollTop;
		scrollPosition.set(scroll);
	};
</script>

<div on:scroll={handleScroll}>
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
