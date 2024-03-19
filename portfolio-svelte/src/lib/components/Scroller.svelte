<script lang="ts">
	// this component is used when you want elements to scroll with a different speed than the rest of the page

	import { scrollPosition } from '$lib/stores/scrollPosition';

	export let speed: number;

	let scrollBox: Element;

	let oldScroll = 0;

	scrollPosition.subscribe((value) => {});
</script>

<div style={`transform: translateY(${y}px)`} bind:this={scrollBox}>
	<!-- <div bind:this={scrollBox}> -->
	<slot />
</div>
<!-- <p>{y}</p> -->
