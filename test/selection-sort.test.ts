import { describe, expect, it } from "bun:test";
import { selectionSort } from "#/sorting/selection-sort";

describe("selectionSort", () => {
	it("should sort an array of numbers in ascending order", () => {
		const arr = [5, 3, 2, 4, 1];
		const sorted = selectionSort(arr);
		expect(sorted).toEqual([1, 2, 3, 4, 5]);
	});

	it("should handle an empty array", () => {
		const arr: number[] = [];
		const sorted = selectionSort(arr);
		expect(sorted).toEqual([]);
	});

	it("should handle an array of one element", () => {
		const arr = [1];
		const sorted = selectionSort(arr);
		expect(sorted).toEqual([1]);
	});

	it("should handle an array with negative numbers", () => {
		const arr = [5, -3, 2, -1, 0];
		const sorted = selectionSort(arr);
		expect(sorted).toEqual([-3, -1, 0, 2, 5]);
	});

	it("should handle an array with duplicate numbers", () => {
		const arr = [5, 3, 2, 3, 1];
		const sorted = selectionSort(arr);
		expect(sorted).toEqual([1, 2, 3, 3, 5]);
	});
});
