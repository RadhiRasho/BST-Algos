import { describe, expect, it } from "bun:test";
import { generateBinaryTree, generateGraph, retry, retryAsync } from "@/utils";

describe("utils", () => {
	describe("generateBinaryTree", () => {
		it("should generate a binary tree", () => {
			const tree = generateBinaryTree(1, 3, 0);
			expect(tree).toEqual({
				value: 2,
				left: { value: 1, left: undefined, right: undefined },
				right: { value: 3, left: undefined, right: undefined },
			});
		});
	});

	describe("generateGraph", () => {
		it("should generate a graph", () => {
			const graph = generateGraph(1, 3, 0);
			expect(graph).toEqual({
				value: 2,
				edges: [
					{ value: 1, edges: [] },
					{ value: 3, edges: [] },
				],
			});
		});
	});

	describe("retryAsync", () => {
		it("should retry async function", async () => {
			let attempt = 0;
			const mockFunc = async () => {
				attempt++;
				if (attempt === 1) {
					throw new Error("Error");
				}
				return "Success";
			};
			const result = await retryAsync(mockFunc, 2);
			expect(result).toBe("Success");
		});
		it("should throw an error if the function always fails", async () => {
			let attempt = 0;
			const mockFunc = async () => {
				attempt++;
				throw new Error(`Test Error on attempt ${attempt}`);
			};

			await expect(retryAsync(mockFunc, 2)).rejects.toThrow(
				"Test Error on attempt 3",
			);
		});
	});

	describe("retry", () => {
		it("should retry function", () => {
			let attempt = 0;
			const mockFunc = () => {
				attempt++;
				if (attempt === 1) {
					throw new Error("Error");
				}
				return "Success";
			};
			const result = retry(mockFunc, 2);
			expect(result).toBe("Success");
		});
		it("should throw an error if the function always fails", () => {
			let attempt = 0;
			const mockFunc = () => {
				attempt++;
				throw new Error(`Test Error on attempt ${attempt}`);
			};

			expect(() => retry(mockFunc, 2)).toThrow("Test Error on attempt 3");
		});
	});
});
