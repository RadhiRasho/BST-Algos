import { GraphNode } from '../types';
import { generateGraph } from '../utils/utils';

function Graphs(graph?: GraphNode<number>) {
	graph = graph ?? generateGraph(0, 10, 0);

	graph?.edges?.push(...graph.edges!, ...graph.edges!, ...graph.edges!);

	if (graph?.edges && graph.edges.length > 0) {
		for (let i = 0; i < graph.edges.length; i++) {
			graph.edges[i] = generateGraph(0, 10, 0)!;
			graph.edges[i] = generateGraph(0, 10, 0)!;
			graph.edges[i] = generateGraph(0, 10, 0)!;
			graph.edges[i] = generateGraph(0, 10, 0)!;
		}
	}

	console.log(Graphs(graph));
}

console.log(Graphs());
