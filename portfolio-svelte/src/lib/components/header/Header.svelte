<script lang="ts">
	import HeaderMobile from './HeaderMobile.svelte';
	import HeaderDesktop from './HeaderDesktop.svelte';
	import windowSize from '$lib/windowSize';
	import { px2rem } from '$lib/convert';

	let breakpoint = 768;
</script>

{#if $windowSize.width < breakpoint}
	<HeaderMobile />
{:else}
	<HeaderDesktop />
{/if}
