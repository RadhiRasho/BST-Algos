function isInOrderBST(input: number[]): boolean {
	if (input.length === 0) {
		return true;
	}

	for (let i = 0; i < input.length - 1; i++) {
		if (input[i] > input[i + 1]) {
			return false;
		}
	}

	return true;
}

const input = [19, 23, 25, 30, 45];

console.time("Is In Order BST - Good");
console.timeLog("Is In Order BST - Good", isInOrderBST(input));
console.timeEnd("Is In Order BST - Good");

const input2 = [19, 23, 30, 25, 45];

console.time("Is In Order BST - Bad");
console.timeLog("Is In Order BST - Bad", isInOrderBST(input2));
console.timeEnd("Is In Order BST - Bad");
