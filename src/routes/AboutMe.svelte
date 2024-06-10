<script lang="ts">
	import { base } from '$app/paths';
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import SectionSpacer from '$lib/components/SectionSpacer.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
</script>

<ContentWidth>
	<div class="aboutMe">
		<TextFrame>
			<h1 class="title">About <b>Me</b></h1>
		</TextFrame>
		<div class="horizontal">
			<img class="mugshot" src={`${base}/images/mugshot.jpg`} alt="placeholder" />
			<div class="verticalDesc">
				<!-- Disabled until I have a good cv -->
				<!-- <a class="download" href={`${base}/cv.pdf`} download> -->
				<a class="download" href={``} style="cursor: default">
					<TextDecoration plus line>
						<!-- CV -->
						<!-- <img class="linkIcon" src={`${base}/images/link_icon.svg`} alt="decoration" /> -->
					</TextDecoration>
				</a>
				<div class="aboutMeText">
					<p><b>Heya, I’m Joshua, I like making computers do the work for me.</b></p>
					<p>
						Be it running the games I carefully crafted during another burnout inducing game jam,
						rendering some of my 3D files, or crunching the numbers on some irrelevant problem I
						want to know the answer to. I’m mostly self-taught in the world of computer science, but
						know my way around it quite well, be it Python, TypeScript, Go, Rust or C#, I might even
						be able to reverse a binary tree ;)
					</p>
					<p>
						I have a background in product management & engineering as I studied “Product Management
						& FutureTecs” at the HTL Dornbirn in Austria and plan to study engineering in
						university. I love programming & working on machinery and I especially love starting
						projects that I never finish (I mean just have look at my GitHub)
					</p>
				</div>
			</div>
		</div>
	</div>
</ContentWidth>

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

	@media (max-width: 375px) {
		.aboutMeText {
			font-size: 1.25rem;
			margin-top: 0;
		}

		.mugshot {
			margin-top: 0.5rem;
			margin-bottom: 0;
		}

		.download {
			margin-top: 0.5rem;
		}
	}

	@media (min-width: 768px) {
		.aboutMe {
			/* background-color: red; */
			/* margin-top: 20rem; */
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
