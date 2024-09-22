<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import MediaCarousel from '$lib/components/MediaCarousel.svelte';
	import HeaderSpacer from '$lib/components/HeaderSpacer.svelte';
	import ArticleRenderer from '$lib/components/articleRenderer/ArticleRenderer.svelte';
	import { base } from '$app/paths';
	import PageScroller from '$lib/components/PageScroller.svelte';

	export let data;

	let dateStr = new Date(data.article.meta.publishTimestamp * 1000).toDateString();
</script>

<PageScroller scrollSnapMobile={false}>
	<div class="container">
		<HeaderSpacer />

		<div class="title">
			<BoldTitle title={data.article.meta.title} align="left" />
		</div>

		<div class="tags">
			{#if data.article.meta.featured}
				<div class="item hover-scale-105">featured</div>
			{/if}

			{#each data.article.meta.tags as tag}
				<div class="item hover-scale-105">{tag}</div>
			{/each}

			{#each data.article.meta.tools as tool}
				<div class="item hover-scale-105">{tool}</div>
			{/each}
		</div>

		<p class="description">{data.article.description}</p>
		<p class="date">{dateStr}</p>

		<div class="content">
			<ArticleRenderer source={data.article.content} />
		</div>

		{#if data.article.images.length > 0}
			<MediaCarousel
				media={data.article.images.map((i) => {
					return {
						type: 'CarouselImage',
						url: i.url,
						alt: i.alt
					};
				})}
			/>
		{/if}

		<a class="back" href={`${base}/projects`}><h1><b>Back</b></h1></a>
	</div>
</PageScroller>

<style lang="scss">
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		.item {
			border: 1px solid rgba(255, 255, 255, 0.5);
			padding: 0.25rem 0.5rem;
			font-size: 0.9em;
		}
	}

	.title {
		font-size: 1.5em;
		margin-bottom: 0.75rem;
		margin-top: 5rem;
	}

	.description {
		font-size: 1.1em;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.date {
		font-size: 0.9em;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.content {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	.back > h1 {
		display: block;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 2rem;
		color: var(--text-color);
		font-size: 1.25em;
	}

	a.back {
		color: var(--text-color);
		/* text-decoration: none; */
	}

	.container {
		width: 100%;
		box-sizing: border-box;
		padding: 0 2rem;
	}

	@media (max-width: 375px) {
		.container {
			font-size: 1.25rem;
		}

		.title {
			font-size: 1em;
		}

		.description {
			font-size: 1em;
		}
	}

	@media (min-width: 424px) {
		.container {
			padding: 0 3rem;
		}
	}

	@media (min-width: 768px) {
		.container {
			padding: 0 4rem;
		}
	}

	@media (min-width: 1024px) {
		.container {
			width: 50rem;
			padding: 0;
			margin: 0 auto;
		}
	}
</style>
