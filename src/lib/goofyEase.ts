type ease = (t: number) => number;
export const goofyEase = (speedMin: number, decreaseSpeed: number): ease => {
	return (t: number): number => {
		return t * ((speedMin - 1) / Math.pow(decreaseSpeed, t) + 1);
	};
};
