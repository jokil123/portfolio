<script lang="ts">
	import BoldTitle from '$lib/components/BoldTitle.svelte';

	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import type { Article } from '$lib/cms';
	import windowSize from '$lib/stores/windowSize';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import { base } from '$app/paths';

	export let article: Article;
	export let invert: boolean = true;
</script>

<ContentWidth>
	<div class="projectShowcase" class:invert>
		<div class="projectInfo">
			<div class="projectIcons">
				{#each article.meta.tags as tag}
					<ProjectIcon name={tag} />
				{/each}
			</div>
			{#if $windowSize.width > 768}
				<TextFrame shift>
					<BoldTitle title={article.meta.title} align="left" />
				</TextFrame>
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
				<ReadMore href={`${base}/projects/${article.id}`}>
					<img class="projectPreview" src={article.coverImage.url} alt={article.coverImage.alt} />
				</ReadMore>
			{/if}
		</div>
	</div>
</ContentWidth>

<style lang="scss">
	.projectShowcase {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.projectImage {
		width: 100%;
		/* Add filter to image to make it visible better */
		filter: brightness(0.5);
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
		// margin-bottom: 2rem;
		// background-color: rgb(rgb(2, 2, 2), 0.25);
		// box-shadow: 0 0 5rem 5rem rgba(rgb(2, 2, 2), 0.25);
	}

	@media (min-width: 768px) {
		.projectIcons {
			order: 1000;
		}

		.projectShowcase {
			display: grid;
			width: 100%;
			justify-content: unset;
			margin: 15rem auto;
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
			z-index: -1;
		}

		.projectInfo {
			font-size: 1.5rem;
			width: 600px;
			align-items: flex-start;
		}

		.invert {
			&.projectShowcase > *:first-child {
				justify-self: end;
			}

			&.projectShowcase > *:last-child {
				justify-self: start;
			}
		}
	}

	@media (min-width: 1536px) {
		.projectInfo {
			font-size: 2rem;
			width: 700px;
		}
	}
</style>
