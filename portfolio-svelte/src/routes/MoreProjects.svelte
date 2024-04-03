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

	const articleLimit = 3;
</script>

<Page>
	<ContentWidth>
		<div class="moreProjects">
			<TextFrame>
				<h1 class="title">More <b>Projects</b></h1>
			</TextFrame>
			<Overlay>
				<div class="fadeout" slot="overlay"></div>
				<div class="projectsGrid">
					{#each makeShitUp(articles, 100) as article}
						<img class="projectImage" src={article.coverImage.url} alt={article.coverImage.alt} />
					{/each}
				</div>
			</Overlay>
		</div>
	</ContentWidth>
</Page>

<style lang="scss">
	.moreProjects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		margin-bottom: 2rem;
		margin: 0.5rem 1rem;
	}

	// a 2xn grid of projects
	.projectsGrid {
		margin-top: 2rem;
		overflow: hidden;
		height: 28rem;

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
		align-self: flex-end;
		background: linear-gradient(transparent, rgb(0, 0, 0));
	}
</style>
