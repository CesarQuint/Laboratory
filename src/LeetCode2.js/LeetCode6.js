var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; ++j) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  let m = text1.length;
  let n = text2.length;

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // two  possible scenarioes:
      // 1. the current char of text1 and text2 does not match
      // 2. the current char of text1 and text2 matches

      if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
        // check left and top for longer subsequence length
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }

  return dp[m][n];
};

var maxProfit = function (P, F) {
  let len = P.length,
    buying = 0,
    selling = -P[0];
  for (let i = 1; i < len; i++) {
    buying = Math.max(buying, selling + P[i] - F);
    selling = Math.max(selling, buying - P[i]);
  }
  return buying;
};
