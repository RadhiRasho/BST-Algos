import { BinaryNode } from '../types';

export function generateBinaryTree(
	min: number,
	max: number,
	d: number
): BinaryNode<number> | undefined {
	if (min > max) return undefined;

	const mid = Math.floor((min + max) / 2);

	return {
		value: mid,
		left: generateBinaryTree(min, mid - 1, d + 1),
		right: generateBinaryTree(mid + 1, max, d + 1),
	};
}
