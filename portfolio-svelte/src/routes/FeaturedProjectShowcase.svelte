<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';

	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import type { Article } from '$lib/cms';

	export let article: Article;
</script>

<Page>
	<div class="Project Icons">
		{#each article.meta.tags as tag}
			<ProjectIcon name={tag} />
		{/each}
	</div>
	<BoldTitle title={article.meta.title} />
	<p>{article.description}</p>
	<ReadMore href={`/projects/${article.id}`}>
		<img class="projectPreview" src={article.coverImage.url} alt={article.coverImage.alt} />
	</ReadMore>
</Page>

<style>
	.projectPreview {
		width: 19rem;
	}

	p {
		font-size: 1rem;
		width: 18.5rem;
		margin-bottom: 2rem;
	}
</style>
