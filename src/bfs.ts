import type { BinaryNode } from "../types";
import { generateBinaryTree } from "../utils/utils";

function BreathFirstSearch(
	head: BinaryNode<number> | undefined,
	needle: number,
): boolean {
	const queue: Array<BinaryNode<number> | undefined> = [head];

	while (queue.length > 0) {
		const node = queue.shift();

		if (!node) break;

		if (node.value === needle) {
			return true;
		}

		if (node.left) queue.push(node.left);

		if (node.right) queue.push(node.right);
	}

	return false;
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time("BreathFirstSearch");
console.timeLog("BreathFirstSearch", BreathFirstSearch(binaryTree, 8));
console.timeEnd("BreathFirstSearch");
