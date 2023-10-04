import { BinaryNode, GraphNode } from '../types';

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

export function generateGraph(
	min: number,
	max: number,
	d: number
): GraphNode<number> | undefined {
	if (min > max) return undefined;

	const mid = Math.floor((min + max) / 2);

	const edges = [
		generateGraph(min, mid - 1, d + 1),
		generateGraph(mid + 1, max, d + 1),
	].filter((node): node is GraphNode<number> => node !== undefined);

	return {
		value: mid,
		edges,
	};
}
