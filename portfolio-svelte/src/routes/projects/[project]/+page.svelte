<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import Page from '$lib/components/Page.svelte';
	import MediaCarousel from '$lib/components/MediaCarousel.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import HeaderSpacer from '$lib/components/HeaderSpacer.svelte';
	import ArticleRenderer from '$lib/components/articleRenderer/ArticleRenderer.svelte';

	export let data;
</script>

<div class="content">
	<HeaderSpacer />
	<BoldTitle title={data.article.meta.title} align="left" />
	<ArticleRenderer source={data.article.content} />

	<MediaCarousel
		media={data.article.images.map((i) => {
			return {
				type: 'CarouselImage',
				url: i.url,
				alt: i.alt
			};
		})}
	/>

	<a class="back" href="/projects"><h1><b>Back</b></h1></a>
</div>

<style>
	.content {
		/* width: 18.5rem; */
		box-sizing: border-box;
		margin: 0 2rem;
	}

	img {
		width: 150px;
		/* margin: 1rem 0; */
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
