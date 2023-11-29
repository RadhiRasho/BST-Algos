export type GraphNode<T> = {
	value: T;
	edges?: GraphNode<T>[];
};
