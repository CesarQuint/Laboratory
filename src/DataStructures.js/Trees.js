//*A tree is a hierarchical data structure that consists of nodes connected by edges
//-A tree is a non-linear data structure ,compared to arrays ,linked list ,stacks and queue which are linear data structures
//!Trees however ,owing to the nonlinear nature allow quicker and easier access to the data
//! A TREE WILL NOT CONTAIN ANY LOOP OR CYCLE

//- Scenarios ( File System for directory structure , A family tree , An organisation tree , DOM)

//* Tree Terminology
//*The firs node is root
//- The nodes that doesn't have any child are leaves
//-Degree is the quantity of edges a node possess

//!Binary Tree is the most common
//*Each node has a maximum of 2 nodes

//- The value of each left node must be smaller than the parent node

//- The value of each right node must be greater than the parent node

//-Each node has a maximum 2 children
//!Tree Traversal

//* Visiting every node in the tree

//* A hierarchical data structure like a tree can be traversed in 2 ways

// -DEpth Firs Search (DFS)
// - Breadth First Search (BFS)

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	isEmpty() {
		return this.root === null
	}

	insert(value) {
		const newNode = new Node(value)
		if (this.isEmpty()) {
			this.root = newNode
		} else {
			this.insertNode(this.root, newNode)
		}
	}

	insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (root.left === null) {
				root.left = newNode
			} else {
				this.insertNode(root.left, newNode)
			}
		} else {
			if (root.right === null) {
				root.right = newNode
			} else {
				this.insertNode(root.right, newNode)
			}
		}
	}

	search(root, value) {
		if (!root) {
			return false
		} else {
			if (root.value === value) {
				return true
			} else if (value < root.value) {
				return this.search(root.left, value)
			} else {
				return this.search(root.right, value)
			}
		}
	}

	preOrder(root) {
		if (root) {
			console.log(root.value)
			this.preOrder(root.left)
			this.preOrder(root.right)
		}
	}

	inOrder(root) {
		if (root) {
			this.inOrder(root.left)
			console.log(root.value)
			this.inOrder(root.right)
		}
	}

	postOrder(root) {
		if (root) {
			this.postOrder(root.left)
			this.postOrder(root.right)
			console.log(root.value)
		}
	}

	levelOrder() {
		//Use the optimized queue
		const queue = []
		queue.push(this.root)
		while (queue.length) {
			let curr = queue.shift()
			console.log(curr.value)
			if (curr.left) {
				queue.push(curr.left)
			}
			if (curr.right) {
				queue.push(curr.right)
			}
		}
	}

	min(root) {
		if (!root.left) {
			return root.value
		} else {
			return this.min(root.left)
		}
	}

	max(root) {
		if (!root.right) {
			return root.value
		} else {
			return this.max(root.right)
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value)
	}

	deleteNode(root, value) {
		if (root === null) {
			return root
		}
		if (value < root.value) {
			root.left = this.deleteNode(root.left, value)
		} else if (value > root.value) {
			root.right = this.deleteNode(root.right, value)
		} else {
			if (!root.left && !root.right) {
				return null
			}
			if (!root.left) {
				return root.right
			} else if (!root.right) {
				return root.left
			}
			root.value = this.min(root.right)
			root.right = this.deleteNode(root.right, root.value)
		}
		return root
	}
}

const bst = new BinarySearchTree()

console.log('Tree is empty' + bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 25))

bst.levelOrder()
