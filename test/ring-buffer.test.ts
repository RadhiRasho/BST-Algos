import { describe, expect, it } from "bun:test";
import { RingBuffer } from "../types/RingBuffer";

describe("Ring Buffer", () => {
	const a = new RingBuffer();

	it("should be empty", () => {
		expect(a.isEmpty()).toBe(true);
	});

	it("should not be full", () => {
		expect(a.isFull()).toBe(false);
	});

	it("should have length 0", () => {
		expect(a.getLength()).toBe(0);
	});

	it("should have capacity 5", () => {
		expect(a.capacity).toBe(5);
	});

	it("should have head 0", () => {
		expect(a.head).toBe(0);
	});

	it("should have tail 0", () => {
		expect(a.tail).toBe(0);
	});

	it("should have data length 5", () => {
		expect(a.data.length).toBe(5);
	});

	it("should push 1", () => {
		a.push(1);
		expect(a.getLength()).toBe(1);
		expect(a.head).toBe(0);
		expect(a.tail).toBe(1);
		expect(a.data[0]).toBe(1);
	});

	it("should push 2", () => {
		a.push(2);
		expect(a.getLength()).toBe(2);
		expect(a.head).toBe(0);
		expect(a.tail).toBe(2);
		expect(a.data[0]).toBe(1);
		expect(a.data[1]).toBe(2);
	});

	it("should push 3", () => {
		a.push(3);
		expect(a.getLength()).toBe(3);
		expect(a.head).toBe(0);
		expect(a.tail).toBe(3);
		expect(a.data[0]).toBe(1);
		expect(a.data[1]).toBe(2);
		expect(a.data[2]).toBe(3);
	});

	it("should push 4", () => {
		a.push(4);
		expect(a.getLength()).toBe(4);
		expect(a.head).toBe(0);
		expect(a.tail).toBe(4);
		expect(a.data[0]).toBe(1);
		expect(a.data[1]).toBe(2);
		expect(a.data[2]).toBe(3);
		expect(a.data[3]).toBe(4);
	});
});
