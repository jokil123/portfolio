<div>
	<slot />
</div>

<style>
	div {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		overscroll-behavior-y: contain;
		height: 100vh;
	}

	@media (min-width: 768px) {
		div {
			scroll-snap-type: none;
			/* overflow-y: scroll; */
		}
	}
</style>
