<script lang="ts">
	import PageScroller from '$lib/components/PageScroller.svelte';
	import Footer from './Footer.svelte';
	import '$lib/app.css';
	import '$lib/fonts.css';
	import Header from '../lib/components/header/Header.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Header />

<slot />
