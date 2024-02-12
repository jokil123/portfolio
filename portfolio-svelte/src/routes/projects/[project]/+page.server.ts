import { getArticle } from '$lib/cms';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const article = await getArticle(params.project);

	if (article === null) {
		error(404, 'Not found');
	}

	return { article };
};
