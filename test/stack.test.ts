import { describe, expect, test } from "bun:test";
import { Stack } from "../types/Stack";

describe("Testing a Stack", () => {
	const a = new Stack();

	test("Should be Empty", () => {
		expect(a.isEmpty()).toBeTrue();
	});

	test("Should have one value", () => {
		a.push(1);

		expect(a.isEmpty()).toBeFalse();
		expect(a.pop()).toBe(1);
	});

	test("Should have multiple values stored", () => {
		a.push(1);
		a.push(2);

		expect(a.peek()).toBe(2);
		expect(a.pop()).toBe(2);
		expect(a.pop()).toBe(1);
		expect(a.isEmpty()).toBeTrue();
	});
});
