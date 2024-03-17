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
		height: 100vh;
		scroll-snap-align: start;
	}

	@media (min-width: 768px) {
		section {
			height: auto;
		}
	}
</style>
