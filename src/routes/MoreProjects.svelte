<script lang="ts">
	import type { Article } from '$lib/cms';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import { base } from '$app/paths';
	import ReadMore from '$lib/components/ReadMore.svelte';

	export let articles: Article[];
</script>

<ContentWidth>
	<div class="moreProjects">
		<TextFrame>
			<h1 class="title">More <b>Projects</b></h1>
		</TextFrame>

		<!-- <div class="projectsGridContainer"> -->
		<div class="projectsGrid">
			<div class="fadeout"></div>
			{#each articles as article}
				<ReadMore href={`${base}/projects/${article.id}`}>
					<img class="projectImage" src={article.coverImage.url} alt={article.coverImage.alt} />
				</ReadMore>
			{/each}
		</div>

		<a class="moreProjectsLink" href={`${base}/projects`}
			>More Projects
			<img class="linkIcon" src={`${base}/images/link_icon.svg`} alt="decoration" />
		</a>
	</div>
</ContentWidth>

<style lang="scss">
	.moreProjects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 150dvh;

		box-sizing: border-box;
		padding-top: 2rem;
		padding-bottom: 2rem;
		// margin-bottom: 10rem;
	}

	.title {
		margin-bottom: 2rem;
		margin: 0.5rem 1rem;
		text-align: center;
	}

	.projectsGrid {
		margin-top: 2rem;
		overflow: hidden;
		position: relative;

		height: 0;
		flex-grow: 1;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(100px + 20%), 1fr));
		grid-gap: 1rem;
		justify-content: center;
	}

	.projectImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1.618;
	}

	.fadeout {
		width: 100%;
		height: 10rem;
		background: linear-gradient(transparent, rgb(0, 0, 0));
		bottom: 0;
		position: absolute;
	}

	.moreProjectsLink {
		margin-top: 2rem;
		font-size: 1rem;
		color: white;
		transition: transform 250ms var(--bouce);
	}

	.moreProjectsLink:hover {
		transform: scale(1.1);
	}

	.linkIcon {
		height: 1em;
	}

	.projectGridContainer {
		width: 100%;
		// height: 25rem;
		flex-grow: 1;
		background-color: blue;
		position: relative;
	}

	@media (min-width: 768px) {
		.moreProjects {
			padding-top: 7rem;
			height: auto;
		}

		.projectsGrid {
			height: 40rem;
		}

		.moreProjectsLink {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 1024px) {
		.projectsGrid {
			height: 50rem;
		}

		.moreProjectsLink {
			font-size: 1.5rem;
		}
	}
</style>
