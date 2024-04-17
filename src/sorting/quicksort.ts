export function quicksort<T>(arr: T[]): T[] {
	if (arr.length < 2) return arr;

	const mid = Math.floor(arr.length / 2);

	const pivot = arr[mid];
	const left: T[] = [];
	const right: T[] = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === mid) continue;

		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
	}

	return [...quicksort(left), pivot, ...quicksort(right)];
}
