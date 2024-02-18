<script lang="ts">
	import HeaderMobile from './HeaderMobile.svelte';
	import HeaderDesktop from './HeaderDesktop.svelte';
	import windowSize from '$lib/windowSize';
	import { px2rem } from '$lib/convert';

	let breakpoint = 48; // in rem
</script>

{#if px2rem($windowSize.width) < breakpoint}
	<HeaderMobile />
{:else}
	<HeaderDesktop />
{/if}
