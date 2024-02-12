<script lang="ts">
	import BoldTitle from '$lib/BoldTitle.svelte';
	import Page from '$lib/Page.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<Page>
	<BoldTitle title={data.article.meta.title} />

	<SvelteMarkdown source={data.article.content} />

	<img src="https://via.placeholder.com/150" alt="Project" />

	<a href="/projects">Back to Projects</a>
</Page>
