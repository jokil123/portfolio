<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import ArticleImage from './ArticleImage.svelte';
	import ArticleLink from './ArticleLink.svelte';
	export let source: string;
</script>

<SvelteMarkdown
	{source}
	renderers={{
		image: ArticleImage,
		link: ArticleLink
	}}
/>
