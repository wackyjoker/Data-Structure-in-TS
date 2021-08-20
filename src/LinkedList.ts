export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {
	append(data: T): this
	prepend(data: T): this
}

class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null
	private tail: Node<T> | null = null
	private length: number = 0

	public append(data: T) {
		const newNode = new Node(data)
		//initializing our LinkedList
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			this.length++
			return this
		}

		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	public prepend(data: T) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			this.length++
			return this
		}
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
}

const linkedList = new LinkedList()

linkedList.append(2)
linkedList.append(3)
linkedList.prepend(1)
linkedList.append(5)
console.log(linkedList)
