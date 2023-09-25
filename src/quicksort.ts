function quicksort<T>(arr: T[]): T[] {
	if (arr.length < 2) return arr;

	const mid = Math.floor(arr.length / 2);

	const pivot = arr[mid];
	let left: T[] = [];
	let right: T[] = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === mid) continue;

		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
	}

	return quicksort(left).concat(pivot, quicksort(right));
}

console.time('QuickSort');
console.timeLog('QuickSort', quicksort([2, 5, 8, 3, 1, 4]));
console.timeLog('QuickSort', quicksort(['z', 'c', 'd', 'b', 'g', 'a']));
console.timeLog('QuickSort', quicksort([1, 2, 3, 4, 5, 6]));
console.timeLog('QuickSort', quicksort(['a', 'b', 'c', 'd', 'e', 'f']));
console.timeEnd('QuickSort');
