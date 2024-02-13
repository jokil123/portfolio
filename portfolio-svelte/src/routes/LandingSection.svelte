<script lang="ts">
	import Page from '$lib/components/Page.svelte';
</script>

<Page>
	<h1>Joshua <b>Lung</b></h1>
	<div class="subheading">
		<span>Making Computers do Stuff</span>
		<div class="line"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
	<!-- // the background video -->
	<video autoplay muted>
		<source src="/videos/final.webm" type="video/mp4" />
	</video>
</Page>

<style>
	:root {
		--line-thickness: 0.6rem;
	}

	h1 {
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
		margin-right: 0.7rem;
	}

	.line {
		display: inline-block;
		width: 5.25rem;
		height: var(--line-thickness);
		background-color: #ffffff;
	}

	.circle {
		display: inline-block;
		width: var(--line-thickness);
		height: var(--line-thickness);
		border-radius: 50%;
		background-color: #ffffff;
	}

	.subheading {
		text-align: center;
	}

	video {
		width: 100%;
		aspect-ratio: 1.25;
		object-fit: cover;
		margin-top: 5rem;
	}
</style>
