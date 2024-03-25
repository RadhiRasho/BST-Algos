import { PriorityQueue } from "@/types/Queue";

const pque = new PriorityQueue();

pque.enqueue("a", 1);

pque.enqueue("b", 2);

pque.enqueue("c", 3);

pque.enqueue("d", 4);

pque.enqueue("e", 1);

pque.enqueue("f", 2);

pque.enqueue("g", 3);
pque.enqueue("BOMBA", 0);

console.log(pque.dequeue()); // BOMBA

console.log(pque.dequeue()); // a

console.log(pque.dequeue()); // e

console.log(pque.dequeue()); // b

console.log(pque.dequeue()); // f

console.log(pque.dequeue()); // c

console.log(pque.dequeue()); // g

console.log(pque.dequeue()); // d

console.log(pque.peek());
console.log(pque.size());
console.log(pque.isEmpty());
