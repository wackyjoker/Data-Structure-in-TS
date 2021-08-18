export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {}

class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null
	constructor(value: T) {
		this.head = new Node(value)
	}
}

const linkedList = new LinkedList(2)

console.log(linkedList)
