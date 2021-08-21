export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {
	append(data: T): this
	prepend(data: T): this
	printList(): Array<T>
	traverse(index: number): Node<T>
	insert(index: number, data: T): this
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
	public printList() {
		const array = []
		let currentNode = this.head
		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array
	}
	public traverse(index: number) {
		let currentNode = this.head
		if (!currentNode) return null
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next
		}
		return currentNode
	}

	public insert(index: number, data: T) {
		const newNode = new Node(data)
		const head = this.traverse(index)
		const temp = head.next
		head.next = newNode
		newNode.next = temp
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
console.log(linkedList.printList())
console.log(linkedList.traverse(2))
linkedList.insert(2, 4)
console.log(linkedList)
console.log(linkedList.printList())
