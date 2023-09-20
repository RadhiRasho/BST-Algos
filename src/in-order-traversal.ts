import { BinaryNode } from '@/types';
import { generateBinaryTree } from '../utils/utils';

function inOrderTraversal(head: BinaryNode<number> | undefined) {
	return walk(head, []);
}

function walk(node: BinaryNode<number> | undefined, path: number[]): number[] {
	if (!node) {
		return path;
	}

	walk(node.left, path);
	path.push(node.value);
	walk(node.right, path);

	return path;
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time('In Order Traversal');
console.log(inOrderTraversal(binaryTree));
console.timeEnd('In Order Traversal');
