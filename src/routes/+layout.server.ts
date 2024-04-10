import { getArticleIds, getArticle, type Article } from '$lib/cms';
import { collectFilters } from '$lib/collectFilters';
import makeShitUp from '$lib/makeShitUp';

export async function load() {
	const articleIds = await getArticleIds();
	let articles = (await Promise.all(articleIds.map(getArticle))).filter(
		(a) => a !== null
	) as Article[];

	// sort by featuredRank

	articles = articles.sort((a, b) => {
		if (a.meta.featuredRank === undefined) {
			return 1;
		}
		if (b.meta.featuredRank === undefined) {
			return -1;
		}
		return a.meta.featuredRank - b.meta.featuredRank;
	});

	return {
		props: {
			articles: makeShitUp(articles, 100),
			filters: collectFilters(articles)
		}
	};
}
