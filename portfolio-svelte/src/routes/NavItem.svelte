<script lang="ts">
	export let href = '';
	export let text = '';
</script>

<li on:click>
	<a {href}>{text}</a>
	<img src="./images/decoration_plus.svg" alt="logo" />
	<div class="line"></div>
</li>

<style>
	li {
		list-style-type: none;
		margin: 0.8rem 0rem;
		font-size: 1.125em;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 2em;
		font-weight: 300;
	}

	img {
		margin: 0.5rem;
	}

	.line {
		display: inline-block;
		height: 2px;
		background-color: #ffffff;
		opacity: 0.25;
		flex-grow: 1;
	}
</style>
