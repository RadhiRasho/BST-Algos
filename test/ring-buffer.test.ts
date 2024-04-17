import { beforeEach, describe, expect, it } from "bun:test";
import { RingBuffer } from "@/types/RingBuffer";

describe("RingBuffer", () => {
	let ringBuffer: RingBuffer<number>;

	beforeEach(() => {
		ringBuffer = new RingBuffer<number>(3);
	});

	it("should push items", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		expect(ringBuffer.getLength()).toBe(2);
	});

	it("should get items by index", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		expect(ringBuffer.get(0)).toBe(1);
		expect(ringBuffer.get(1)).toBe(2);
	});

	it("should return undefined for out of bounds index", () => {
		ringBuffer.push(1);
		expect(ringBuffer.get(2)).toBeUndefined();
	});

	it("should pop items", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		expect(ringBuffer.pop()).toBe(1);
		expect(ringBuffer.pop()).toBe(2);
	});

	it("should return undefined when popping an empty buffer", () => {
		expect(ringBuffer.pop()).toBeUndefined();
	});

	it("should peek items", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		expect(ringBuffer.peek()).toBe(1);
	});

	it("should return a message when peeking an empty buffer", () => {
		expect(ringBuffer.peek()).toBe("Peak a boo, where is everyone");
	});

	it("should return true if the buffer is empty", () => {
		expect(ringBuffer.isEmpty()).toBe(true);
	});

	it("should return true if the buffer is full", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		ringBuffer.push(3);
		expect(ringBuffer.isFull()).toBe(true);
	});

	it("should return the correct length of the buffer", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		expect(ringBuffer.getLength()).toBe(2);
	});

	it("should return the correct capacity of the buffer", () => {
		expect(ringBuffer.getCapacity()).toBe(3);
	});

	it("should return a string of the data", () => {
		ringBuffer.push(1);
		ringBuffer.push(2);
		ringBuffer.push(3);
		expect(ringBuffer.toString()).toBe("1 2 3");
	});
});
