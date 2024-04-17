import type { BinaryNode } from "@/types/BinaryNode";
import { generateBinaryTree } from "../../utils/utils";

function DepthFirstSearch(
	head: BinaryNode<number> | undefined,
	needle: number,
): boolean {
	if (head && head?.value === needle) return true;

	if (head?.value && head?.value > needle)
		return Boolean(head?.left && DepthFirstSearch(head?.left, needle));

	return Boolean(head?.right && DepthFirstSearch(head?.right, needle));
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time("DepthFirstSearch");
console.timeLog("DepthFirstSearch", !!DepthFirstSearch(binaryTree, 6));
console.timeEnd("DepthFirstSearch");
