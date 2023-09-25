const getLeafs = root => {
	if (!root) return []

	const stack = [root],
		result = []
	while (stack.length) {
		const curr = stack.pop()
		if (!curr.left && !curr.right) result.push(curr.val)

		if (curr.left) stack.push(curr.left)
		if (curr.right) stack.push(curr.right)
	}

	return result
}

const leafSimilar = (root1, root2) => {
	if (!root1 || !root2) return false

	const root1Leafs = getLeafs(root1),
		root2Leafs = getLeafs(root2)

	if (root1Leafs.length !== root2Leafs.length) return false

	for (let i = 0; i < root1Leafs.length; i++) {
		if (root1Leafs[i] !== root2Leafs[i]) return false
	}

	return true
}

var maxDepth = function (root) {
	if (!root) return 0
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

var pairSum = function (head) {
	var st = []
	while (head != null) {
		st.push(head.val)
		head = head.next
	}
	let max = 0
	for (let i = 0; i < st.length; i++) {
		max = Math.max(max, st[i] + st[st.length - 1 - i])
	}
	return max
}

let a = 4

funcionb()

const funcionb = () => {}

var goodNodes = function (root) {
	let good = 0
	function trav(node, max) {
		if (!node) return
		if (node.val >= max) ++good
		max = Math.max(max, node.val)
		trav(node.left, max)
		trav(node.right, max)
	}
	trav(root, root.val)
	return good
}

var pathSum = function (root, targetSum) {
	if (!root) return 0

	const prefixSum = { 0: 1 }
	let count = 0
	findSum(root, 0)

	function findSum(node, pathSum) {
		pathSum += node.val

		const removePrefix = pathSum - targetSum

		prefixSum[removePrefix] = prefixSum[removePrefix] || 0
		count += prefixSum[removePrefix]

		prefixSum[pathSum] = prefixSum[pathSum] || 0
		prefixSum[pathSum] += 1

		if (node.left) findSum(node.left, pathSum)
		if (node.right) findSum(node.right, pathSum)

		prefixSum[pathSum] -= 1
	}
	return count
}

//-
let ans = 0

var dfs = (root, left, steps) => {
	if (root == undefined) {
		return
	}

	ans = Math.max(ans, steps)

	if (left) {
		dfs(root.left, !left, steps + 1)
		dfs(root.right, left, 1)
	} else {
		dfs(root.left, left, 1)
		dfs(root.right, !left, steps + 1)
	}
}
var longestZigZag = function (root) {
	ans = 0

	dfs(root, true, 0)
	dfs(root, false, 0)

	return ans
}
