//!Consecutive Numbers
function longestConsecutive(nums) {
	if (nums == null || nums.length === 0) return 0

	const set = new Set(nums)
	let max = 0

	for (let num of set) {
		if (set.has(num - 1)) continue // make sure starting from the beginning of sequence

		let currNum = num
		let currMax = 1

		while (set.has(currNum + 1)) {
			currNum++
			currMax++
		}
		max = Math.max(max, currMax)
	}

	return max
}

const lookForPalindrome = s => {
	//*Regular Expresion to substitude this
	s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
		if (s.charAt(i) !== s.charAt(j)) return false
	}
	return true
}
