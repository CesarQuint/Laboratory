function oddEvenList(head) {
	if (!head) return head

	var odd = head
	var even = head.next
	while (odd.next && odd.next.next) {
		var tmp = odd.next
		odd.next = odd.next.next
		odd = odd.next
		tmp.next = odd.next
	}
	odd.next = even
	return head
}

var reverseList = function (head) {
	let prev = null
	let curr = head
	let next = null

	while (curr !== null) {
		// save next
		next = curr.next
		// reverse
		curr.next = prev
		// advance prev and curr
		prev = curr
		curr = next
	}
	return prev
}
