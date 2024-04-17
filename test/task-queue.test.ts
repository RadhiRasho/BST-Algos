import { beforeEach, describe, expect, it } from "bun:test";
import { TaskQueue } from "@/types/Queue";

describe("TaskQueue", () => {
	let taskQueue: TaskQueue<Promise<number>>;

	beforeEach(() => {
		taskQueue = new TaskQueue<Promise<number>>(2);
	});

	it("should enqueue items", () => {
		taskQueue.enqueue(Promise.resolve(1));
		taskQueue.enqueue(Promise.resolve(2));
		expect(taskQueue.isEmpty()).toBe(false);
	});

	it("should dequeue items", async () => {
		taskQueue.enqueue(Promise.resolve(1));
		taskQueue.enqueue(Promise.resolve(2));
		expect(await taskQueue.dequeue()).toBe(1);
		expect(await taskQueue.dequeue()).toBe(2);
	});

	it("should return false when trying to dequeue from an empty queue", async () => {
		expect(await taskQueue.dequeue()).toBe(false);
	});

	it("should return true if the queue is empty", () => {
		expect(taskQueue.isEmpty()).toBe(true);
	});

	it("should handle rejected promises", async () => {
		taskQueue.enqueue(Promise.reject(new Error("Test Error")));
		expect(taskQueue.dequeue()).rejects.toThrow("Test Error");
	});
});
