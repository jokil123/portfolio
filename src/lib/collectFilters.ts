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
			if (a.meta.title.toLowerCase() < b.meta.title.toLowerCase()) {
				return -1;
			}
			if (a.meta.title.toLowerCase() > b.meta.title.toLowerCase()) {
				return 1;
			}
			return 0;
		}
	},
	{
		name: 'Z-A',
		sortFn: (a, b) => {
			if (a.meta.title.toLowerCase() < b.meta.title.toLowerCase()) {
				return 1;
			}
			if (a.meta.title.toLowerCase() > b.meta.title.toLowerCase()) {
				return -1;
			}
			return 0;
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
	for (const filter of filters) {
		filteredArticles = filteredArticles.filter(constructFilterFunc(filter));
	}

	const sortMethodObj = sortMethods.find((method) => method.name === sortMethod);

	let sortMethodFn;
	if (sortMethod == 'search') {
		sortMethodFn = sortSearch(search);
	} else {
		sortMethodFn = sortMethodObj ? sortMethodObj.sortFn : sortMethods[0].sortFn;
	}

	const sortedArticles = filteredArticles.sort((a, b) => {
		return sortMethodFn(a, b);
	});

	console.log(
		sortedArticles.map((a) => {
			return a.meta.title;
		})
	);

	return sortedArticles;
};

function sortSearch(query: string): (a: Article, b: Article) => number {
	return (a: Article, b: Article) => {
		return (
			stringSimilarity(query, b.meta.title, 2, false) -
			stringSimilarity(query, a.meta.title, 2, false)
		);
	};
}

// taken from https://github.com/stephenjjbrown/string-similarity-js
function stringSimilarity(
	str1: string,
	str2: string,
	substringLength: number,
	caseSensitive: boolean
) {
	if (substringLength === void 0) {
		substringLength = 2;
	}
	if (caseSensitive === void 0) {
		caseSensitive = false;
	}
	if (!caseSensitive) {
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
	}
	if (str1.length < substringLength || str2.length < substringLength) return 0;
	const map = new Map();
	for (let i = 0; i < str1.length - (substringLength - 1); i++) {
		const substr1 = str1.substr(i, substringLength);
		map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1);
	}
	let match = 0;
	for (let j = 0; j < str2.length - (substringLength - 1); j++) {
		const substr2 = str2.substr(j, substringLength);
		const count = map.has(substr2) ? map.get(substr2) : 0;
		if (count > 0) {
			map.set(substr2, count - 1);
			match++;
		}
	}
	return (match * 2) / (str1.length + str2.length - (substringLength - 1) * 2);
}
