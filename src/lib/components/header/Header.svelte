<script lang="ts">
	import HeaderMobile from './HeaderMobile.svelte';
	import HeaderDesktop from './HeaderDesktop.svelte';
	import windowSize from '$lib/stores/windowSize';
	import { headerType } from '$lib/stores/headerType';

	let breakpoint = 768; // px

	// set what type of header to display based on window size
	$: headerType.set($windowSize.width < breakpoint ? 'mobile' : 'desktop');
</script>

{#if $headerType === 'mobile'}
	<HeaderMobile />
{:else}
	<HeaderDesktop />
{/if}
