<script lang="ts">
	import HeaderSpacer from '$lib/components/HeaderSpacer.svelte';

	let indecies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	export let data;
</script>

<div class="content">
	<!-- <HeaderSpacer /> -->
	<h1><b>Projects</b></h1>

	{#each data.props.articles as article}
		<a href={`projects/${article.id}`}>
			<img src={article.coverImage.url} alt={article.coverImage.alt} />
			<h2>{article.meta.title}</h2>
		</a>
	{/each}
</div>

<style>
	h1 {
		/* font-size: 2rem; */
		margin-top: 6rem;
	}

	img {
		width: 100%;
	}

	.content {
		box-sizing: border-box;
		margin: 0 2rem;
	}

	h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 300;
		margin-bottom: 1.5rem;
	}

	a {
		color: var(--text-color);
	}
</style>
