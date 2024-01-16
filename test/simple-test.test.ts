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

function test1(x: any): x is Required<A> {
	return x?.z !== undefined;
}

function test2(x: any): x is Required<B> {
	return x?.c !== undefined;
}

type Combined = Required<A> & Required<B>;

function test3(x: any): x is Combined {
	return x?.c !== undefined && x?.z !== undefined;
}

test("test", () => {
	expect(test1({ x: "a", y: 1, z: true })).toBeTrue();
	expect(test1({ a: "a", b: 1, d: true })).toBeFalse();

	expect(test2({ a: "a", b: 1, c: true })).toBeTrue();
	expect(test2({ x: "a", y: 1, z: true })).toBeFalse();

	expect(test3({ a: "a", b: 1, c: true, x: "A", y: 100, z: false })).toBeTrue();
	expect(test3({ a: "a", b: 1, c: true })).toBeFalse();
	expect(test3({ x: "a", y: 1, z: true })).toBeFalse();
});