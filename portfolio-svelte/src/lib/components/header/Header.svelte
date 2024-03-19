<script lang="ts">
	import HeaderMobile from './HeaderMobile.svelte';
	import HeaderDesktop from './HeaderDesktop.svelte';
	import windowSize from '$lib/stores/windowSize';

	let breakpoint = 768;
</script>

{#if $windowSize.width < breakpoint}
	<HeaderMobile />
{:else}
	<HeaderDesktop />
{/if}
