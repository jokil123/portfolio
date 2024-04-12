<script lang="ts">
	import ContentWidth from '$lib/components/ContentWidth.svelte';
	import TextFrame from '$lib/components/TextFrame.svelte';
	import Page from '$lib/components/Page.svelte';
	import TextDecoration from '$lib/components/TextDecoration.svelte';
	import { base } from '$app/paths';

	let items = [
		{ text: 'Email', href: 'mailto://joshua.lung@outlook.at' },
		{ text: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-lung-167896244' },
		{ text: 'GitHub', href: 'https://github.com' },
		{ text: 'Artstation', href: 'https://artstation.com' }
	];
</script>

<Page>
	<ContentWidth>
		<div class="contactMe">
			<TextFrame>
				<h1 class="title">Contact <b>Me</b></h1>
			</TextFrame>
			<ul class="links">
				{#each items as item}
					<li class="linkItem">
						<a href={item.href} target="_blank" rel="noopener noreferrer">
							<TextDecoration plus>
								{item.text}
								<img class="linkIcon" src={`${base}/images/link_icon.svg`} alt="icon" />
							</TextDecoration>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ContentWidth>
</Page>

<style>
	.contactMe {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.links {
		padding-left: 0;
	}

	.title {
		margin: 0.5rem 0.75rem;
	}

	.linkIcon {
		width: 1.25rem;
		margin-left: 0.5rem;
	}

	.linkItem {
		margin: 0.3rem;
		display: flex;
		justify-content: center;
		font-size: 2rem;
		font-weight: bold;
	}

	li {
		list-style-type: none;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}

	@media (min-width: 768px) {
		.title {
			font-size: 3rem;
			text-align: left;
		}

		.contactMe {
			justify-content: space-around;
			flex-direction: row;
			margin: 0 0rem;
			/* margin-bottom: 15rem; */
			height: 100dvh;
		}

		.linkItem {
			justify-content: flex-start;
			font-size: 2.25rem;
		}
	}

	@media (min-width: 1180px) {
		.title {
			font-size: 3.75rem;
		}
	}
</style>
