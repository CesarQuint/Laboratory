function recursiveFactorial(n) {
	if (n === 0) {
		return 1
	}
	return n * recursiveFactorial(n - 1)
}

function BinarySearch(arr, target) {
	let leftIndex = 0
	let rightIndex = arr.length - 1

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor(leftIndex + rightIndex / 2)
		if (target === arr[middleIndex]) {
			return middleIndex
		}
		if (target < arr[middleIndex]) {
			rightIndex = middleIndex - 1
		} else {
			leftIndex = middleIndex + 1
		}
	}
	return -1
}

//-Binary Search Recursive

function recursiveBinarySearch(arr, length) {
	return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) {
		return -1
	}

	let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
	if (target === arr[middleIndex]) {
		return middleIndex
	}

	if (target < arr[middleIndex]) {
		return search(arr, target, leftIndex, middleIndex + 1)
	} else {
		return search(arr, target, middleIndex + 1, rightIndex)
	}
}

const longestSubarray = nums => {
	let longestSubarray = 0

	let leftIndex = 0
	let rightIndex = 0

	let canDelete = true

	while (rightIndex < nums.length) {
		if (nums[rightIndex] === 1) {
			rightIndex++
		} else if (canDelete) {
			rightIndex++
			canDelete = false
		} else if (nums[leftIndex] === 1) {
			leftIndex++
		} else {
			leftIndex++
			canDelete = true
		}

		longestSubarray = Math.max(longestSubarray, rightIndex - leftIndex - 1)
	}

	return longestSubarray
}

const largestAltitude = gain => {
	let previous = 0
	let biggest = 0

	for (let i = 0; i < gain.length; i += 1) {
		previous += gain[i]
		if (previous > biggest) biggest = previous
	}

	return biggest
}
