import { beforeEach, describe, expect, it } from "bun:test";
import { PriorityQueue } from "@/types/Queue";

describe("PriorityQueue", () => {
	let queue: PriorityQueue<number>;

	beforeEach(() => {
		queue = new PriorityQueue<number>();
	});

	it("should enqueue items with priority", () => {
		queue.enqueue(1, 2);
		queue.enqueue(2, 1);
		expect(queue.peek()).toBe(2);
	});

	it("should dequeue items based on priority", () => {
		queue.enqueue(1, 2);
		queue.enqueue(2, 1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(1);
	});

	it("should return undefined if dequeuing an empty queue", () => {
		expect(queue.dequeue()).toBeUndefined();
	});

	it("should return undefined if peeking an empty queue", () => {
		expect(queue.peek()).toBeUndefined();
	});

	it("should return true if the queue is empty", () => {
		expect(queue.isEmpty()).toBe(true);
	});

	it("should return the correct size of the queue", () => {
		queue.enqueue(1, 2);
		queue.enqueue(2, 1);
		expect(queue.size()).toBe(2);
	});
});
