<script lang="ts">
	import { base } from '$app/paths';
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import { onMount } from 'svelte';

	let startVideo: HTMLVideoElement;
	let loopVideo: HTMLVideoElement;

	let timeOutID: number | null = null;

	const restart = () => {
		// Skip if the window is not defined
		if (window == null) return;

		// Clear the timeout if it exists
		if (timeOutID) {
			window.clearTimeout(timeOutID);
		}

		// Reset the videos
		startVideo.pause();
		loopVideo.pause();
		startVideo.style.display = 'block';
		loopVideo.style.display = 'none';
		startVideo.currentTime = 0;
		loopVideo.currentTime = 0;

		startVideo.play();

		// Set a timeout to play the loop video after the videos begin overlapping
		timeOutID = window.setTimeout(() => {
			loopVideo.style.display = 'block';
			loopVideo.play();

			timeOutID = null;
		}, 2600);

		// Hide the start video once it ends
		startVideo.addEventListener('ended', () => {
			startVideo.style.display = 'none';
		});
	};

	onMount(() => {
		restart();
	});
</script>

<div class="videoSwitcher">
	<video muted bind:this={startVideo} class="start">
		<source src={`${base}/videos/animation_start_extended.webm`} type="video/mp4" />
	</video>
	<video muted bind:this={loopVideo} loop class="loop">
		<source src={`${base}/videos/animation_loop.webm`} type="video/mp4" />
	</video>
</div>

<style>
	video {
		width: 100%;
	}

	.videoSwitcher {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;

		place-items: center;
	}

	.start,
	.loop {
		grid-row: 1;
		grid-column: 1;
	}
</style>
