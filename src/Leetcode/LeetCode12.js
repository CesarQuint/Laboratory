let nums = [4, 10, 23, 1, 0]

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

//!Fibonacci Sequence

function fivonacci(number) {
	if (number < 2) {
		return -1
	}
	let arr = [0, 1]
	while (arr.length !== number) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2])
	}
	return arr
}

//!Factorial of a number

const factorial = number => {
	let total = number
	for (let i = 1; i < number; i++) {
		total *= number - i
	}
	return total
}

console.log(factorial(2))

//!Recursion Examples

function recursiveFibonacci(n) {
	if (n < 2) {
		return n
	}

	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

//*This solution is O(2^n)
