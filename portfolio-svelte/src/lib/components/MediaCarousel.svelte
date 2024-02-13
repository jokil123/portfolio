<script lang="ts">
	type image = {
		imgUrl: string;
		imgAlt: string;
	};

	type video = {
		videoUrl: string;
		videoAlt: string;
	};

	export let media: (image | video)[] = [];

	let currentSlide = 0;
</script>

<div class="container">
    
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
	}
</style>
