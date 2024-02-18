<script lang="ts">
	export let href = '';
	export let text = '';
	export let collapsed = false;
</script>

<a {href}>
	<div class="navItem" class:collapsed>
		<div class="navText" class:collapsed></div>
		<img class="plus" src="/images/decoration_plus.svg" alt="decoration" />
	</div>
</a>

<style>
	.navText {
		overflow: hidden;
		white-space: nowrap;
		transition: 0.5s;
		max-width: 100%;
		margin: 0;

		width: 15rem;
		height: 1.5rem;
		background-color: #ffffff;
	}

	.navText.collapsed {
		max-width: 0;
	}

	.navItem {
		font-size: 1rem;
		display: flex;
		align-items: center;
		transition: margin 0.5s;
		transition: width 0.5s;
		margin: 1.5rem 2.5rem;
	}

	/* .navItem.collapsed {
		margin: 1.5rem 0.5rem;
	} */

	.plus {
		margin: 0.5rem;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-weight: 300;
	}
</style>
