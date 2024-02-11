export const getArticle = async (id: string) => {};

export type Article = {
	id: string;
	title: string;
	content: string;
	published: boolean;
	publishedAt: string;
	tags: string[];
	tools: string[];
};
