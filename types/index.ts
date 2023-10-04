export type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
};

export type Point = {
	x: number;
	y: number;
};

export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

export type DoubleLinkedList<T> = {
	value: T;
	next?: DoubleLinkedList<T>;
	prev?: DoubleLinkedList<T>;
};

export type TreeNode<T> = {
	value: T;
	children?: TreeNode<T>[];
};

export type GraphNode<T> = {
	value: T;
	edges?: GraphNode<T>[];
};

export class Queue<T> {
	private queue: T[] = [];
	private size: number = 0;
	private maxSize: number = 10;

	constructor(maxSize: number = 10) {
		this.maxSize = maxSize;
	}

	enqueue(value: T): void {
		if (this.size < this.maxSize) {
			this.queue.push(value);
			this.size++;
		} else {
			throw new Error('Reached Maximum Size', {
				cause: 'You tried to add more to the queue that the maximum size set',
			});
		}
	}

	dequeue(): T | undefined {
		this.size--;
		return this.queue.shift();
	}

	peek(): T | undefined {
		return this.queue[0];
	}

	isEmpty(): boolean {
		return this.queue.length === 0;
	}

	reachedMax(): boolean {
		return this.size === this.maxSize;
	}
}

export class Stack<T> {
	private stack: T[] = [];
	private size: number = 0;

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

type QueueItem<T> = {
	value: T;
	priority: number;
};

export class PriorityQueue<T> {
	private pque: QueueItem<T>[] = [];

	enqueue(value: T, priority: number) {
		const queItem: QueueItem<T> = { value, priority };
		let added = false;

		for (let i = 0; i < this.pque.length; i++) {
			if (priority < this.pque[i].priority) {
				this.pque.splice(i, 0, queItem);
				added = true;
				break;
			}
		}

		if (!added) {
			this.pque.push(queItem);
		}
	}

	dequeue(): T | undefined {
		return this.pque.shift()?.value;
	}

	peek(): T | undefined {
		return this.pque[0]?.value;
	}

	isEmpty(): boolean {
		return this.pque.length === 0;
	}

	size(): number {
		return this.pque.length;
	}
}

// FIFO
// Implemented with ARRAYS and LINKED LISTS
export default class RingBuffer<T> {
	length = 0;
	private data: (T | undefined)[];
	private head = 0;
	private tail = 0;
	private capacity = 5;

	constructor(capacity = 5) {
	  this.data = Array.from({ length: capacity }, () => undefined);
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
	  if (this.length == 0) {
		return undefined;
	  }

	  var item = this.data[this.head];
	  this.data[this.head] = undefined;
	  this.head = (this.head + 1) % this.capacity;
	  this.length--;
	  return item;
	}
  }