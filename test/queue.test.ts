import { beforeEach, describe, expect, it } from "bun:test";
import { Queue } from "@/types/Queue";

describe("Queue", () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue<number>(2);
	});

	it("should enqueue items", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.peek()).toBe(1);
	});

	it("should throw an error when trying to enqueue more than maxSize", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		expect(() => queue.enqueue(3)).toThrow("Reached Maximum Size");
	});

	it("should dequeue items", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);
	});

	it("should throw an error when trying to dequeue from an empty queue", () => {
		expect(() => queue.dequeue()).toThrow("No Data in Item");
	});

	it("should return undefined if peeking an empty queue", () => {
		expect(queue.peek()).toBeUndefined();
	});

	it("should return true if the queue is empty", () => {
		expect(queue.isEmpty()).toBe(true);
	});

	it("should return true if the queue has reached its max size", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.reachedMax()).toBe(true);
	});
});
