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
