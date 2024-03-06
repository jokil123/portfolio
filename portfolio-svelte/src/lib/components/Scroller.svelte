<script lang="ts">
	export let speed: number;

	let scrollBox: Element;

	let y = 0;

	function update() {
		const box = scrollBox.getBoundingClientRect();
		const center = box.top + box.height / 2 - y;

		y = (center - window.innerHeight / 2) * (speed - 1);

		// console.log(y);
	}
</script>

<div style={`transform: translateY(${y}px)`} bind:this={scrollBox}>
	<!-- <div bind:this={scrollBox}> -->
	<slot />
</div>
<!-- <p>{y}</p> -->

<svelte:window on:scroll={() => console.log('abc')} on:resize={update} />
