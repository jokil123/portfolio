<script lang="ts">
	import type { Article } from '$lib/cms';
	import BoldTitle from '$lib/components/BoldTitle.svelte';
	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
	import windowSize from '$lib/stores/windowSize';

	export let articles: Article[];
</script>

<Page>
	<div class="moreProjects">
		<h1>More <b>Projects</b></h1>
		{#each articles as article, i}
			{#if i > 0}
				<hr />
			{/if}

			<div class="project">
				<ReadMore href={`/projects/${article.id}`}>
					<img class="projectImage" src={`${article.coverImage.url}`} alt={article.meta.title} />
				</ReadMore>
				{#if $windowSize.width > 768}
					<div class="projectInfo" class:flipped={i % 2 == 0}>
						<BoldTitle title={article.meta.title} align="left" />
						<p>{article.description}</p>
						<div class="lowerSplit">
							<div class="projectIcons">
								{#each article.meta.tags as tag}
									<ProjectIcon name={tag} />
								{/each}
							</div>
							<a href={`/projects/${article.id}`} class="readMore">
								<TextDecoration
									>Read More
									<img class="linkIcon small" src="/images/link_icon.svg" alt="Link" />
								</TextDecoration>
							</a>
						</div>
					</div>
				{/if}
			</div>
		{/each}

		<a href="/projects" class="allProjects">
			<TextDecoration plus line>
				All Projects
				<img class="linkIcon" src="/images/link_icon.svg" alt="Link" />
			</TextDecoration>
		</a>
	</div>
</Page>

<style lang="scss">
	.moreProjects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-bottom: 20rem;
		box-shadow: 0 0 10rem 10rem rgb(0, 0, 0);
	}

	.projectImage {
		width: 19rem;
		margin-bottom: 1rem;
	}

	.allProjects {
		font-weight: 700;
		text-decoration: none;
		font-size: 2rem;
		width: 40rem;
	}

	.linkIcon {
		width: 1.5rem;
		margin-left: 0.5rem;

		&.small {
			width: 1rem;
			margin-left: 0.3rem;
		}
	}

	.projectInfo {
		flex-grow: 1;
		margin: 0 1.5rem;

		&.flipped {
			order: -1;
		}
	}

	.project {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 3rem 0rem;
		width: 50rem;
	}

	hr {
		width: 40rem;
		border-color: rgba(0, 0, 0, 0.274);
	}

	.lowerSplit {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-right: 5rem;
	}

	.readMore {
		text-decoration: none;
		color: white;
		font-size: 1.1rem;
	}

	@media (min-width: 768px) {
		.projectImage {
			margin: 0 1.5rem;
		}
	}
</style>
