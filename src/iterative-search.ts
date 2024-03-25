import type { BinaryNode } from "@/types/BinaryNode";
import { generateBinaryTree } from "../utils/utils";

function iterativeSearch(root: BinaryNode<number> | undefined, key: number) {
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
}

const binaryTree = generateBinaryTree(1, 5, 0);

console.time("iterativeSearch");
// biome-ignore lint/style/noNonNullAssertion: Because I can
console.timeLog("iterativeSearch", !!iterativeSearch(binaryTree!, 6));
console.timeEnd("iterativeSearch");
