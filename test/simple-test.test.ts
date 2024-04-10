import { expect, test } from "bun:test";

type A = {
	x: string;
	y: number;
	z: boolean;
};

type B = {
	a: string;
	b: number;
	c: boolean;
};

function test1(x: A): x is A {
	return x?.z !== undefined;
}

function test2(x: B): x is B {
	return x?.c !== undefined;
}

type Combined = A & B;

function test3(x: Combined): x is Combined {
	return x?.c !== undefined && x?.z !== undefined;
}

test("test", () => {
	expect(test1({ x: "a", y: 1, z: true })).toBeTrue();
	//@ts-ignore
	expect(test1({ a: "a", b: 1, d: true })).toBeFalse();

	expect(test2({ a: "a", b: 1, c: true })).toBeTrue();
	//@ts-ignore
	expect(test2({ x: "a", y: 1, z: true })).toBeFalse();

	expect(test3({ a: "a", b: 1, c: true, x: "A", y: 100, z: false })).toBeTrue();
	expect(test3({ a: "a", b: 1, c: true } as Combined)).toBeFalse();
	expect(test3({ x: "a", y: 1, z: true } as Combined)).toBeFalse();
});
