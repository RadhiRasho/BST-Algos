import { RingBuffer } from "../types";

export function ringBuffer() {
	const RBuffer = new RingBuffer<number>(5);

	RBuffer.push(1);
	RBuffer.push(2);
	RBuffer.push(3);
	RBuffer.push(4);

	console.log(RBuffer.isEmpty());

	console.log(RBuffer.peek());

	console.log(RBuffer.pop());
	console.log(RBuffer.pop());
	console.log(RBuffer.pop());
	console.log(RBuffer.pop());

	console.log(RBuffer.isEmpty());
	console.log(RBuffer.peek());

	RBuffer.push(5);

	console.log(RBuffer.isEmpty());
	console.log(RBuffer.peek());

	console.log(RBuffer.isEmpty());
}

ringBuffer();
