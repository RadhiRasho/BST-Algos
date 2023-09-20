import { BinaryNode } from '@/types';
import { generateBinaryTree } from '../utils/utils';

function DepthFirstSearch(head: BinaryNode<number>, needle: number): boolean {
	if (head?.value === needle) return true;

	if (head?.value > needle)
		return Boolean(head?.left && DepthFirstSearch(head?.left, needle));

	return Boolean(head?.right && DepthFirstSearch(head?.right, needle));
}

const binaryTree = generateBinaryTree(1, 10, 0);

console.time('DepthFirstSearch');
console.log(!!DepthFirstSearch(binaryTree!, 6));
console.timeEnd('DepthFirstSearch');
