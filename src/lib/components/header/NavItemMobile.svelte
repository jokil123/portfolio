<script lang="ts">
	import { base } from '$app/paths';

	export let href = '';
	export let text = '';
</script>

<li on:click>
	<a {href}>{text}</a>
	<img src={`${base}/images/decoration_plus.svg`} alt="logo" />
	<div class="line"></div>
</li>

<style>
	li {
		list-style-type: none;
		margin: 0.8rem 0rem;
		font-size: 1.125em;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
		font-size: 2em;
		font-weight: 300;
	}

	img {
		margin: 0.5rem;
	}

	.line {
		display: inline-block;
		height: 2px;
		background-color: var(--text-color);
		opacity: 0.25;
		flex-grow: 1;
	}
</style>
