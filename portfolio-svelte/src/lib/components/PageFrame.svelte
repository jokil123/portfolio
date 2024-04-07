<script lang="ts">
	import { headerExpanded } from '$lib/stores/headerExpanded';
	import { headerType } from '$lib/stores/headerType';

	$: expanded = $headerExpanded && $headerType === 'desktop';
	$: mobile = $headerType === 'mobile';
</script>

<div class="grid" class:expanded class:mobile>
	<img src="/images/frame_corner.svg" alt="corner decoration" class="corner top left" />
	<img src="/images/frame_corner.svg" alt="corner decoration" class="corner top right" />
	<img src="/images/frame_corner_alt.svg" alt="corner decoration" class="corner bottom left" />
	<img src="/images/frame_corner.svg" alt="corner decoration" class="corner bottom right" />
</div>

<style lang="scss">
	.grid {
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		grid-template-columns: 0rem 1fr 0rem;
		grid-template-rows: 0rem 1fr 0rem;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 3.5rem;
		// z-index: -1000;
		pointer-events: none;
		transition: padding-top var(--header-duration);
	}

	.grid.expanded {
		padding-top: 6rem;
	}

	.grid.mobile {
		padding-top: 5rem;
	}

	.corner {
		margin: 2rem;

		&.top.left {
			grid-column: 1;
			grid-row: 1;
		}

		&.top.right {
			grid-column: 3;
			grid-row: 1;
			transform: rotate(90deg);
			align-self: start;
			justify-self: end;
		}

		&.bottom.left {
			grid-column: 1;
			grid-row: 3;
			align-self: end;
			justify-self: start;
			transform: translateY(15px);
		}

		&.bottom.right {
			grid-column: 3;
			grid-row: 3;
			transform: rotate(180deg);
			align-self: end;
			justify-self: end;
		}
	}

	@media (max-width: 768px) {
		.grid {
			padding-top: 5rem;
		}

		.corner {
			height: 5.5rem;

			margin: 1rem;

			&.top.left {
				display: none;
			}

			&.bottom.left {
				display: none;
			}

			&.bottom.right {
				grid-column: 1;
				grid-row: 3;
				transform: rotate(270deg);
				align-self: start;
				align-self: end;
				justify-self: start;
			}
		}
	}

	@media (max-width: 1024px) {
		.grid {
			padding-top: 4rem;

			&.expanded {
				padding-top: 6rem;
			}
		}

		.corner {
			margin: 1rem;
		}
	}

	// Hide the grid if the screen is too small
	// @media (max-width: 375px) {
	// 	.grid {
	// 		display: none;
	// 	}
	// }
</style>
