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
