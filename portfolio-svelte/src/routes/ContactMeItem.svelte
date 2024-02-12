<script lang="ts">
	export let href: string = '';
	export let text: string = '';
	export let icon: string = '/images/link_icon.svg';
</script>

<li>
	<img class="plusIcon" src="/images/decoration_plus.svg" alt="decoration" />

	<a {href}>{text}</a>
	<img class="linkIcon" src={icon} alt="icon" />

	<img class="plusIcon" src="/images/decoration_plus.svg" alt="decoration" />
</li>

<style>
	li {
		list-style-type: none;
		margin: 0.3rem;
		display: flex;
		justify-content: center;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 2em;
		font-weight: bold;
	}

	.linkIcon {
		width: 1.25rem;
		margin-left: 0.5rem;
	}

	.plusIcon {
		width: 1rem;
		margin: 0.5rem;
	}
</style>
