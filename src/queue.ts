import { Queue } from '../types';

function queue() {
	const queue = new Queue<number>();

	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.enqueue(4);
	queue.enqueue(5);

	console.log(queue.dequeue());
	console.log(queue.dequeue());
	console.log(queue.dequeue());
	console.log(queue.dequeue());
	console.log(queue.dequeue());

	console.log(queue.peek());
	console.log(queue.isEmpty());
}

queue();
