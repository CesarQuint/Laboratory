let grid = [
	[3, 2, 1],
	[1, 7, 6],
	[2, 7, 7],
]

const findRow = arr => {
	let nMap = new Map()
	let counter = 0
	for (let index = 0; index < arr.length; index++) {
		if (nMap.has(arr[index].toString())) {
			nMap
		} else {
			nMap.set(arr[index].toString(), 0)
		}
	}

	for (let i = 0; i < arr[0].length; i++) {
		let temp = [arr[0][i]]
		for (let j = 1; j < arr.length; j++) {
			temp.push(arr[j][i])
		}
		if (nMap.has(temp.toString())) {
			counter++
		}
	}

	return counter
}

console.log(findRow(grid))

var equalPairs = function (grid) {
	const n = grid.length
	let count = 0
	const rows = new Map()

	for (let r = 0; r < n; r++) {
		const row = JSON.stringify(grid[r])
		rows.set(row, 1 + (rows.get(row) || 0))
	}

	for (let c = 0; c < n; c++) {
		const col = JSON.stringify(grid.map(row => row[c]))
		count += rows.get(col) || 0
	}

	return count
}

let s = 'leet**cod*e'

const findStart = arr => {
	let prev = 0
	let current = 0
	for (let i = 0; i < arr.length; i++) {
		if (i !== 0) {
			prev = i - 1
		}
		if (arr[i] == '*' && arr[prev] !== '*') {
		}
		console.log(arr)
	}
}

var removeStars = function (s) {
	const stack = []

	// Iterate over each character in the input string
	for (const c of s) {
		// If the current character is a star and the stack is not empty, pop the topmost character
		// from the stack
		if (c === '*' && stack.length) {
			stack.pop()
		}
		// Otherwise, push the current character onto the stack
		else {
			stack.push(c)
		}
	}

	// Convert the stack to a string and return it as the output
	return stack.join('')
}

findStart(s)
