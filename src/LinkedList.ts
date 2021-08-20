export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {
	append(data: T): Node<T>
	prepend(data: T): Node<T>
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
			return newNode
		}

		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return newNode
	}
	public prepend(data: T) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			this.length++
			return newNode
		}
		const temp = this.head
		this.head = newNode
		this.head.next = temp
		this.length++
		return newNode
	}
}

const linkedList = new LinkedList()

linkedList.append(2)
linkedList.append(3)
linkedList.prepend(1)
linkedList.prepend(0)
console.log(linkedList)
