<div>
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		display: block;
		padding: 0 2rem;
		width: 100%;
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
