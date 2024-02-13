<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import Page from '$lib/components/Page.svelte';
	import Carousel from '$lib/components/MediaCarousel.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<Page>
	<BoldTitle title={data.article.meta.title} />

	<div class="content">
		<SvelteMarkdown source={data.article.content} />
	</div>

	<Carousel>
		{#each data.article.images as img}
			<img src={img.url} alt={img.alt} />
		{/each}
	</Carousel>

	<a href="/projects">Back to Projects</a>
</Page>

<style>
	.content {
		/* width: 18.5rem; */
		margin: 0 2rem;
	}

	img {
		width: 150px;
		/* margin: 1rem 0; */
	}
</style>
