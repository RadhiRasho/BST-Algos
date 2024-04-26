import { describe, expect, it } from "bun:test";
import { twoCrystalBalls } from "@/src/others/two-crystal-balls";

describe("twoCrystalBalls", () => {
	it("should return the correct index when a break is present", () => {
		const breaks = [
			false,
			false,
			false,
			false,
			true,
			true,
			true,
			true,
			true,
			true,
		];
		const result = twoCrystalBalls(breaks);
		expect(result).toBe(4);
	});

	it("should return -1 when no break is present", () => {
		const breaks = [
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
		];
		const result = twoCrystalBalls(breaks);
		expect(result).toBe(-1);
	});

	it("should return the correct index when multiple breaks are present", () => {
		const breaks = [
			false,
			false,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
		];
		const result = twoCrystalBalls(breaks);
		expect(result).toBe(2);
	});

	it("should return -1 for an empty array", () => {
		const breaks: boolean[] = [];
		const result = twoCrystalBalls(breaks);
		expect(result).toBe(-1);
	});
});
