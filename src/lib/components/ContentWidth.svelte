<script lang="ts">
	// well this is just cursed isn't it
	export let style: string = '';
</script>

<div {style}>
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		display: block;
		padding: 0 2.5rem;
		width: 100%;
		/* height: 100%; */

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 768px) {
		div {
			padding: 0 4rem;
		}
	}

	@media (min-width: 1180px) {
		div {
			max-width: calc(1180px - 8rem);
			margin: 0 auto;
		}
	}

	@media (min-width: 1536px) {
		div {
			max-width: calc(1536px - 8rem);
		}
	}
</style>
