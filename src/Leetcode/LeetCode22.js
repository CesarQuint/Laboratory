function lowestCommonAncestor(root, p, q) {
	if (!root || root === p || root === q) return root
	var resL = lowestCommonAncestor(root.left, p, q)
	var resR = lowestCommonAncestor(root.right, p, q)
	return resL && resR ? root : resL || resR
}

var rightSideView = function (root) {
	if (!root) return []
	let res = []
	pre(root, 0)
	return res

	function pre(node, h) {
		if (!node) return
		res[h] = node.val
		pre(node.left, h + 1)
		pre(node.right, h + 1)
	}
}
