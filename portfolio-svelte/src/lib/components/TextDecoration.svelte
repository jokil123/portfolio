<script lang="ts">
	export let plus = false;
	export let line = false;
</script>

<div class="decoration">
	{#if line}
		<div class="line"></div>
	{/if}
	{#if plus}
		<img class="plus" src="/images/decoration_plus.svg" alt="decoration" />
	{/if}

	<slot />

	{#if plus}
		<img class="plus" src="/images/decoration_plus.svg" alt="decoration" />
	{/if}
	{#if line}
		<div class="line"></div>
	{/if}
</div>

<style lang="scss">
	.decoration {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.line {
		flex-grow: 1;
		height: 1px;
		background-color: var(--text-color);
		opacity: 0.5;
		z-index: -1;
	}

	.plus {
		width: 1rem;
		margin: 0.5rem;
	}
</style>
