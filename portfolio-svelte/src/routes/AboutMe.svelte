<script lang="ts">
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import Page from '$lib/components/Page.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
</script>

<Page>
	<ContentWidth>
		<div class="aboutMe">
			<h1 class="title">About <b>Me</b></h1>
			<img class="mugshot" src="/images/mugshot.jpg" alt="placeholder" />
			<div class="vertical">
				<a class="download" href="/cv.pdf" download>
					<TextDecoration plus line>
						CV
						<img class="linkIcon" src="/images/link_icon.svg" alt="decoration" />
					</TextDecoration>
				</a>
				<p class="aboutMeText">
					Hello! My name is Joshua Lung and I'm a Student from Austria at HTL Dornbirn, with
					experience in both Back-end and Front-end development. I am interested in the world of
					technology, finance and machine learning and enjoy to contribute to impactful projects and
					learn new things.
				</p>
			</div>
		</div>
	</ContentWidth>
</Page>

<style>
	.title {
		text-align: center;
		margin: 1rem;
		font-size: 3.5rem;
	}

	.mugshot {
		margin-bottom: 1.25rem;
		width: 100%;
		max-width: 25rem;
	}

	.download {
		text-decoration: none;
		color: #ffffff;
		font-size: 2.5em;
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
		width: 19rem;
		margin-bottom: 20rem;
	}

	.vertical {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 25rem;
	}

	@media (min-width: 768px) {
		.aboutMe {
			width: auto;
			flex-direction: row-reverse;
			justify-content: space-between;
		}

		.vertical {
			flex-direction: column-reverse;
		}
	}
</style>
