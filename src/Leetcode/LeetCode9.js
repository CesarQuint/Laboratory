let nums = [4, 1, -1, 2, -1, 2, 3]
let k = 2

const findCoincidences = (nums, k) => {
	if (nums.length < 2) return nums
	let obj = {}
	let i = 0
	while (i < nums.length) {
		if (obj[nums[i]]) {
			obj[nums[i]] = obj[nums[i]] + 1
		} else {
			obj[nums[i]] = 1
		}
		i++
	}
	let matriz = Object.entries(obj)
	console.log(matriz)
	// Ordena la matriz en orden descendente basándose en el valor
	matriz = matriz.sort((a, b) => b[1] - a[1])

	// Crea un nuevo objeto a partir de la matriz ordenada
	const objetoOrdenado = Object.fromEntries(matriz)
	console.log(objetoOrdenado)
	obj = Object.keys(objetoOrdenado)
	obj = obj.slice(0, k)
	return obj
}

console.log(findCoincidences(nums, k))

//*Mi solucion si encuentra los valores pero no los ordena

//!Estudiar esta solucion

var topKFrequent = function (nums, k) {
	const freqMap = new Map()
	const bucket = []
	const result = []

	for (let num of nums) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1)
	}

	for (let [num, freq] of freqMap) {
		bucket[freq] = (bucket[freq] || new Set()).add(num)
	}

	for (let i = bucket.length - 1; i >= 0; i--) {
		if (bucket[i]) result.push(...bucket[i])
		if (result.length === k) break
	}
	return result
}

//!Estudiar tambien este

var topKFrequent = function (nums, k) {
	let res = [],
		map = new Map()

	nums.forEach(n => map.set(n, map.get(n) + 1 || 1))

	let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1])

	for (let i = 0; i < k; i++) {
		res.push(sortedArray[i][0])
	}

	return res
}
