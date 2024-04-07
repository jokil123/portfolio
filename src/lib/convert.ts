function getConversionFactor(): number {
	if (typeof window === 'undefined') {
		return 16;
	}

	return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function rem2px(rem: number) {
	return rem * getConversionFactor();
}

export function px2rem(px: number) {
	return px / getConversionFactor();
}
