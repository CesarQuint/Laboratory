let nums = [4, 10, 23, 1, 0]
console.log(nums.sort((a, b) => a - b))

var threeSum = function (nums) {
	nums.sort((a, b) => a - b)
	const result = []

	for (let i = 0; i < nums.length; i++) {
		let low = i + 1,
			high = nums.length - 1,
			sum = 0

		while (low < high) {
			sum = nums[i] + nums[low] + nums[high]

			if (sum === 0) {
				result.push([nums[i], nums[low], nums[high]])
				while (nums[low + 1] === nums[low]) low++
				while (nums[high - 1] === nums[high]) high--
				low++
				high--
			} else if (sum < 0) low++
			else high--
		}
		//-I don't understand why is this happening
		while (nums[i + 1] === nums[i]) i++
	}
	return result
}

//!Look for more information about Max

function trap(height) {
	if (height == null || height.length === 0) return 0

	let res = 0
	let l = height.length
	let lMax = {}
	let rMax = {}

	lMax[0] = height[0]
	for (let i = 1; i < l; i++) {
		lMax[i] = Math.max(height[i], lMax[i - 1])
	}

	rMax[l - 1] = height[l - 1]
	for (let i = l - 2; i >= 0; i--) {
		rMax[i] = Math.max(height[i], rMax[i + 1])
	}

	for (let i = 0; i < height.length; i++) {
		res += Math.min(lMax[i], rMax[i]) - height[i]
	}

	return res
}
