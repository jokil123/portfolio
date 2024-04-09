<script lang="ts">
	import { base } from '$app/paths';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import makeShitUp from '$lib/makeShitUp';
	import PageScroller from '$lib/components/PageScroller.svelte';
	import type { Article } from '$lib/cms';
	import { constructFilterFunc, type Filter } from '$lib/collectFilters';

	export let data;

	let sortMethod: string = 'Newest';
	let sortMethods: { name: string; sortFn: (a: Article, b: Article) => boolean }[] = [
		{
			name: 'Newest',
			sortFn: (a, b) => new Date(a.meta.publishTimestamp) > new Date(b.meta.publishTimestamp)
		},
		{
			name: 'Oldest',
			sortFn: (a, b) => new Date(a.meta.publishTimestamp) < new Date(b.meta.publishTimestamp)
		},
		{
			name: 'A-Z',
			sortFn: (a, b) => a.meta.title < b.meta.title
		},
		{
			name: 'Z-A',
			sortFn: (a, b) => a.meta.title > b.meta.title
		}
	];

	$: console.log(sortMethod);

	let searchQuery: string = '';

	let selectedFilters: Filter[] = [];

	// const filterSortArticles = (articles: Article[]): Article[] => {
	// 	let filteredArticles = articles.filter((article) => {
	// 		if (selectedFilters.length === 0) return true;

	// 		for (let filter of selectedFilters) {
	// 			let filterFunc = constructFilterFunc(filter);
	// 			if (!filterFunc(article)) return false;
	// 		}
	// 	});

	// 	let sortedArticles = filteredArticles.sort((a, b) => {
	// 		let sortMethodObj = sortMethods.find((method) => method.name === sortMethod);
	// 		return sortMethodObj?.sortFn(a, b);
	// 	});
	// };
</script>

<PageScroller scrollSnapMobile={false}>
	<ContentWidth style="justify-content: unset">
		<div class="content">
			<div class="headerSpacer"></div>
			<TextFrame><h1 class="title">Projects</h1></TextFrame>

			<div class="viewSettings">
				<!-- <p><b>Settings</b></p> -->
				<div>
					<p>Sort</p>
					<select bind:value={sortMethod}>
						{#each sortMethods as method}
							<option value={method.name}>{method.name}</option>
						{/each}
					</select>
				</div>

				<div>
					<p>Filter</p>
					<select
						on:change={(e) => {
							console.log(e);
						}}
					>
						{#each data.props.filters as filter}
							<option value={filter}>{filter.name}</option>
						{/each}
					</select>
				</div>

				<p>Display</p>
				<input type="text" placeholder="Search" bind:value={searchQuery} />
			</div>
			<div class="activeFilters">
				{#each selectedFilters as filter}
					<span>{filter}</span>
				{/each}
			</div>

			<div class="projects">
				{#each makeShitUp(data.props.articles, 100) as article}
					<a href={`${base}/projects/${article.id}`}>
						<img
							class="coverImage"
							src={article.coverImage.url}
							alt={article.coverImage.alt}
							loading="lazy"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div></div>
	</ContentWidth>
</PageScroller>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;
	}

	.headerSpacer {
		height: 5rem;
	}

	.title {
		margin: 0.5rem 1rem;
		font-weight: bold;
	}

	.coverImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.viewSettings {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	a {
		color: var(--text-color);
	}
</style>
