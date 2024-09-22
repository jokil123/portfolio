<script>
	import NavItemDesktop from './NavItemDesktop.svelte';
	import { headerExpanded } from '$lib/stores/headerExpanded';
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import { base } from '$app/paths';

	let scrollCollapse = false;
	$: scrollCollapse = $scrollPosition.y < 100;

	let enterCollapse = false;
	function enter() {
		enterCollapse = true;
	}

	function leave() {
		enterCollapse = false;
	}

	$: headerExpanded.set(scrollCollapse || enterCollapse);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<header on:mouseenter={enter} on:mouseleave={leave} class:expanded={$headerExpanded}>
	<nav class="headerTop">
		<div class="headerElement logo">
			<a href={`${base}/`}>J<b>L</b></a>
		</div>
		<!-- <NavItemDesktop href={`${base}/`} text="Home" /> -->
		<NavItemDesktop
			href={`${base}/#aboutMe`}
			text="About Me"
			collapsed={!$headerExpanded}
			width={5}
		/>
		<NavItemDesktop
			href={`${base}/projects`}
			text="Projects"
			collapsed={!$headerExpanded}
			width={4}
		/>
		<NavItemDesktop
			href={`${base}/#contact`}
			text="Contact"
			collapsed={!$headerExpanded}
			width={4}
		/>

		<div class="spacer"></div>
		<div class="headerElement decoration">
			<img src={`${base}/images/header_decoration.svg`} alt="logo" style={'margin-right: 0'} />
			<div class="line" style={'margin-left: 0.75rem'}></div>
		</div>
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
		z-index: 100;
	}

	header.expanded {
		height: 6rem;
	}

	.headerTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: var(--background-color);
	}

	.headerElement {
		margin: 1.5rem 2.5rem;
	}

	.logo {
		font-size: 1.75rem;
		transition: transform 250ms var(--bouce);
	}

	.logo:hover {
		transform: scale(1.1);
	}

	a {
		text-decoration: none;
		color: var(--text-color);
		font-weight: 300;
	}

	.line {
		width: 6rem;
		height: 1.5rem;
		background-color: var(--text-color);
	}

	.spacer {
		flex-grow: 1;
	}

	.decoration {
		display: flex;
		align-items: center;
		transition: transform 250ms var(--bouce);
	}

	.decoration:hover {
		transform: scale(1.05);
	}
</style>
