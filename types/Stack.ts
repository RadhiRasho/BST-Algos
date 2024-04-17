export class Stack<T> {
	private stack: T[] = [];

	constructor() {
		this.stack = new Array<T>();
	}

	push(value: T): void {
		this.stack.push(value);
	}

	pop(): T | undefined {
		return this.stack.pop();
	}

	peek(): T | undefined {
		return this.stack[this.stack.length - 1];
	}

	isEmpty(): boolean {
		return this.stack.length === 0;
	}

	getLength() {
		return this.stack.length;
	}
}
