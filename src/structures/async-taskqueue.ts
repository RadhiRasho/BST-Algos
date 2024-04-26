import { TaskQueue } from "@/types/Queue";

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

const queue = new TaskQueue<Promise<unknown>>(20);

for (let i = 0; i < 20; i++) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${randomNumber()}`,
	);

	queue.enqueue(res.json());
}

while (!queue.isEmpty()) {
	console.log(await queue.dequeue());

	// await sleep();
}
