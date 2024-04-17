import { beforeEach, describe, expect, it } from "bun:test";
import { iterativeSearch } from "@/src/iterative-search";
import type { BinaryNode } from "@/types/BinaryNode";
import { generateBinaryTree } from "@/utils/utils";

describe("iterativeSearch", () => {
	let root: BinaryNode<number> | undefined;

	beforeEach(() => {
		// Assuming generateBinaryTree creates a binary search tree
		root = generateBinaryTree(1, 7, 0);
	});

	it("should return true if the key is in the tree", () => {
		expect(iterativeSearch(root, 4)).toBe(true);
	});

	it("should return false if the key is not in the tree", () => {
		expect(iterativeSearch(root, 8)).toBe(false);
	});

	it("should handle a tree with one node", () => {
		const singleNodeTree = generateBinaryTree(0, 1, 0);
		expect(iterativeSearch(singleNodeTree, 1)).toBe(true);
		expect(iterativeSearch(singleNodeTree, 2)).toBe(false);
	});

	it("should return false for an undefined root", () => {
		expect(iterativeSearch(undefined, 1)).toBe(false);
	});
});