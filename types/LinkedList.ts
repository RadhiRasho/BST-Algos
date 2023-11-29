export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

export type DoubleLinkedList<T> = {
	value: T;
	next?: DoubleLinkedList<T>;
	prev?: DoubleLinkedList<T>;
};
