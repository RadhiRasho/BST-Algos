import type { BinaryNode } from "@/types/BinaryNode";

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
