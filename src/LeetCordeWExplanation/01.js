var maximalRectangle = function (aa) {
  let mLength = aa.length,
    nHeight = aa[0].length;

  let widthOnLeftTillHere = Array.from({ length: mLength }, () =>
    new Array(nHeight).fill(0)
  );
  for (let r = 0; r < mLength; r++)
    for (let c = 0; c < nHeight; c++)
      if (aa[r][c] === "1") {
        widthOnLeftTillHere[r][c] = (widthOnLeftTillHere[r][c - 1] || 0) + 1;
      }

  let maxArea = 0;
  for (let r = 0; r < mLength; r++)
    for (let c = 0; c < nHeight; c++)
      if (aa[r][c] === "1") {
        let minWidthGoingUp = Infinity;
        let increasingHeight = 1;
        for (let r2 = r; r2 >= 0; r2--, increasingHeight++) {
          minWidthGoingUp = Math.min(
            minWidthGoingUp,
            widthOnLeftTillHere[r2][c]
          );
          maxArea = Math.max(maxArea, minWidthGoingUp * increasingHeight);
        }
      }
  return maxArea;
};
