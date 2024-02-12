<script lang="ts">
	import MoreProjects from './MoreProjects.svelte';
	import AboutMe from './AboutMe.svelte';
	import ContactMe from './ContactMe.svelte';
	import FeaturedProjectShowcase from './FeaturedProjectShowcase.svelte';
	import LandingSection from './LandingSection.svelte';

	export let data;
</script>

<LandingSection />

{#each data.props.articles.filter((a) => {
	return a.meta.featured;
}) as article}
	<FeaturedProjectShowcase {article} />
{/each}

<MoreProjects />

<AboutMe />
<ContactMe />
