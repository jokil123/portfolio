import type { Article } from './cms';

export type FilterType = 'tag' | 'tool' | 'year';

export type Filter = {
	name: string;
	filterType: FilterType;
};

export const collectFilters = (articles: Article[]): Filter[] => {
	const tags = new Set<string>();
	const tools = new Set<string>();

	articles.forEach((article) => {
		article.meta.tags.forEach((tag) => tags.add(tag));
		article.meta.tools.forEach((tool) => tools.add(tool));
	});

	// Add years
	const years = new Set<string>();
	articles.forEach((article) => {
		years.add(new Date(article.meta.publishTimestamp).getFullYear().toString());
	});

	return [
		...Array.from(tags).map((tag) => ({ name: tag, filterType: 'tag' as FilterType })),
		...Array.from(tools).map((tool) => ({ name: tool, filterType: 'tool' as FilterType })),
		...Array.from(years).map((year) => ({ name: year, filterType: 'year' as FilterType }))
	];
};

// this has to be done so Filter is serializable
export const constructFilterFunc = (filter: Filter): ((article: Article) => boolean) => {
	if (filter.filterType === 'tag') {
		return (article: Article) => article.meta.tags.includes(filter.name);
	} else if (filter.filterType === 'tool') {
		return (article: Article) => article.meta.tools.includes(filter.name);
	} else if (filter.filterType === 'year') {
		return (article: Article) =>
			new Date(article.meta.publishTimestamp).getFullYear().toString() === filter.name;
	}
	throw new Error('Unknown filter type');
};
