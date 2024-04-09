<script lang="ts">
	import { base } from '$app/paths';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Page from '$lib/components/Page.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
</script>

<Page>
	<ContentWidth>
		<div class="aboutMe">
			<TextFrame>
				<h1 class="title">About <b>Me</b></h1>
			</TextFrame>
			<div class="horizontal">
				<img class="mugshot" src={`${base}/images/mugshot.jpg`} alt="placeholder" />
				<div class="verticalDesc">
					<a class="download" href={`${base}/cv.pdf`} download>
						<TextDecoration plus line>
							CV
							<img class="linkIcon" src={`${base}/images/link_icon.svg`} alt="decoration" />
						</TextDecoration>
					</a>
					<p class="aboutMeText">
						Hello! My name is Joshua Lung and I'm a Student from Austria at HTL Dornbirn, with
						experience in both Back-end and Front-end development. I am interested in the world of
						technology, finance and machine learning and enjoy to contribute to impactful projects
						and learn new things.
					</p>
				</div>
			</div>
		</div>
	</ContentWidth>
</Page>

<style>
	.title {
		text-align: center;
		font-size: 2.5rem;
		margin: 0.5rem 1rem;
	}

	.mugshot {
		box-sizing: border-box;
		margin-top: 1.5rem;
		margin-bottom: 1.25rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		width: 100%;
		max-width: 30rem;
	}

	.download {
		text-decoration: none;
		color: var(--text-color);
		font-size: 2em;
		font-weight: bold;
		width: 100%;
	}

	.linkIcon {
		width: 1.5rem;
		margin-left: 0.5rem;
	}

	.aboutMe {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.verticalDesc {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 30rem;
	}

	@media (min-width: 768px) {
		.aboutMe {
			/* background-color: red; */
			margin-top: 20rem;
		}

		.title {
			font-size: 3rem;
		}

		.horizontal {
			margin-top: 1rem;
		}

		.download {
			font-size: 2.5em;
		}
	}

	@media (min-width: 1024px) {
		.horizontal {
			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
			align-items: start;
			gap: 2rem;
		}

		.verticalDesc {
			flex-direction: column-reverse;
		}

		.mugshot {
			width: 1%;
			flex-grow: 1;
		}

		.horizontal {
			margin-top: 3rem;
		}
	}

	@media (min-width: 1180px) {
		.title {
			font-size: 3.75rem;
		}

		.horizontal {
			gap: 5rem;
		}
	}
</style>
