var average = function (salary) {
  var min = Math.min(...salary);
  var max = Math.max(...salary);
  const na = salary.filter(sal => sal !== max).filter(sal => sal !== min);
  const result = na.reduce((a, b) => a + b) / na.length;
  return result;
};

var compareFn = function (a, b) {
  // put larger element of the left hand side
  return b - a;
};

var largestPerimeter = function (nums) {
  nums.sort(compareFn);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      // Accept: find the triangle with largest perimeter
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }

  // Reject: impossible to make triangle
  return 0;
};

var findWinners = function (matches) {
  let losses = new Array(100001).fill(0);

  for (const [winner, loser] of matches) {
    if (losses[winner] === 0) {
      losses[winner] = -1;
    }

    if (losses[loser] === -1) {
      losses[loser] = 1;
    } else {
      losses[loser]++;
    }
  }

  let zeroLoss = [];
  let oneLoss = [];

  for (let i = 1; i <= 100000; ++i) {
    if (losses[i] === -1) {
      zeroLoss.push(i);
    } else if (losses[i] === 1) {
      oneLoss.push(i);
    }
  }

  return [zeroLoss, oneLoss];
};

var maxFrequencyElements = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = 0;
  for (let frequency of map.values()) {
    max = Math.max(max, frequency);
  }
  let res = 0;
  for (let frequency of map.values()) {
    if (frequency === max) {
      res += frequency;
    }
  }
  return res;
};

var uniqueOccurrences = function (arr) {
  let myMap = new Map();

  for (let num of arr) {
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  let mySet = new Set();

  for (const val of myMap.values()) {
    if (mySet.has(val)) return false;

    mySet.add(val);
  }

  return true;
};
