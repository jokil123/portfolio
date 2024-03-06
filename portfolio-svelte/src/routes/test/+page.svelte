<script lang="ts">
	import Scroller from '$lib/components/Scroller.svelte';
</script>

<div class="tall">
	<div class="spacer"></div>
	<Scroller speed={2}>
		<p>Test</p>
	</Scroller>
	<p>Test</p>
</div>

<style>
	.tall {
		height: 500vh;
	}

	.spacer {
		height: 100vh;
	}

	p {
		font-size: 5rem;
		color: red;
	}
</style>
