<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';

	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import type { Article } from '$lib/cms';
	import windowSize from '$lib/windowSize';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Scroller from '$lib/components/Scroller.svelte';

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
					<BoldTitle title={article.meta.title} align="left" />
				{:else}
					<BoldTitle title={article.meta.title} />
				{/if}

				<p>{article.description}</p>
			</div>
			<div class="projectImage">
				{#if $windowSize.width > 768}
					<Scroller speed={2}>
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
	}

	@media (min-width: 768px) {
		.projectIcons {
			order: 1000;
		}

		.projectShowcase {
			display: grid;
			width: 100%;
			justify-content: unset;
			margin: 10rem auto;
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
			width: 50%;
			/* max-width: 600px; */
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
