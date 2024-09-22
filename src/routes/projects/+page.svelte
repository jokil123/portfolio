<script lang="ts">
	import { base } from '$app/paths';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import PageScroller from '$lib/components/PageScroller.svelte';
	import type { Article } from '$lib/cms';
	import { constructFilterFunc, type Filter } from '$lib/collectFilters';
	import ArticleFilterSort from '$lib/components/ArticleFilterSort.svelte';
	import HeaderSpacer from '$lib/components/HeaderSpacer.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';

	export let data;
	let filteredArticles: Article[] = data.props.articles;

	let displayMethod: 'grid' | 'list' = 'grid';
</script>

<PageScroller scrollSnapMobile={false}>
	<ContentWidth style="justify-content: unset">
		<div class="content">
			<HeaderSpacer />
			<TextFrame margin="2rem 0"><h1 class="title">Projects</h1></TextFrame>

			<ArticleFilterSort
				articles={data.props.articles}
				filterList={data.props.filters}
				bind:filteredArticles
				bind:displayMethod
			/>

			{#if displayMethod === 'list'}
				<div class="projectsList">
					<hr />
					{#each filteredArticles as article}
						<div class="project">
							<img
								class="coverImage"
								src={article.coverImage.url}
								alt={article.coverImage.alt}
								loading="lazy"
							/>
							<a href={`${base}/projects/${article.id}`} class="hover-scale-105">
								<h2>{article.meta.title}</h2>
							</a>
						</div>
						<hr />
					{/each}
				</div>
			{/if}
			{#if displayMethod === 'grid'}
				<div class="projectsGrid">
					{#each filteredArticles as article}
						<ReadMore href={`${base}/projects/${article.id}`} text={article.meta.title}>
							<img
								class="coverImage"
								src={article.coverImage.url}
								alt={article.coverImage.alt}
								loading="lazy"
							/>
						</ReadMore>
					{/each}
				</div>
			{/if}

			{#if filteredArticles.length === 0}
				<div class="noProjects">
					<p>No projects found :/</p>
					<p><i>Have a look at this ramdom cat instead:</i></p>
					<img src="https://cataas.com/cat" alt="Random cat" />
				</div>
			{/if}
		</div>
	</ContentWidth>
</PageScroller>

<style lang="scss">
	.projectsGrid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;

		.coverImage {
			width: 100%;
			height: 100%;
			object-fit: cover;
			aspect-ratio: 1.618;
		}
	}

	.projectsList {
		width: 100%;

		.project {
			// width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 2rem;

			.coverImage {
				width: 10rem;
				aspect-ratio: 1.618;
				object-fit: cover;
			}

			h2 {
				font-weight: 300;
				font-size: 1.25rem;
			}
		}

		hr {
			margin: 1.25rem 0rem;
			opacity: 0.5;
			border-bottom: none;
		}
	}

	.title {
		margin: 0.5rem 1rem;
		font-weight: bold;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 3rem;
		padding-bottom: 5rem;
	}

	a {
		color: var(--text-color);
	}

	.noProjects {
		text-align: center;
		width: 100%;

		img {
			width: 100%;
			max-width: 20rem;
			margin: 1rem 0;
		}
	}
</style>
