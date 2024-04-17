export function selectionSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		swap(arr, i, min);
	}

	return arr;
}

function swap(arr: number[], i: number, min: number) {
	const temp = arr[min];
	arr[min] = arr[i];
	arr[i] = temp;
}
