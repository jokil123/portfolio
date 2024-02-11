<script lang="ts">
	import Page from '$lib/Page.svelte';
	import ReadMore from '$lib/ReadMore.svelte';
</script>

<Page>
	<div class="Project Icons">
		<img class="projectIcon" src="./images/project_icon_dev.svg" alt="dev" />
		<img class="projectIcon" src="./images/project_icon_3d.svg" alt="3d" />
		<img class="projectIcon" src="./images/project_icon_design.svg" alt="design" />
	</div>
	<h1>
		Fisherman's Friend
		<br />
		<b>Gaming Challenge</b>
	</h1>
	<p>
		Development of the core mechanics behind a virtual obstacle run, part of a marketing campaign
		for Fisherman's Friend Switzerland at the HeroFest 2022.
	</p>
	<ReadMore href="/projects/fishermans-friend-gaming-challenge">
		<img class="projectPreview" src="./images/fishermans_friend_01.jpg" alt="HeroFest 2022" />
	</ReadMore>
</Page>

<style>
	h1 {
		font-weight: 300;
		text-align: center;
		font-size: 2em;
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.projectIcon {
		width: 1.4rem;
		margin: 0.2rem;
	}

	.projectPreview {
		width: 19rem;
	}

	p {
		font-size: 1rem;
		width: 18.5rem;
		margin-bottom: 2rem;
	}

	a {
		width: 18.5rem;
		/* text-align: center; */
		display: block;
		margin-bottom: 2rem;
		font-size: 1rem;
		font-weight: 300;
		color: #ffffff;
	}
</style>
