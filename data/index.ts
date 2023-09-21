export class MyQueue<T> {
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
