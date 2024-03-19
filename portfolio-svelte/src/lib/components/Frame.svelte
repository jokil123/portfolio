<script lang="ts">
	export let shift = false;
</script>

<div class="container" class:shift>
	<img src="/images/frame_corner.svg" alt="corner decoration" class="corner top left" />
	<div class="content">
		<slot />
	</div>
	<img src="/images/frame_corner.svg" alt="corner decoration" class="corner bottom right" />
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
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}

	.corner {
		&.top.left {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}

		&.bottom.right {
			grid-column: 3 / 4;
			grid-row: 3 / 4;
			transform: rotate(180deg);
			align-self: end;
			justify-self: end;
		}
	}
</style>
