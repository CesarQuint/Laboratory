let result = 0;

//!Check the exercises

// for (let i = 0; i < word.length; ++i) {
// 	if (word[i] === "a") {
// 		if (word[i + 1] === "b" && word[i + 2] === "c") i += 2; // we have abc
// 		else if (word[i + 1] === "b" || word[i + 1] === "c") {
// 			// ab or ac only
// 			++i;
// 			++result;
// 		} else {
// 			// just a
// 			result += 2;
// 		}
// 	} else if (word[i] === "b") {
// 		// we start from b
// 		++result;
// 		if (word[i + 1] === "c") {
// 			// it is bc
// 			++i;
// 		} else ++result; // just b
// 	} else {
// 		result += 2; // only c
// 	}

// 	return result;
// }

//! Otra version
var addMinimum = function (word) {
	const w = ["a", "b", "c"];
	let result = 0;
	let currentIndex = 0;
	while (currentIndex < word.length) {
		for (let i = 0; i < 3; i++) {
			if (word.charAt(currentIndex) == w[i]) {
				currentIndex++;
			} else {
				result += 1;
			}
		}
	}
	return result;
};

let nums = [1, 12, -5, -6, 50, 3],
	k = 4;

var findMaxAverage = function (nums, k) {
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	let max = sum;
	for (let i = k; i < nums.length; i++) {
		sum = sum - nums[i - k] + nums[i];
		max = Math.max(max, sum);
	}

	return max / k;
};

let numeros = [1, 2, 3];
const findCoincidences = nums => {
	let set = new Set(nums);
	set = [...set];
	if (set.length < nums.length) return true;
	return false;
};

let s = "anagram",
	t = "nagaram";

const reverseString = (str1, str2) => {
	str1 = str1.split("");
	str2 = str2.split("");
	if () return true;
	return false;
};

console.log(reverseString(s, t));
