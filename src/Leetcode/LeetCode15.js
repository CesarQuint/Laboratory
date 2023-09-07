function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j]
			j = j - 1
		}
		arr[j + 1] = numberToInsert
	}
}

function quickSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	let pivot = arr[arr.length - 1]
	let left = []
	let right = []
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}

	const mid = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, mid)
	const rightArr = arr.slice(mid)
	return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right) {
	const sortedArr = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sortedArr.push(left.shift())
		} else {
			sortedArr.push(right.shift())
		}
	}
	return [...sortedArr, left, right]
}
