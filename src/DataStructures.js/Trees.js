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

bst.inOrder(bst.root)
