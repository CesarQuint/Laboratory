var asteroidCollision = function (asteroids) {
	const n = asteroids.length
	const s = []
	for (let i = 0; i < n; i++) {
		if (asteroids[i] > 0 || s.length === 0) {
			s.push(asteroids[i])
		} else {
			while (
				s.length > 0 &&
				s[s.length - 1] > 0 &&
				s[s.length - 1] < Math.abs(asteroids[i])
			) {
				s.pop()
			}
			if (s.length > 0 && s[s.length - 1] === Math.abs(asteroids[i])) {
				s.pop()
			} else {
				if (s.length === 0 || s[s.length - 1] < 0) {
					s.push(asteroids[i])
				}
			}
		}
	}
	const res = new Array(s.length)
	for (let i = s.length - 1; i >= 0; i--) {
		res[i] = s.pop()
	}
	return res
}

const a = [5, 10, -5]

const b = '3[a]2[bc]'

var decodeString = function (s) {
	let stack = []
	let currStr = ''
	let currNum = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '[') {
			stack.push(currStr)
			stack.push(currNum)
			currStr = ''
			currNum = 0
		} else if (s[i] === ']') {
			let prevNum = stack.pop()
			let prevStr = stack.pop()
			currStr = prevStr + currStr.repeat(prevNum)
		} else if (s[i] >= '0' && s[i] <= '9') {
			currNum = currNum * 10 + Number(s[i])
		} else {
			currStr += s[i]
		}
	}

	return currStr
}

var RecentCounter = function () {
	this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
	this.queue.push(t)

	while (this.queue[0] < t - 3000) {
		this.queue.shift()
	}
	return this.queue.length
}

const c = 'RDD'
var predictPartyVictory = function (senate) {
	let radiant = []
	let dire = []
	const n = senate.length

	for (let i = 0; i < n; i++) {
		if (senate[i] === 'R') {
			radiant.push(i + n)
		} else {
			dire.push(i + n)
		}
	}

	while (radiant.length > 0 && dire.length > 0) {
		if (radiant[0] < dire[0]) {
			radiant.push(radiant[0] + n)
		} else {
			dire.push(dire[0] + n)
		}
		radiant.shift()
		dire.shift()
	}

	return radiant.length > 0 ? 'Radiant' : 'Dire'
}
