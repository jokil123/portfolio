<script lang="ts">
	import Overlay from './Overlay.svelte';
	export let href: string = '';
	export let text: string = 'Read More...';
</script>

<Overlay>
	<slot />
	<a {href} class="readMore" slot="overlay">{text}</a>
</Overlay>

<style>
	.readMore {
		height: 100%;
		width: 100%;
		display: flex;

		justify-content: center;
		align-items: center;

		background-color: rgba(0, 0, 0, 0.8);
		opacity: 0;
		transition: opacity 0.3s;
	}

	.readMore:hover {
		opacity: 1;
	}

	a {
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-color);
	}

	a:hover {
		color: var(--text-color);
	}
</style>
