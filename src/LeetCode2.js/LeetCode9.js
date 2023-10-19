let invertString = s => {
  let final = s.length - 1;

  for (let i = 0; i < final; i++) {
    [s[i], s[final]] = [s[final], s[i]];
    final--;
  }
  return s;
};

var reverseString2 = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    let tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++;
    r--;
  }
};

let example = ['H', 'a', 'n', 'n', 'a', 'h'];

var twoSum = function (numbers, target) {
  let pointA = 0;
  let pointB = numbers.length - 1;
  while (numbers[pointA] + numbers[pointB] !== target) {
    if (numbers[pointA] + numbers[pointB] < target) {
      pointA++;
    } else {
      pointB--;
    }
  }
  return [pointA + 1, pointB + 1];
};

console.log(invertString(example));
