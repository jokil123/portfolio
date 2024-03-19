<script>
	import NavItemDesktop from './NavItemDesktop.svelte';
	import { headerExpanded } from '$lib/stores/headerExpanded';

	function enter() {
		headerExpanded.set(true);
	}

	function leave() {
		headerExpanded.set(false);
	}
</script>

<header on:mouseenter={enter} on:mouseleave={leave} class:expanded={$headerExpanded}>
	<nav class="headerTop">
		<div class="headerElement logo">
			<a href="/">J<b>L</b></a>
		</div>
		<!-- <NavItemDesktop href="/" text="Home" /> -->
		<NavItemDesktop href="/about" text="About Me" collapsed={!$headerExpanded} width={5} />
		<NavItemDesktop href="/projects" text="Projects" collapsed={!$headerExpanded} width={4} />
		<NavItemDesktop href="/contact" text="Contact" collapsed={!$headerExpanded} width={4} />

		<div class="spacer"></div>
		<img
			class="headerElement"
			src="/images/header_decoration.svg"
			alt="logo"
			style={'margin-right: 0'}
		/>
		<div class="headerElement line" style={'margin-left: 0.75rem'}></div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4rem;
		transition: height var(--header-duration);
		display: flex;
		border-bottom: 1px solid #141414;
	}

	header.expanded {
		height: 6rem;
	}

	.headerTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: #000000;
	}

	.headerElement {
		margin: 1.5rem 2.5rem;
	}

	.logo {
		font-size: 1.75rem;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-weight: 300;
	}

	.line {
		width: 6rem;
		height: 1.5rem;
		background-color: white;
	}

	.spacer {
		flex-grow: 1;
	}
</style>
