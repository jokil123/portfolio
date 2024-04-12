<section>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100dvh;
		scroll-snap-align: start;

		box-sizing: border-box;
		padding-top: 6rem;
		padding-bottom: 2rem;
	}

	@media (min-width: 768px) {
		section {
			height: auto;

			padding-top: 0;
			padding-bottom: 0;
		}
	}
</style>
