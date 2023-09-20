export type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
};

export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

export type DoubleLinkedList<T> = {
	value: T;
	next?: DoubleLinkedList<T>;
	prev?: DoubleLinkedList<T>;
};

export type TreeNode<T> = {
	value: T;
	children?: TreeNode<T>[];
};

export type GraphNode<T> = {
	value: T;
	edges?: GraphNode<T>[];
};