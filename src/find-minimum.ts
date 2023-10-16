import { BinaryNode } from '../types';
import { generateBinaryTree } from '../utils/utils';

function findMinimum(node: BinaryNode<number>) {
	if (!node) return -1;

	while (node.left !== undefined) {
		if (node.left?.value < node.value) {
			node = node.left;
		} else {
			node = node.right!;
		}
	}

	return node.value;
}

const binaryTree = generateBinaryTree(
	Math.round(Math.random() * 100),
	5000000,
	0
);

if (!binaryTree) throw new Error('Binary tree is empty');

console.time('findMinimum O(log n)');

console.timeLog('findMinimum O(log n)', findMinimum(binaryTree));

console.timeEnd('findMinimum O(log n)');

function findMinimum2(node: BinaryNode<number>, path: BinaryNode<number>[]) {
	if (!node) return -1;

	findMinimum2(node.left!, path);
	path.push(node);
	findMinimum2(node.right!, path);

	return path[0].value;
}

console.time('findMinimum O(n)');
console.timeLog(
	'findMinimum O(n)',
	findMinimum2(binaryTree, [] as BinaryNode<number>[])
);
console.timeEnd('findMinimum O(n)');
