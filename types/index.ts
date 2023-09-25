export type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
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

	enqueue(value: T): void {
		this.queue.push(value);
		this.size++;
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