function towerOfHanoi(n, fromRod, toRod, usingRod) {
	if (n === 1) {
		console.log(`Move Disk 1 from ${fromRod} to ${toRod}`)
		return
	}
	towerOfHanoi(n - 1, fromRod, usingRod, toRod)
	console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
	towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

let nums = [1, 7, 3, 6, 5, 6]
nums.slice()
nums.reduce((a, b) => a + b)
console.log(nums.reduce((a, b) => a + b))

const pivot = nums => {
	for (let index = 0; index < nums.length; index++) {
		let arr1 = [0]
		if (index !== 0) {
			arr1 = nums.slice(0, index)
		}
		let arr2 = nums.slice(index)
		if (arr1.reduce((a, b) => a + b) == arr2.reduce((a, b) => a + b))
			return index
	}
}

var findDifference = function (nums1, nums2) {
	let ans1 = new Set(nums1)
	nums2.forEach(v => {
		ans1.delete(v)
	})
	let ans2 = new Set(nums2)
	nums1.forEach(v => {
		ans2.delete(v)
	})

	return [[...ans1], [...ans2]]
}

console.log(pivot(nums))
