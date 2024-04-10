<script lang="ts">
	import { base } from '$app/paths';

	export let shift = false;
	export let margin: string = '0';
</script>

<div class="container" class:shift style={`margin: ${margin}`}>
	<img src={`${base}/images/frame_corner.svg`} alt="corner decoration" class="corner top left" />
	<div class="content">
		<slot />
	</div>
	<img
		src={`${base}/images/frame_corner.svg`}
		alt="corner decoration"
		class="corner bottom right"
	/>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1.75rem fit-content(100%) 1.75rem;
		grid-template-rows: 1rem fit-content(100%) 1rem;
	}

	.container.shift {
		margin-left: -1.75rem;
	}

	.content {
		grid-column: 2;
		grid-row: 2;
	}

	.corner {
		height: 5.5rem;

		&.top.left {
			grid-column: 1;
			grid-row: 1;
		}

		&.bottom.right {
			grid-column: 3;
			grid-row: 3;
			transform: rotate(180deg);
			align-self: end;
			justify-self: end;
		}
	}
</style>
