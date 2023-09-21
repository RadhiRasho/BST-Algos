import { BinaryNode } from '@/types';
import { generateBinaryTree } from '../utils/utils';

function isBST(root: BinaryNode<number> | undefined): boolean {
	if (!root) return true;

	if (root.left && root.left.value >= root.value) return false;

	if (root.right && root.right.value <= root.value) return false;

	return isBST(root.left) && isBST(root.right);
}

const binaryTree: BinaryNode<number> = {
	value: 5,
	left: {
		value: 5,
	},
	right: {
		value: 5,
	},
};

const binaryTree2 = generateBinaryTree(1, 10, 0);

console.time('isBST BAD');
console.timeLog('isBST BAD', isBST(binaryTree));
console.timeEnd('isBST BAD');

console.time('isBST GOOD');
console.timeLog('isBST GOOD', isBST(binaryTree2));
console.timeEnd('isBST GOOD');
