import { z } from 'zod';
import fs from 'fs';
import { base } from '$app/paths';

const ArticleMetaSchema = z.object({
	title: z.string(),
	published: z.boolean(),
	publishTimestamp: z.number(),
	featured: z.boolean(),
	featuredRank: z.number(),
	tags: z.array(z.string()),
	tools: z.array(z.string())
});

export const getArticleIds = async (): Promise<string[]> => {
	// read all directories in static/articles
	const articleIds = await fs.promises.readdir(`static/articles`);

	// check if the article is published
	const articleIdsPublished = articleIds.filter(async (id) => {
		const metaStr = await fs.promises.readFile(`static/articles/${id}/meta.json`, 'utf8');
		const articleMeta = ArticleMetaSchema.parse(JSON.parse(metaStr));
		return articleMeta.published;
	});

	return articleIdsPublished;
};

// server-side CMS
export const getArticle = async (id: string): Promise<Article | null> => {
	// load meta file from static/articles/${id}/meta.json
	// load content file from static/articles/${id}/content.md
	// load description file from static/articles/${id}/description.md

	const metaStr = await fs.promises.readFile(`static/articles/${id}/meta.json`, 'utf8');
	const articleMeta = ArticleMetaSchema.parse(JSON.parse(metaStr));

	const content: string = await fs.promises.readFile(`static/articles/${id}/content.md`, 'utf8');
	const description: string = await fs.promises.readFile(
		`static/articles/${id}/description.md`,
		'utf8'
	);

	// find cover image (first webp in folder)
	const cover = (await fs.promises.readdir(`static/articles/${id}`)).filter((file) => {
		return file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png');
	})[0];

	const alt = cover.split('.')[0].replace(/_/g, ' ');

	// find all images in images folder
	const images = await fs.promises.readdir(`static/articles/${id}/images`);
	const articleImages = images.map((image) => {
		console.log(`${base}/articles/${id}/images/${image}`);
		return {
			url: `${base}/articles/${id}/images/${image}`,
			alt: image.split('.')[0].replace(/_/g, ' ')
		};
	});

	const article: Article = {
		id,
		meta: articleMeta,
		content,
		description,
		coverImage: { url: `${base}/articles/${id}/${cover}`, alt },
		images: articleImages
	};

	return articleMeta.published ? article : null;
};

export type ArticleMeta = {
	title: string;
	published: boolean;
	publishTimestamp: number;
	featured: boolean;
	featuredRank: number;
	tags: string[];
	tools: string[];
};

export type Article = {
	id: string;
	meta: ArticleMeta;
	description: string;
	content: string;
	coverImage: ArticleImage;
	images: ArticleImage[];
};

export type ArticleImage = {
	url: string;
	alt: string;
};
