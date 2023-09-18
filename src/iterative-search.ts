import { BinaryNode } from '../types';
import { generateBinaryTree } from '../utils/utils';

function iterativeSearch(root: BinaryNode<number> | undefined, key: number) {
	while (root) {
		if (key > root.value) {
			root = root.right;
		} else if (key < root.value) {
			root = root.left;
		} else {
			return true;
		}
	}
}

const binaryTree = generateBinaryTree(1, 5, 0);

console.time('iterativeSearch');
console.log(!!iterativeSearch(binaryTree!, 6));
console.timeEnd('iterativeSearch');
