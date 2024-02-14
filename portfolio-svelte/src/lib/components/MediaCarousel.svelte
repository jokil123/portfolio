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

	let currentSlide = 0;
</script>

<div class="carousel">
	{#each media as item, i}
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
	{/each}
</div>

<style>
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
	}
</style>
