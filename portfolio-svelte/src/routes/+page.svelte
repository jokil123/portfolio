<script lang="ts">
	import MoreProjects from './MoreProjects.svelte';
	import AboutMe from './AboutMe.svelte';
	import ContactMe from './ContactMe.svelte';
	import FeaturedProjectShowcase from './FeaturedProjectShowcase.svelte';
	import LandingSection from './LandingSection.svelte';
	import Page from '$lib/components/Page.svelte';
	import PageScroller from '$lib/components/PageScroller.svelte';
	import Footer from './Footer.svelte';

	export let data;
</script>

<PageScroller>
	<LandingSection />

	{#each data.props.articles.filter((a) => {
		return a.meta.featured;
	}) as article}
		<FeaturedProjectShowcase {article} />
	{/each}

	<MoreProjects />

	<AboutMe />
	<ContactMe />

	<Page>
		<Footer />
	</Page>
</PageScroller>
