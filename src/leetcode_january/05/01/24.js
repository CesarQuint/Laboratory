var isMonotonic = function (nums) {
  if (nums.length < 2) return true;

  let direction = 0; // 0 means unknown, 1 means increasing, -1 means decreasing

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // increasing
      if (direction === 0) direction = 1;
      else if (direction === -1) return false;
    } else if (nums[i] < nums[i - 1]) {
      // decreasing
      if (direction === 0) direction = -1;
      else if (direction === 1) return false;
    }
  }

  return true;
};

var romanToInt = function (s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curValue = romanValue[s[i]];
    const nextValue = romanValue[s[i + 1]];
    if (curValue < nextValue) {
      result += nextValue - curValue;
      i++;
    } else result += curValue;
  }
  return result;
};
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

var calPoints = function (ops) {
  let stack = [];
  ops.forEach(op => {
    if (parseInt(op)) {
      stack.push(parseInt(op));
    } else if (op === '+') {
      stack.push(
        (stack[stack.length - 1] || 0) + (stack[stack.length - 2] || 0)
      );
    } else if (op === 'D') {
      stack.push((stack[stack.length - 1] || 0) * 2);
    } else if (op === 'C') {
      stack.pop();
    }
  });
  console.log(stack);
  return stack.reduce((a, v) => a + v, 0);
};
