import { describe, expect, it } from "bun:test";
import { UniqueString } from "@/src/unique-string";

describe("UniqueString", () => {
	it("should return true for a string with unique characters", () => {
		const result = UniqueString("abcdef");
		expect(result).toBe(true);
	});

	it("should return false for a string with repeated characters", () => {
		const result = UniqueString("aabc");
		expect(result).toBe(false);
	});

	it("should return false for a string longer than 128 characters", () => {
		const longString = new Array(130).join("a");
		const result = UniqueString(longString);
		expect(result).toBe(false);
	});

	it("should return true for an empty string", () => {
		const result = UniqueString("");
		expect(result).toBe(true);
	});
});
