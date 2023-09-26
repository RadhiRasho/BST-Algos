function selectionSort(arr: number[]): number[] {
	let i, j, min;

	for (i = 0; i < arr.length - 1; i++) {
		min = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}

			swap(arr, min, i);
		}
	}

	return arr;
}

function swap(arr: number[], min: number, i: number) {
	const temp = arr[min];
	arr[min] = arr[i];
	arr[i] = temp;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(
	selectionSort([
		1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4,
		5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
	])
);
