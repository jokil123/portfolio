<script lang="ts">
	import '$lib/app.css';
	import PageFrame from '$lib/components/PageFrame.svelte';
	import '$lib/fonts.css';
	import Header from '../lib/components/header/Header.svelte';
</script>

<Header />
<PageFrame />

<slot />
