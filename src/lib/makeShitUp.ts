// repeats or shortens the array to a given length
export default function makeShitUp<T>(o: T[], n: number): T[] {
	const a = [];
	for (let i = 0; i < n; i++) {
		a.push(o[i % o.length]);
	}
	return a;
}
