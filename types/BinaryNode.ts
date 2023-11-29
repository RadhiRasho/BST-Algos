export type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
};

export class Node<T> {
	public value: T;
	public left: Node<T> | null;
	public right: Node<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = this.right = null;
	}
}
