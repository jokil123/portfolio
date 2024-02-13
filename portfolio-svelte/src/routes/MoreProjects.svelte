<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
</script>

<Page>
	<h1>More <b>Projects</b></h1>
	<ReadMore href="/projects/fishermans_friend">
		<img class="projectImage" src="/images/fishermans_friend_01.jpg" alt="Projects" />
	</ReadMore>
	<ReadMore href="/projects/fishermans_friend">
		<img class="projectImage" src="/images/fishermans_friend_01.jpg" alt="Projects" />
	</ReadMore>

	<a href="/projects">
		More Projects
		<img class="linkIcon" src="/images/link_icon.svg" alt="Link" />
	</a>
</Page>

<style>
	.projectImage {
		width: 19rem;
		margin-bottom: 1rem;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.linkIcon {
		width: 1.5rem;
		margin-left: 0.5rem;
	}
</style>
