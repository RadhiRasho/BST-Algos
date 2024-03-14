export class RingBuffer<T> {
	private length = 0;
	public data: (T | undefined)[];
	public head = 0;
	public tail = 0;
	public capacity = 5;

	constructor(capacity = 5) {
		this.data = Array.from<T>({ length: capacity });
	}

	push(item: T): void {
		this.data[this.tail] = item;
		this.tail = (this.tail + 1) % this.capacity;
		this.length = (this.length + 1) % this.capacity;
	}

	get(idx: number): T | undefined {
		if (idx < 0 || idx >= this.length) {
			return undefined;
		}
		return this.data[(this.head + idx) % this.capacity];
	}

	pop(): T | undefined {
		if (this.length === 0) {
			return undefined;
		}

		const item = this.data[this.head];
		this.data[this.head] = undefined;
		this.head = (this.head + 1) % this.capacity;
		this.length--;
		return item;
	}

	peek(): T | undefined | string {
		if (this.isEmpty()) {
			return "Peak a boo, where is everyone";
		}

		return this.data[this.head];
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	isFull(): boolean {
		return this.length === this.capacity;
	}

	toString(): string {
		return this.data.toString();
	}

	toArray(): (T | undefined)[] {
		return this.data;
	}

	getLength(): number {
		return this.length;
	}

	getCapacity(): number {
		return this.capacity;
	}
}
