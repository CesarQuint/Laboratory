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
