let nums = [3, 2, 4],
	target = 6

function getTheIndex(nums, target) {
	let start = 0
	let end = nums.length - 1
	let ansArr = []
	while (start < end) {
		if (nums[start] + nums[end] === target) {
			break
		} else if (nums[start] + nums[end] > target) end--
		else {
			start++
		}
		ansArr = [start + 1, end + 1]
	}
	return ansArr
}

//*Respuesta LeetCode utilizando un Map
//-Lo que el map hace en cada iteracion es buscar si existe el valor por logica de targent -valor actual
//-De esa forma buscamos dos numeros que den ese resultado en base a una funcion matematica

var twoSum = function (nums, target) {
	let map = new Map()

	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i]
		} else {
			map.set(nums[i], i)
		}
	}
	return []
}
