// let dp = Array(word1.length + 1)
//   .fill(null)
//   .map(() => Array(word2.length + 1).fill(0));

// for (let i = 0; i < dp.length; i++) {
//   dp[i][0] = i;
// }

// for (let i = 0; i < dp[0].length; i++) {
//   dp[0][i] = i;
// }

// for (let i = 1; i < dp.length; i++) {
//   for (let j = 1; j < dp[0].length; j++) {
//     dp[i][j] = Math.min(
//       dp[i - 1][j] + 1, // left
//       dp[i][j - 1] + 1, // right
//       dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1] ? 1 : 0) // diagonal
//     );
//   }
// }
// return dp[dp.length - 1][dp[0].length - 1];

// let result = Array(n + 1).fill(0);
// let offset = 1;
// for (let i = 1; i < n + 1; i++) {
//   if (offset * 2 === i) {
//     offset = i;
//   }
//   result[i] = 1 + result[i - offset];
// }

// return result;

// var singleNumber = function (nums) {
//   // Initialize the unique number...
//   let uniqNum = 0;
//   // TRaverse all elements through the loop...
//   for (let idx = 0; idx < nums.length; idx++) {
//     // Concept of XOR...
//     uniqNum = uniqNum ^ nums[idx];
//   }
//   return uniqNum;
// };

let vars = [2, 5, 6, 7, 16];
function minimumTwice(arr) {
  let max = Math.max(...arr);

  let p = 0;
  while (p < arr.length) {
    if (arr[p] !== max) {
      if (arr[p] * 2 > max) {
        return -1;
      }
    }
    p++;
  }
  return arr.indexOf(max);
}

const test1 = [2, 9, 6, 9, 9];

const sum1 = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(sum1(test1));
