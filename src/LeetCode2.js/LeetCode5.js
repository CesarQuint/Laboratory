var tribonacci = function (n) {
  if (mem[n] !== undefined) return mem[n];
  return (mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3));
};

const mem = {
  0: 0,
  1: 1,
  2: 1,
};

var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; ~i; i--)
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  return Math.min(cost[0], cost[1]);
};

var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxAtCurrent;
  }

  return maxAtOneBefore;
};

var numTilings = function (n) {
  let mod = 10 ** 9 + 7;
  let len = 4;
  let ways = new Array(len).fill(0);

  // base cases
  ways[0] = 1;
  ways[1] = 1;
  ways[2] = 2;

  // already calculated above
  if (n < len - 1) {
    return ways[n];
  }

  // use % len to circulate values inside our array
  for (var i = len - 1; i <= n; i++) {
    ways[i % len] =
      (ways[(len + i - 1) % len] * 2 + ways[(len + i - 3) % len]) % mod;
  }

  return ways[(i - 1) % len];
};
