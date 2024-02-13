<div class="overlayContainer">
	<div class="original">
		<slot />
	</div>
	<div class="overlay">
		<slot name="overlay" />
	</div>
</div>

<style>
	.overlayContainer {
		display: grid;
	}

	.original,
	.overlay {
		grid-column: 1;
		grid-row: 1;
	}

	.overlay {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
