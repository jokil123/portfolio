<script lang="ts">
	import '$lib/app.css';
	import PageFrame from '$lib/components/PageFrame.svelte';
	import '$lib/fonts.css';
	import Header from '../lib/components/header/Header.svelte';
</script>

<Header />
<PageFrame />

<slot />

<svelte:head>
	<title>Joshua Lung - Making Computers do Stuff</title>
	<meta
		name="description"
		content="My portfolio page. Giving an overview of the projects I've done"
	/>
	<meta
		name="keywords"
		content="Joshua Lung, Portfolio, Projects, Computer Science, Software Engineering"
	/>
	<meta name="author" content="Joshua Lung" />
	<link rel="canonical" href="https://joshualung.com" />
</svelte:head>
