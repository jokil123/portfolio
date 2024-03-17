<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
</script>

<Page>
	<h1>About <b>Me</b></h1>
	<img class="mugshot" src="/images/mugshot.jpg" alt="placeholder" />
	<a href="/cv.pdf" download>
		<TextDecoration plus line>
			CV
			<img class="linkIcon" src="/images/link_icon.svg" alt="decoration" />
		</TextDecoration>
	</a>
	<p>
		Hello! My name is Joshua Lung and I'm a Student from Austria at HTL Dornbirn, with experience in
		both Back-end and Front-end development. I am interested in the world of technology, finance and
		machine learning and enjoy to contribute to impactful projects and learn new things.
	</p>
</Page>

<style>
	h1 {
		text-align: center;
		margin: 1rem;
	}

	.mugshot {
		width: 19rem;
		margin-bottom: 1.25rem;
	}

	.cvLink {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 19rem;
	}

	.line {
		flex-grow: 1;
		height: 1px;
		background-color: #ffffff;
		opacity: 0.5;
	}

	.plus {
		width: 1rem;
		margin: 0.5rem;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 2.5em;
		font-weight: bold;
	}

	.linkIcon {
		width: 1.5rem;
		margin-left: 0.5rem;
	}

	p {
		width: 18.5rem;
	}
</style>
