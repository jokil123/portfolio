<script lang="ts">
	import { fade } from 'svelte/transition';
	import { typewriter } from '$lib/transition/typewriter';
	import * as easing from 'svelte/easing';

	export let href = '';
	export let text = '';
	export let width: number; // the width of the text in rem
	export let collapsed = false;
</script>

<a {href}>
	<div class="navItem" class:collapsed>
		<div class="navText" style="width: {collapsed ? 0 : width}rem;">
			{text}
		</div>
		<img class="plus" class:collapsed src="/images/decoration_plus.svg" alt="decoration" />
	</div>
</a>

<style>
	.navText {
		overflow: hidden;
		white-space: nowrap;
		transition: width var(--duration);
		margin: 0;
	}

	.navItem {
		font-size: 1rem;
		display: flex;
		align-items: center;
		transition: margin var(--duration);
		margin: 1.5rem 2.5rem;
	}

	.navItem.collapsed {
		margin: 1.5rem 2rem;
	}

	.plus {
		margin: 0.5rem;
		transition: transform var(--duration);
		transform: rotate(90deg);
	}

	.plus.collapsed {
		transform: rotate(0deg);
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-weight: 300;
	}
</style>
