import { Queue } from "@/types/Queue";

class TaskQueue<T> extends Queue<T> {
	private pendingPromise = false;

	constructor(size = 2) {
		super(size);
	}

	enqueue(value: T): void {
		super.enqueue(value);
	}

	async dequeue(): Promise<T | boolean> {
		if (this.pendingPromise) return false;

		const item = super.dequeue();

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
}

function sleep() {
	return new Promise((res) => setTimeout(res, 1000));
}

function randomNumber(threshold = 200) {
	const rand = Math.round(Math.random() * threshold);

	if (rand > threshold) {
		console.log("Caught a bad one: ", rand);
		return randomNumber(threshold);
	}

	return rand;
}

const queue = new TaskQueue<Promise<any>>(20);

for (let i = 0; i < 10; i++) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${randomNumber()}`,
	);

	queue.enqueue(res.json());
}

while (!queue.isEmpty()) {
	console.log(await queue.dequeue());

	// await sleep();
}
