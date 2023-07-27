class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}

	preprend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	apend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
		} else {
			let prev = this.head
			while (prev.next) {
				prev = prev.next
			}
			prev.next = node
		}
		this.size++
	}

	insert(value, index) {
		if (index < 0 || index >= this.size) return
		if (index === 0) {
			this.preprend(value)
		} else {
			const node = new Node(value)
			let prev = this.head
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			node.next = prev.next
			prev.next = node
			this.size++
		}
	}

	removeFrom(index) {
		if (index < 0 || index >= this.size) return null
		let removedNode = this.head
		if (index === 0) {
			removedNode = this.head
			this.head = this.head.next
		} else {
			let prev = this.head
			for (let i; i < index - 1; i++) {
				prev = prev.next
			}
			removedNode = prev.next
			prev.next = removedNode.next
		}
		this.size--
		return removedNode.value
	}

	print() {
		if (this.isEmpty()) {
			console.log('List is Empty')
		} else {
			let curr = this.head
			let listValues = ``
			while (curr) {
				listValues += `${curr.value} `
				curr = curr.next
			}
			console.log(listValues)
		}
	}
}

const list = new LinkedList()
console.log('List is empty', list.isEmpty())
console.log('List size', list.getSize())
list.preprend(10)
list.preprend(20)
list.print()
list.preprend(30)
list.print()
list.apend(40)
list.apend(50)
list.print()
