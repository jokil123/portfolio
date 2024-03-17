<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';

	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import type { Article } from '$lib/cms';
	import windowSize from '$lib/stores/windowSize';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
	import { cubicIn, linear } from 'svelte/easing';
	import { goofyEase } from '$lib/goofyEase';

	export let article: Article;
</script>

<Page>
	<ContentWidth>
		<div class="projectShowcase">
			<div class="projectInfo">
				<div class="projectIcons">
					{#each article.meta.tags as tag}
						<ProjectIcon name={tag} />
					{/each}
				</div>
				{#if $windowSize.width > 768}
					<!-- <a href={`/projects/${article.id}`}> -->
					<BoldTitle title={article.meta.title} align="left" />
					<!-- </a> -->
				{:else}
					<BoldTitle title={article.meta.title} />
				{/if}

				<p>{article.description}</p>
			</div>
			<div class="projectImage">
				{#if $windowSize.width > 768}
					<Scroller speed={0.75}>
						<img class="projectPreview" src={article.coverImage.url} alt={article.coverImage.alt} />
					</Scroller>
				{:else}
					<ReadMore href={`/projects/${article.id}`}>
						<img class="projectPreview" src={article.coverImage.url} alt={article.coverImage.alt} />
					</ReadMore>
				{/if}
			</div>
		</div>
	</ContentWidth>
</Page>

<style>
	.projectShowcase {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.projectPreview {
		width: 100%;
	}

	p {
		font-size: 1.1rem;
	}

	.projectInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
		background-color: rgb(0, 0, 0, 0.25);
		box-shadow: 0 0 5rem 10rem rgba(0, 0, 0, 0.25);
	}

	/* a {
		text-decoration: none;
	} */

	@media (min-width: 768px) {
		.projectIcons {
			order: 1000;
		}

		.projectShowcase {
			display: grid;
			width: 100%;
			justify-content: unset;
			margin: 20rem auto;
		}

		.projectShowcase > * {
			grid-column: 1;
			grid-row: 1;
		}

		.projectShowcase > *:first-child {
			justify-self: start;
		}

		.projectShowcase > *:last-child {
			justify-self: end;
		}

		.projectImage {
			width: 75%;
			max-width: 800px;
			/* Add filter to image to make it visible better */
			filter: brightness(0.75);
			z-index: -1;
		}

		.projectInfo {
			font-size: 1.5rem;
			width: 600px;
			align-items: flex-start;
		}
	}

	@media (min-width: 1536px) {
		.projectInfo {
			font-size: 2rem;
			width: 700px;
		}
	}
</style>
