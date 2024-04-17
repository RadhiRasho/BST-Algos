import { beforeEach, describe, expect, it } from "bun:test";
import { Stack } from "@/types/Stack";

describe("Stack", () => {
	let stack: Stack<number>;

	beforeEach(() => {
		stack = new Stack<number>();
	});

	it("should push items", () => {
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
	});

	it("should pop items", () => {
		stack.push(1);
		stack.push(2);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
	});

	it("should return undefined when popping an empty stack", () => {
		expect(stack.pop()).toBeUndefined();
	});

	it("should peek items", () => {
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
	});

	it("should return undefined when peeking an empty stack", () => {
		expect(stack.peek()).toBeUndefined();
	});

	it("should return true if the stack is empty", () => {
		expect(stack.isEmpty()).toBe(true);
	});

	it("should return false if the stack is not empty", () => {
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);
	});

	it("should return the correct capacity of the stack", () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.getLength()).toBe(3);
	});
});
