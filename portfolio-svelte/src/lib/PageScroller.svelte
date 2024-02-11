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
</style>
