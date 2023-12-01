function bubbleSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
}

console.time("bubbleSort");
console.timeLog("bubbleSort", bubbleSort([5, 4, 3, 2, 1]));
console.timeLog(
	"bubbleSort",
	bubbleSort([
		5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5,
		4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4,
		3, 2, 1,
	]),
);
console.timeEnd("bubbleSort");
