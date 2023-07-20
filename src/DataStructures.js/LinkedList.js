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
