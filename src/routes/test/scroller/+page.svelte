<script lang="ts">
	import PageScroller from '$lib/components/PageScroller.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
</script>

<PageScroller>
	<div class="tall">
		<div class="spacer"></div>
		<Scroller speed={2}>
			<p>Test</p>
		</Scroller>
		<p>Test</p>
	</div>
</PageScroller>

<style>
	.tall {
		height: 500vh;
	}

	.spacer {
		height: 100dvh;
	}

	p {
		font-size: 5rem;
		color: red;
	}
</style>
