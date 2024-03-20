<script lang="ts">
	import { fade } from 'svelte/transition';
	import NavItem from './NavItemMobile.svelte';

	let open = false;

	function toggleMenu() {
		open = !open;
	}
</script>

<header class:open>
	<div class="headerTop">
		<div class="headerElement">
			<a href="/">J<b>L</b></a>
		</div>
		<img class="headerElement" src="/images/header_decoration.svg" alt="logo" />
		<button class="headerElement burger" on:click={toggleMenu}>
			{#if open}
				<img class="burger" src="/images/header_nav_close.svg" alt="close menu" />
			{:else}
				<img class="burger" src="/images/header_burger.svg" alt="burger menu" />
			{/if}
		</button>
	</div>
	{#if open}
		<nav transition:fade>
			<ul>
				<NavItem on:click={toggleMenu} href="/" text="Home" />
				<NavItem on:click={toggleMenu} href="/about" text="About" />
				<NavItem on:click={toggleMenu} href="/projects" text="Projects" />
				<NavItem on:click={toggleMenu} href="/contact" text="Contact" />
			</ul>
		</nav>
		<div class="hide"></div>
	{/if}
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: left;
		z-index: 100;
	}

	@media (min-width: 48rem) {
		header {
			display: none;
		}
	}

	header.open {
		height: 100%;
	}

	.headerTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: #000000;
	}

	button.burger {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.headerElement {
		margin: 1.5rem 2.5rem;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 2em;
		font-weight: 300;
	}

	ul {
		padding: 0 2.5rem;
	}

	nav {
		background-color: #000000;
		flex-grow: 1;
	}

	img.burger {
		aspect-ratio: 1/1;
		width: 1.6rem;
	}
</style>
