<script lang="ts">
	import { base } from '$app/paths';

	export let name: string;
	$: src = `${base}/images/project_icon_${name}.svg`;
	$: alt = name;
</script>

<img class="projectIcon" {src} {alt} />

<style>
	.projectIcon {
		width: 1.4rem;
		margin: 0.2rem;
	}
</style>
