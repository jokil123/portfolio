<script lang="ts">
	import Page from '$lib/Page.svelte';
	import ProjectIcon from '$lib/ProjectIcon.svelte';
	import ReadMore from '$lib/ReadMore.svelte';
	import type { Article } from '$lib/cms';

	export let article: Article;
</script>

<Page>
	<div class="Project Icons">
		{#each article.meta.tags as tag}
			<ProjectIcon name={tag} />
		{/each}
	</div>
	<h1>
		{article.meta.title.split('\n')[0]}
		<br />
		<b>{article.meta.title.split('\n')[1]}</b>
	</h1>
	<p>{article.description}</p>
	<ReadMore href={`/projects/${article.id}`}>
		<img class="projectPreview" src={article.coverImage.url} alt={article.coverImage.alt} />
	</ReadMore>
</Page>

<style>
	h1 {
		font-weight: 300;
		text-align: center;
		font-size: 2em;
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.projectPreview {
		width: 19rem;
	}

	p {
		font-size: 1rem;
		width: 18.5rem;
		margin-bottom: 2rem;
	}
</style>
