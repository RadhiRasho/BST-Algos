import { BinaryNode } from '@/types';
import { generateBinaryTree } from '../utils/utils';

function preOrderTraversal(node: BinaryNode<number> | undefined) {
	return walk(node, []);
}

function walk(node: BinaryNode<number> | undefined, path: number[]): number[] {
	if (!node) {
		return path;
	}

	path.push(node.value);
	walk(node.left, path);
	walk(node.right, path);

	return path;
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time('Pre Order Traversal');
console.timeLog('Pre Order Traversal', preOrderTraversal(binaryTree));
console.timeEnd('Pre Order Traversal');
