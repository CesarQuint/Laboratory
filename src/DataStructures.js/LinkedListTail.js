class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}

	preprend(value) {
		const node = new Node()
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	append(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.size++
	}

	removeFromFront() {
		if (this.isEmpty()) {
			return null
		}
		const value = this.head.value
		this.head = this.head.next
		this.size--
		return value
	}

	removeFromEnd() {
		if (this.isEmpty()) {
			return null
		}
		const value = this.tail.value
		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while (prev.next !== this.tail) {
				prev = prev.next
			}
			prev.next = null
			this.tail = prev
		}
		this.size--
		return value
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

	removeValue(value) {
		if (this.isEmpty()) return null
		if ((this.head.value = value)) {
			this.head = this.head.next
			this.size--
			return value
		} else {
			let prev = this.head
			while (prev.next && prev.next.value !== value) {
				prev = prev.next
			}
			if (prev.next) {
				const removedNode = prev.next
				prev.next = removedNode.next
				this.size--
				return value
			}
			return null
		}
	}

	search(value) {
		if (this.isEmpty()) return -1
		let i = 0
		let current = this.head
		while (current) {
			if (current.value === value) return i
			current = current.next
			i++
		}
		return -1
	}

	reverse() {
		let prev = null
		let curr = this.head
		while (curr) {
			let next = curr.next
			curr.next = prev
			prev = curr
			curr = next
		}
		this.head = prev
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
