import { Node } from "../types";

function height(root: Node<number> | null): number {
	if (root == null) {
		return 0;
	}
	return Math.max(height(root?.left), height(root?.right)) + 1;
}

function isBalanced(root: Node<number>) {
	if (!root) return true;

	const lh = height(root.left);
	const rh = height(root.right);

	return [lh, rh];
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(8);

console.time("Find Height");
console.timeLog("Find Height", isBalanced(root));
console.timeEnd("Find Height");
