<script lang="ts">
	import { base } from '$app/paths';

	export let href = '';
	export let title: undefined = undefined;
	export let text = '';
</script>

<img src={`${base}/${href.replace(/^\//, '')}`} {title} alt={text} />

<style>
	img {
		width: 100%;
	}
</style>
