<script lang="ts">
	export let href = '';
	export let title: undefined = undefined;
	export let text = '';
</script>

<img src={href} {title} alt={text} />

<style>
	img {
		width: 100%;
	}
</style>
