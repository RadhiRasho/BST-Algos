export class Queue<T> {
	private queue: T[] = [];
	private size = 0;
	private maxSize = 10;

	constructor(maxSize = 10) {
		this.maxSize = maxSize;
	}

	enqueue(value: T): void {
		if (this.size < this.maxSize) {
			this.queue.push(value);
			this.size++;
		} else {
			throw new Error("Reached Maximum Size", {
				cause: "You tried to add more to the queue that the maximum size set",
			});
		}
	}

	dequeue(): T {
		this.size--;
		const data = this.queue.shift();

		if (!data) throw new Error("No Data in Item");

		return data;
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

export class TaskQueue<T> {
	private queue: Queue<T>;
	private pendingPromise = false;

	constructor(size = 2) {
		this.queue = new Queue<T>(size);
	}

	enqueue(value: T): void {
		this.queue.enqueue(value);
	}

	async dequeue(): Promise<boolean | T> {
		if (this.pendingPromise) return false;

		const item = this.queue.dequeue();

		if (!item) return false;

		try {
			this.pendingPromise = true;

			const payload = await item;
			this.pendingPromise = false;

			return payload;
		} catch (error) {
			console.error("Error dequeuing item:", error);

			return Promise.reject(error);
		} finally {
			this.pendingPromise = false;
		}
	}

	isEmpty() {
		return this.queue.isEmpty();
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
