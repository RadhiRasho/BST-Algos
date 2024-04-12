import type { BinaryNode } from "@/types/BinaryNode";
import type { GraphNode } from "@/types/GraphNode";

export function generateBinaryTree(
	min: number,
	max: number,
	d: number,
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
	d: number,
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

export async function retryAsync<T>(func: () => Promise<T>, threshold = 5) {
	try {
		return await func();
	} catch (err) {
		if (threshold > 0) {
			console.log("Asynchronously Retrying...");
			return await retryAsync<T>(func, threshold - 1);
		}
		throw err;
	}
}

export async function retry<T>(func: () => T, threshold = 5) {
	try {
		return func();
	} catch (err) {
		if (threshold > 0) {
			console.log("Synchronously Retrying...");
			return retry<T>(func, threshold - 1);
		}
		throw err;
	}
}
