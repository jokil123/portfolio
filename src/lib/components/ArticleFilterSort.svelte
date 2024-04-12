<script lang="ts">
	import { base } from '$app/paths';
	import type { Article } from '$lib/cms';
	import { filterSortArticles, type Filter, sortMethods } from '$lib/collectFilters';

	export let displayMethod: 'grid' | 'list' = 'grid';

	export let articles: Article[];
	export let filterList: Filter[];

	export let filteredArticles: Article[] = articles;

	let sortMethod: string = 'Newest';
	let searchQuery: string = '';

	let selectedFilters: Filter[] = [];

	$: filteredArticles = filterSortArticles(articles, selectedFilters, searchQuery, sortMethod);

	let randomQueryTime = 0;
	$: {
		filteredArticles;
		randomQueryTime = Math.random() / 5 + 0.1;
	}
</script>

<div class="container">
	<div class="viewSettings">
		<!-- <p><b>Settings</b></p> -->
		<div class="setting">
			<p>Sort by</p>
			<select bind:value={sortMethod}>
				{#each sortMethods as method}
					<option value={method.name}>{method.name}</option>
				{/each}
			</select>
		</div>

		<div class="setting">
			<p>Filter</p>
			<select
				on:change={(e) => {
					// check if the filter is already selected (do this by value comparison, not reference comparison because the filter objects are different instances)
					const filter = JSON.parse(e.currentTarget.value);

					if (!selectedFilters.some((f) => JSON.stringify(f) === e.currentTarget.value)) {
						selectedFilters = [...selectedFilters, filter];
					}
				}}
			>
				{#each filterList as filter}
					<option value={JSON.stringify(filter)}>{filter.name}</option>
				{/each}
			</select>
		</div>

		<button
			class="clear"
			on:click={() => {
				selectedFilters = [];
				searchQuery = '';
			}}
			>Clear
		</button>

		<div class="resultCount">
			{@html '<!-- > buys search engine -->'}
			{@html '<!-- > looks inside -->'}
			{@html '<!-- > random number generator -->'}
			<p>
				{filteredArticles.length} results in {(Math.round(randomQueryTime * 100) / 100).toFixed(2)}s
			</p>
		</div>

		<div class="grower"></div>

		<div class="displaySelect">
			<button
				class="displayButton"
				class:active={displayMethod === 'grid'}
				on:click={() => (displayMethod = 'grid')}
			>
				<img src={`${base}/images/display_grid.png`} alt="grid view" />
			</button>
			<button
				class="displayButton"
				class:active={displayMethod === 'list'}
				on:click={() => (displayMethod = 'list')}
			>
				<img src={`${base}/images/display_list.svg`} alt="list view" />
			</button>
		</div>

		<input
			type="text"
			placeholder="Search"
			bind:value={searchQuery}
			class="searchBar"
			maxlength="69"
		/>
	</div>
	<div class="activeFiltersList">
		{#if searchQuery}
			<button class="filter" on:click={() => (searchQuery = '')}>
				{searchQuery}
				<img src={`${base}/images/x_icon.png`} alt="remove filter" />
			</button>
		{/if}
		{#each selectedFilters as filter}
			<button
				class="filter"
				on:click={(e) => {
					selectedFilters = selectedFilters.filter((f) => f.name !== filter.name);
				}}
			>
				{filter.name}
				<img src={`${base}/images/x_icon.png`} alt="remove filter" />
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		margin: 1rem 0;
	}

	.viewSettings {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1.25rem;
		flex-wrap: wrap;
		// align-items: center;
	}

	.setting {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		select {
			margin: 0.5rem 0;
			padding: 0.5rem;
			background-color: transparent;
			color: white;
			// border: none;
			font-family: unset;
		}

		select option {
			background-color: rgb(10, 10, 10);
			border-radius: 0;
		}
	}

	.activeFiltersList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 0.5rem;
	}

	.filter {
		background: none;
		border-radius: 0;
		border: 1px solid rgba(255, 255, 255, 0.5);
		color: var(--text-color);
		margin: 0.5rem 0;
		padding: 0.5rem;
		font-size: 1rem;

		img {
			width: 0.75rem;
			height: 0.75rem;
		}
	}

	.displaySelect {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;

		.displayButton {
			background: none;
			border: none;
			margin: 0.5rem 0;
			padding: 0;
			cursor: pointer;
			opacity: 0.5;

			&.active {
				opacity: 1;
			}

			img {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	}

	.searchBar {
		background-color: transparent;
		border: 1px solid rgba(255, 255, 255, 0.5);
		color: var(--text-color);
		margin: 0.5rem;
		padding: 0.5rem;
		font-size: 1rem;

		transition: flex-grow 0.25s;

		&:focus {
			flex-grow: 1;
		}
	}

	.clear {
		background: none;
		border: 1px solid rgba(255, 255, 255, 0.5);
		color: var(--text-color);
		cursor: pointer;
		font-size: 1rem;
		margin: 0.5rem 0;
		padding: 0.5rem;
	}

	.grower {
		flex-grow: 1;
	}

	@media (max-width: 1060px) {
		.resultCount {
			display: none;
		}
	}

	@media (max-width: 900px) {
		.grower {
			display: none;
		}

		.searchBar {
			flex-grow: 1;
		}

		.clear {
			display: none;
		}
	}
</style>
