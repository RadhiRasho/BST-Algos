import { describe, expect, it } from "bun:test";
import { quicksort } from "@/src/quicksort";

describe("quicksort", () => {
	it("should sort an array of numbers in ascending order", () => {
		const arr = [5, 3, 2, 4, 1];
		const sorted = quicksort(arr);
		expect(sorted).toEqual([1, 2, 3, 4, 5]);
	});

	it("should handle an empty array", () => {
		const arr: number[] = [];
		const sorted = quicksort(arr);
		expect(sorted).toEqual([]);
	});

	it("should handle an array of one element", () => {
		const arr = [1];
		const sorted = quicksort(arr);
		expect(sorted).toEqual([1]);
	});

	it("should handle an array with negative numbers", () => {
		const arr = [5, -3, 2, -1, 0];
		const sorted = quicksort(arr);
		expect(sorted).toEqual([-3, -1, 0, 2, 5]);
	});

	it("should handle an array with duplicate numbers", () => {
		const arr = [5, 3, 2, 3, 1];
		const sorted = quicksort(arr);
		expect(sorted).toEqual([1, 2, 3, 3, 5]);
	});

	it("should sort an array of strings in lexicographical order", () => {
		const arr = ["banana", "apple", "cherry", "date", "elderberry"];
		const sorted = quicksort(arr);
		expect(sorted).toEqual(["apple", "banana", "cherry", "date", "elderberry"]);
	});

	it("should handle an array of one string", () => {
		const arr = ["apple"];
		const sorted = quicksort(arr);
		expect(sorted).toEqual(["apple"]);
	});

	it("should handle an array with duplicate strings", () => {
		const arr = ["banana", "apple", "cherry", "apple", "banana"];
		const sorted = quicksort(arr);
		expect(sorted).toEqual(["apple", "apple", "banana", "banana", "cherry"]);
	});
});
