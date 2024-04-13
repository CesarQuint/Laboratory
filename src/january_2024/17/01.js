var checkStraightLine = function (coordinates) {
  const [x0, y0] = coordinates[0],
    [x1, y1] = coordinates[1];
  const [a, b, c] = [y0 - y1, x1 - x0, x0 * y1 - x1 * y0];

  for (let [x, y] of coordinates) if (a * x + b * y + c) return false;

  return true;
};

var addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join('');
};

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  } else {
    return x * myPow(x, n - 1);
  }
};
