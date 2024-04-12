import type { Article } from './cms';

export type FilterType = 'tag' | 'tool' | 'year';

export type Filter = {
	name: string;
	filterType: FilterType;
};

export type Filters = {
	tags: Filter[];
	tools: Filter[];
	years: Filter[];
};

export const collectFilters = (articles: Article[]): Filters => {
	const tags = new Set<string>();
	const tools = new Set<string>();

	articles.forEach((article) => {
		article.meta.tags.forEach((tag) => tags.add(tag));
		article.meta.tools.forEach((tool) => tools.add(tool));
	});

	// Add years
	const years = new Set<string>();
	articles.forEach((article) => {
		years.add(new Date(article.meta.publishTimestamp * 1000).getFullYear().toString());
	});

	return {
		tags: Array.from(tags).map((tag) => ({ name: tag, filterType: 'tag' }) as Filter),
		tools: Array.from(tools).map((tool) => ({ name: tool, filterType: 'tool' }) as Filter),
		years: Array.from(years).map((year) => ({ name: year, filterType: 'year' }) as Filter)
	};
};

// this has to be done so Filter is serializable
export const constructFilterFunc = (filter: Filter): ((article: Article) => boolean) => {
	if (filter.filterType === 'tag') {
		return (article: Article) => article.meta.tags.includes(filter.name);
	} else if (filter.filterType === 'tool') {
		return (article: Article) => article.meta.tools.includes(filter.name);
	} else if (filter.filterType === 'year') {
		return (article: Article) =>
			new Date(article.meta.publishTimestamp * 1000).getFullYear().toString() === filter.name;
	}
	throw new Error('Unknown filter type');
};

export const sortMethods: { name: string; sortFn: (a: Article, b: Article) => number }[] = [
	{
		name: 'Newest',
		sortFn: (a, b) => {
			return (
				new Date(b.meta.publishTimestamp * 1000).getTime() -
				new Date(a.meta.publishTimestamp * 1000).getTime()
			);
		}
	},
	{
		name: 'Oldest',
		sortFn: (a, b) => {
			return (
				new Date(a.meta.publishTimestamp * 1000).getTime() -
				new Date(b.meta.publishTimestamp * 1000).getTime()
			);
		}
	},
	{
		name: 'A-Z',
		sortFn: (a, b) => {
			return a.meta.title.localeCompare(b.meta.title);
		}
	},
	{
		name: 'Z-A',
		sortFn: (a, b) => {
			return b.meta.title.localeCompare(a.meta.title);
		}
	}
];

export const filterSortArticles = (
	articles: Article[],
	filters: Filter[],
	search: string,
	sortMethod: string
): Article[] => {
	let filteredArticles = articles;
	for (let filter of filters) {
		filteredArticles = filteredArticles.filter(constructFilterFunc(filter));
	}

	let sortMethodObj = sortMethods.find((method) => method.name === sortMethod);
	let sortMethodFn = sortMethodObj ? sortMethodObj : sortMethods[0];

	let sortedArticles = filteredArticles.sort((a, b) => {
		return sortMethodFn.sortFn(a, b);
	});

	return sortedArticles;
};
