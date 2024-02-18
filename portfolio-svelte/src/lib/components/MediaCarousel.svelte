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

	let modalVisible = false;
</script>

<div
	class="carousel"
	class:visible={modalVisible}
	on:click={() => (modalVisible = false)}
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			modalVisible = false;
		}
	}}
	role="button"
	tabindex="0"
>
	{#each media as item, i}
		<div class="slide" class:visible={i === current}>
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

	<div class="controls">
		<button class="previous nav" on:click|stopPropagation={previous}>&lt;</button>
		<button
			class:hidden={modalVisible}
			class="view"
			on:click|stopPropagation={() => (modalVisible = true)}>View</button
		>
		<button class="next nav" on:click|stopPropagation={next}>&gt;</button>
	</div>
</div>

<style>
	.carousel {
		display: grid;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background-color: rgb(5, 5, 5);
	}

	.carousel.visible {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}

	.slide {
		grid-column: 1;
		grid-row: 1;
		visibility: hidden;
	}

	.slide.visible {
		visibility: visible;
	}

	img,
	video {
		width: 100%;
	}

	.controls {
		grid-column: 1;
		grid-row: 1;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.view {
		flex-grow: 1;
		color: transparent;
	}

	.view:hover {
		cursor: pointer;
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.view.hidden {
		display: none;
	}

	button {
		height: 100%;
		background-color: transparent;
		border: none;
		color: white;
		font-size: 2rem;
		transition: background-color 0.3s;

		user-select: none;
	}

	.nav:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
