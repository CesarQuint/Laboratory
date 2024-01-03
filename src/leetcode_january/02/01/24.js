//* Plus one exercise
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
};

//*ArraySign

var arraySign = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    const product = nums[i];
    result = result === 0 ? product : result * product;
  }
  if (result > 0) return 1;
  else return result < 0 ? -1 : 0;
};
