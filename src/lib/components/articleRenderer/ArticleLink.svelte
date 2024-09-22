<script lang="ts">
	export let href = '';
	export let title = '';
	export let text = '';
</script>

<a {href} {title}>{text}</a>

<style>
	a {
		color: #00a2ff;
	}

	a:hover {
		transform: scale(1.2);
		color: rgb(98, 0, 255);
	}
</style>
