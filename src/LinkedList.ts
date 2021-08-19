export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {
	append(data: T): Node<T>
}

class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null
	private tail: Node<T> | null = null
	private length: number = 0

	public append(data: T) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			return newNode
		}

		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return newNode
	}
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
console.log(linkedList)
