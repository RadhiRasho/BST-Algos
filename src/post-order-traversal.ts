import { BinaryNode } from '@/types';
import { generateBinaryTree } from '../utils/utils';

function postOrderTraversal(node: BinaryNode<number> | undefined) {
	return walk(node, []);
}

function walk(node: BinaryNode<number> | undefined, path: number[]): number[] {
	if (!node) {
		return path;
	}

	walk(node.left, path);
	walk(node.right, path);
	path.push(node.value);

	return path;
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time('Post Order Traversal');
console.timeLog('Post Order Traversal', postOrderTraversal(binaryTree));
console.timeEnd('Post Order Traversal');
