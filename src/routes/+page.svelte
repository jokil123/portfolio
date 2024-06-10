<script lang="ts">
	import MoreProjects from './MoreProjects.svelte';
	import AboutMe from './AboutMe.svelte';
	import ContactMe from './ContactMe.svelte';
	import FeaturedProjectShowcase from './FeaturedProjectShowcase.svelte';
	import LandingSection from './LandingSection.svelte';
	import PageScroller from '$lib/components/PageScroller.svelte';
	import Footer from './Footer.svelte';
	import SectionSpacer from '$lib/components/SectionSpacer.svelte';

	export let data;
</script>

<PageScroller>
	<LandingSection />

	{#each data.props.articles.filter((a) => {
		return a.meta.featured;
	}) as article, i}
		<FeaturedProjectShowcase {article} invert={i % 2 == 1} />
		<SectionSpacer />
	{/each}

	<MoreProjects articles={data.props.articles} />
	<SectionSpacer />

	<AboutMe />
	<SectionSpacer />

	<ContactMe />
	<SectionSpacer />

	<Footer />
</PageScroller>
