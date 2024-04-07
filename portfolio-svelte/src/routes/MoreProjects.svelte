<script lang="ts">
	import type { Article } from '$lib/cms';
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import windowSize from '$lib/stores/windowSize';
	import Overlay from '$lib/components/Overlay.svelte';

	export let articles: Article[];

	// repeats or shortens the array to a given length
	function makeShitUp(o: Article[], n: number): Article[] {
		const a = [];
		for (let i = 0; i < n; i++) {
			a.push(o[i % o.length]);
		}
		return a;
	}
</script>

<Page>
	<ContentWidth>
		<div class="moreProjects">
			<TextFrame>
				<h1 class="title">More <b>Projects</b></h1>
			</TextFrame>

			<!-- <div class="projectsGridContainer"> -->
			<div class="projectsGrid">
				<div class="fadeout"></div>
				{#each makeShitUp(articles, 100) as article}
					<img class="projectImage" src={article.coverImage.url} alt={article.coverImage.alt} />
				{/each}
			</div>

			<a class="moreProjectsLink" href="/projects"
				>More Projects
				<img class="linkIcon" src="/images/link_icon.svg" alt="decoration" />
			</a>
		</div>
	</ContentWidth>
</Page>

<style lang="scss">
	.moreProjects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		box-sizing: border-box;
		padding-top: 7rem;
		padding-bottom: 2rem;
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
