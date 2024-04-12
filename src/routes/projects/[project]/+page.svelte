<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import MediaCarousel from '$lib/components/MediaCarousel.svelte';
	import HeaderSpacer from '$lib/components/HeaderSpacer.svelte';
	import ArticleRenderer from '$lib/components/articleRenderer/ArticleRenderer.svelte';
	import { base } from '$app/paths';
	import PageScroller from '$lib/components/PageScroller.svelte';
	import ContentWidth from '$lib/components/ContentWidth.svelte';

	export let data;

	let dateStr = new Date(data.article.meta.publishTimestamp * 1000).toDateString();
</script>

<PageScroller scrollSnapMobile={false}>
	<ContentWidth style="justify-content: unset">
		<div class="container">
			<HeaderSpacer />

			<div class="title">
				<BoldTitle title={data.article.meta.title} align="left" />
			</div>

			<div class="tags">
				{#if data.article.meta.featured}
					<div class="item">featured</div>
				{/if}

				{#each data.article.meta.tags as tag}
					<div class="item">{tag}</div>
				{/each}

				{#each data.article.meta.tools as tool}
					<div class="item">{tool}</div>
				{/each}
			</div>

			<p class="description">{data.article.description}</p>
			<p class="date">{dateStr}</p>

			<div class="content">
				<ArticleRenderer source={data.article.content} />
			</div>
			<MediaCarousel
				media={data.article.images.map((i) => {
					return {
						type: 'CarouselImage',
						url: i.url,
						alt: i.alt
					};
				})}
			/>

			<a class="back" href={`${base}/projects`}><h1><b>Back</b></h1></a>
		</div>
	</ContentWidth>
</PageScroller>

<style lang="scss">
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		.item {
			border: 1px solid rgba(255, 255, 255, 0.5);
			padding: 0.25rem 0.5rem;
			font-size: 0.9rem;
		}
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		margin-top: 5rem;
	}

	.description {
		font-size: 1.1rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.date {
		font-size: 0.9rem;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.content {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	.container {
		/* width: 18.5rem; */
		box-sizing: border-box;
		margin: 0 2rem;
	}

	.back > h1 {
		display: block;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 2rem;
		color: var(--text-color);
		font-size: 1.25rem;
	}

	a.back {
		color: var(--text-color);
		/* text-decoration: none; */
	}
</style>
