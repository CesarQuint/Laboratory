let exampleArr = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let majority = 0;

  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
    if (hash[n] > majority) {
      res = n;
      majority = hash[n];
    }
  }

  return res;
};
