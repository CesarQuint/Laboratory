var guessNumber = function (n) {
  let l = 0,
    r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let res = guess(mid);
    if (res == 0) return mid;
    else if (res == 1) l = mid + 1;
    else r = mid - 1;
  }
  return l;
};

var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < spells.length; i++) {
    let low = 0;
    let high = potions.length - 1;
    while (low <= high) {
      let mid = low + ~~((high - low) / 2);
      if (potions[mid] * spells[i] >= success) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    result.push(potions.length - low);
  }
  return result;
};

var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};

var minEatingSpeed = function (piles, h) {
  let min = 1,
    max = Math.max(...piles),
    best = max;

  const time = speed =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (time(mid) <= h) {
      best = mid;
      max = mid - 1;
    } else min = mid + 1;
  }

  return best;
};
