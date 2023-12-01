export class Stack<T> {
	private stack: T[] = [];
	private size = 0;

	push(value: T): void {
		this.stack.push(value);
		this.size++;
	}

	pop(): T | undefined {
		this.size--;
		return this.stack.pop();
	}

	peek(): T | undefined {
		return this.stack[this.size - 1];
	}

	isEmpty(): boolean {
		return this.stack.length === 0;
	}
}
