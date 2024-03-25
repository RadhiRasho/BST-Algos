import { Queue } from "@/types/Queue";

function queue() {
	try {
		const queue = new Queue<number>(5);

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.enqueue(4);
		queue.enqueue(5);

		console.log(queue.reachedMax());

		queue.enqueue(6);

		console.log(queue.dequeue());
		console.log(queue.dequeue());
		console.log(queue.dequeue());
		console.log(queue.dequeue());
		console.log(queue.dequeue());

		console.log(queue.peek());
		console.log(queue.isEmpty());
		console.log(queue.reachedMax());
	} catch (err) {
		if (err instanceof Error) {
			console.error(`%cError Message: ${err.message}!`, "color: red;");
			console.error(`%cError Cause: ${err.cause}!`, "color: red;");
		}
	}
}

queue();

// function queue2() {
// 	const queue = new Queue<BinaryNode<number>>();

// 	queue.enqueue({
// 		value: 1,
// 		left: { value: 2 },
// 		right: { value: 3 },
// 	} as BinaryNode<number>);
// 	queue.enqueue({
// 		value: 1,
// 		left: { value: 2 },
// 		right: { value: 3 },
// 	} as BinaryNode<number>);
// 	queue.enqueue({
// 		value: 1,
// 		left: { value: 2 },
// 		right: { value: 3 },
// 	} as BinaryNode<number>);
// 	queue.enqueue({
// 		value: 1,
// 		left: { value: 2 },
// 		right: { value: 3 },
// 	} as BinaryNode<number>);
// 	queue.enqueue({
// 		value: 1,
// 		left: { value: 2 },
// 		right: { value: 3 },
// 	} as BinaryNode<number>);

// 	console.log(queue.dequeue());
// 	console.log(queue.dequeue());
// 	console.log(queue.dequeue());
// 	console.log(queue.dequeue());
// 	console.log(queue.dequeue());

// 	console.log(queue.peek());
// 	console.log(queue.isEmpty());
// }

// queue2();
