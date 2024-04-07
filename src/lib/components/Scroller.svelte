<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import { onDestroy } from 'svelte';
	import { linear } from 'svelte/easing';

	export let speed: number;
	export let easing: (t: number) => number = linear;

	let scrollBox: Element;

	let y = 0;

	function update() {
		if (!scrollBox) return;

		const box = scrollBox.getBoundingClientRect();
		const center = box.top + box.height / 2 - y;

		y = (center - window.innerHeight / 2) * (speed - 1);
	}

	const eased = (v: number): number => {
		const sign = Math.sign(v);
		const easedV = easing(Math.abs(v));
		return sign * easedV;
	};

	const unsubscribe = scrollPosition.subscribe((value) => {
		// this is cursed but it works
		update();
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div style={`transform: translateY(${eased(y)}px)`} bind:this={scrollBox}>
	<slot />
</div>

<style>
	div {
		/* transition: transform 0.01s ease-in-out; */
	}
</style>
