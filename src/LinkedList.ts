export class Node<T> {
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface ILinkedList<T> {
	append(data: T): this
	prepend(data: T): this
	printList(): Array<T>
	traverseToIndex(index: number): Node<T>
	insert(index: number, data: T): this
	delete(index: number): this
	reverse(): this
}

class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null
	private tail: Node<T> | null = null
	public length: number = 0

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
	public traverseToIndex(index: number) {
		let currentNode = this.head
		if (!currentNode) return null
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next
		}
		return currentNode
	}

	public insert(index: number, data: T) {
		if (index >= this.length) {
			return this.append(data)
		}
		const newNode = new Node(data)
		const current = this.traverseToIndex(index)
		const tempMemory = current.next
		current.next = newNode
		newNode.next = tempMemory
		this.length++
		return this
	}
	public delete(index: number) {
		const current = this.traverseToIndex(index - 1)
		const toBeDeleted = current.next
		current.next = toBeDeleted.next
		this.length--
		return this
	}
	public reverse() {
		if (this.length < 2) {
			return this
		}
		let leader = this.head.next
		let temp = leader.next
		this.tail = this.head
		this.tail.next = null

		while (leader.next) {
			leader.next = this.head
			this.head = leader
			leader = temp
			temp = leader.next
		}
		leader.next = this.head
		this.head = leader

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
console.log(linkedList.traverseToIndex(2))
linkedList.insert(2, 4)
linkedList.insert(200, 6)
console.log(linkedList)
console.log(linkedList.printList())
linkedList.delete(1)
console.log(linkedList.printList())

console.log("---------")

linkedList.reverse()
console.log(linkedList.printList())
