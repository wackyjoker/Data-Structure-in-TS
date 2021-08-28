export class Node<T> {
	public prev: Node<T> | null = null
	public next: Node<T> | null = null
	public constructor(public value: T) {}
}

interface IDoublyLinkedList<T> {
	append(data: T): this
	prepend(data: T): this
	printList(): Array<T>
	traverseToIndex(index: number): Node<T>
	insert(index: number, data: T): this
	delete(index: number): this
	reverse(): this
}

class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
	public head: Node<T> | null = null
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
		newNode.prev = this.tail
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
		this.head.prev = newNode
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
		newNode.prev = current
		newNode.next = tempMemory
		tempMemory.prev = newNode
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
		if (this.length < 2) return this

		let lead = this.tail //5
		let temp = lead.prev //4
		lead.prev = null
		this.head = lead
		while (temp.prev) {
			this.tail = temp // 4
			lead.next = this.tail //54
			temp = this.tail.prev // 3
			this.tail.prev = lead //4
			this.tail.next = temp // 2
			lead = this.tail // 4
		}
		this.tail = lead.next
		this.tail.next = null
		this.tail.prev = lead
		console.log(this.head)
		return this
	}
}
const doublyLinkedList = new DoublyLinkedList<number>()

doublyLinkedList.append(2)
doublyLinkedList.append(3)
doublyLinkedList.append(5)
doublyLinkedList.prepend(1)
doublyLinkedList.insert(2, 4)
console.log(doublyLinkedList)
console.log(doublyLinkedList.printList())
doublyLinkedList.reverse()
console.log(doublyLinkedList.printList())
// console.log(linkedList.traverseToIndex(2))

// linkedList.insert(200, 6)
// console.log(linkedList)
// console.log(linkedList.printList())
// linkedList.delete(1)
// console.log(linkedList)
// console.log(linkedList.printList())

/*
looping through each node to debug
*/
function printLinkedList(obj: DoublyLinkedList<number>, next: string = "next"): null {
	let headNode = obj.head

	console.log(headNode)
	while (headNode) {
		console.log(headNode.next)
		headNode = headNode.next
		if (!headNode) break
	}

	console.log("the End")
	return null
}
//printLinkedList(doublyLinkedList)
