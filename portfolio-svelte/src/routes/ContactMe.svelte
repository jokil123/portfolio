<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import ContactMeItem from './ContactMeItem.svelte';
</script>

<Page>
	<section>
		<h1>Contact <b>Me</b></h1>
		<ul>
			<ContactMeItem text="Email" href="mailto://jo_kil@outlook.com" />
			<ContactMeItem text="LinkedIn" href="https://linkedin.com" />
			<ContactMeItem text="GitHub" href="https://github.com" />
			<ContactMeItem text="Artstation" href="https://artstation.com" />
		</ul>
	</section>
</Page>

<style>
	ul {
		padding-left: 0;
	}

	h1 {
		text-align: center;
	}
</style>
