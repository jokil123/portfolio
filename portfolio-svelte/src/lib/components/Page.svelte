<section>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
		scroll-snap-align: start;
	}

	@media (min-width: 768px) {
		section {
			height: auto;
		}
	}
</style>
