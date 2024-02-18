<script lang="ts">
	type CarouselImage = {
		type: 'CarouselImage';
		url: string;
		alt: string;
	};

	type CarouselVideo = {
		type: 'CarouselVideo';
		url: string;
		alt: string;
	};

	export let media: (CarouselImage | CarouselVideo)[] = [];

	let current = 0;

	function next() {
		current = (current + 1) % media.length;
	}

	function previous() {
		current = (current - 1 + media.length) % media.length;
	}
</script>

<div class="carousel">
	{#if media[current].type === 'CarouselImage'}
		<img src={media[current].url} alt={media[current].alt} />
	{:else}
		<video controls autoplay loop muted>
			<source src={media[current].url} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	{/if}

	<button on:click={previous}>&lt;</button>
	<button on:click={next}>&gt;</button>

	<!-- {#each media as item, i}
		<div class="slide">
			{#if item.type === 'CarouselImage'}
				<img src={item.url} alt={item.alt} />
			{:else}
				<video controls autoplay loop muted>
					<source src={item.url} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			{/if}
		</div>
	{/each} -->
</div>

<style>
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
	}

	img,
	video {
		width: 100%;
	}

	.carousel {
		overflow: hidden;
	}

	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		font-size: 2rem;
		color: white;
	}
</style>
