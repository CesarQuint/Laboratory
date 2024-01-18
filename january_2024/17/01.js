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
