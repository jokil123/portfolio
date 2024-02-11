<script lang="ts">
	import PageScroller from '$lib/PageScroller.svelte';
	import Footer from './Footer.svelte';
	import '$lib/app.css';
	import '$lib/fonts.css';
	import Header from './Header.svelte';
	import Page from '$lib/Page.svelte';
</script>

<Header />

<PageScroller>
	<slot />
	<Page>
		<Footer />
	</Page>
</PageScroller>
