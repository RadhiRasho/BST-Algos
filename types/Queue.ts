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
