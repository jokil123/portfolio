<script lang="ts">
	import { base } from '$app/paths';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Page from '$lib/components/Page.svelte';
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
</script>

<Page>
	<ContentWidth>
		<div class="container">
			<div class="text">
				<h1 class="title">Joshua <b>Lung</b></h1>
				<div class="subheading">
					<span> Making Computers do Stuff</span>
					<div class="line"></div>
					<div class="circle"></div>
					<div class="circle"></div>
				</div>
			</div>

			<div class="animationContainer">
				<IntroAnimation />
			</div>
		</div>
	</ContentWidth>
</Page>

<style>
	:root {
		--line-thickness: 0.6em;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-shadow: 0 0 10rem 15rem var(--background-color);
		height: 100%;
	}

	.title {
		font-weight: 300;
		font-size: 3em;
		text-align: center;
		margin-bottom: -0.7rem;
		margin-top: 0;
	}

	span {
		font-size: 0.95em;
		font-family: 'Abhaya Libre', sans-serif;
		font-weight: 300;
		margin-right: 0.7em;
	}

	.line {
		display: inline-block;
		width: 5.25em;
		height: var(--line-thickness);
		background-color: var(--text-color);
	}

	.circle {
		display: inline-block;
		width: var(--line-thickness);
		height: var(--line-thickness);
		border-radius: 50%;
		background-color: var(--text-color);
	}

	.subheading {
		text-align: center;
	}

	.text {
		margin-bottom: 1rem;
	}

	.animationContainer {
		width: 100%;
		max-width: 600px;
	}

	@media (min-width: 768px) {
		.container {
			display: grid;
			width: 100%;
			font-size: 1.5em;
			height: 100dvh;
			justify-content: unset;
		}

		.text,
		.animationContainer {
			grid-column: 1;
			grid-row: 1;
		}

		.animationContainer {
			justify-self: end;
			z-index: -1;
			margin-bottom: 0;
			height: unset;
			flex-grow: 0;
			margin-top: 0;
		}

		.text {
			justify-self: start;
		}
	}

	@media (min-width: 1536px) {
		.container {
			font-size: 2em;
		}

		video {
			max-width: 700px;
		}
	}
</style>
