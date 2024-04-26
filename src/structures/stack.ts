import { Stack } from "@/types/Stack";

function stack() {
	const stack = new Stack<number>();

	stack.push(1);
	stack.push(2);
	stack.push(2);
	stack.push(3);
	stack.push(4);
	stack.push(5);

	console.log(stack.peek());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.isEmpty());
}

stack();
