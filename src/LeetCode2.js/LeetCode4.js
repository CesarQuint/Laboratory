var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res = [];

  function rec(i, pre) {
    if (i === digits.length) {
      res.push(pre.join(''));
    } else {
      const asci = parseInt(digits[i]) - 2;
      for (const letter of letters[asci]) {
        pre.push(letter);
        rec(i + 1, pre);
        pre.pop();
      }
    }
  }

  rec(0, []);
  return res;
};

var combinationSum3 = function (k, n) {
  const res = [];

  function permute(arr, sum, start) {
    if (sum > n) return;

    if (arr.length === k) {
      if (sum === n) res.push(arr);
      return;
    }

    for (let i = start; i < 10; i++) {
      permute([...arr, i], sum + i, i + 1);
    }
  }
  permute([], 0, 1);
  return res;
};

var tribonacci = function (n) {
  if (mem[n] !== undefined) return mem[n];
  return (mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3));
};

const mem = {
  0: 0,
  1: 1,
  2: 1,
};
