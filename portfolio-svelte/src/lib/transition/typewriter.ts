import { linear } from 'svelte/easing';

export const typewriter = (node: Node, { delay = 0, duration = 400, easing = linear } = {}) => {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent || '';

	return {
		duration,
		easing,
		delay,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
};
