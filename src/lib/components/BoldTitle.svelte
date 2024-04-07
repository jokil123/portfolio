<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import ProjectIcon from '$lib/components/ProjectIcon.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import type { Article } from '$lib/cms';

	export let title: String;
	export let align: 'left' | 'right' | 'center' = 'center';
</script>

<h1 style="text-align: {align};">
	{title.split('\n')[0]}
	<br />
	<b>{title.split('\n')[1]}</b>
</h1>

<style>
	h1 {
		font-weight: 300;
		font-size: 2em;
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
