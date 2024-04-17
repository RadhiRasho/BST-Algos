import type { BinaryNode } from "@/types/BinaryNode";
import { generateBinaryTree } from "../utils/utils";

export function iterativeSearch(
	root: BinaryNode<number> | undefined,
	key: number,
) {
	let head = root;
	while (head) {
		if (key > head.value) {
			head = head.right;
		} else if (key < head.value) {
			head = head.left;
		} else {
			return true;
		}
	}

	return false;
}

const binaryTree = generateBinaryTree(1, 5, 0);

console.time("iterativeSearch");
console.timeLog("iterativeSearch", iterativeSearch(binaryTree, 2));
console.timeLog("iterativeSearch", iterativeSearch(binaryTree, 6)); // Not in there
console.timeEnd("iterativeSearch");
