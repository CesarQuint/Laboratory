var goodNodes = function (root) {
  let good = 0;
  function trav(node, max) {
    if (!node) return;
    if (node.val >= max) ++good;
    max = Math.max(max, node.val);
    trav(node.left, max);
    trav(node.right, max);
  }
  trav(root, root.val);
  return good;
};

var pathSum = function (root, targetSum) {
  if (!root) return 0;

  const prefixSum = { 0: 1 };
  let count = 0;
  findSum(root, 0);

  function findSum(node, pathSum) {
    pathSum += node.val;

    const removePrefix = pathSum - targetSum;

    prefixSum[removePrefix] = prefixSum[removePrefix] || 0;
    count += prefixSum[removePrefix];

    prefixSum[pathSum] = prefixSum[pathSum] || 0;
    prefixSum[pathSum] += 1;

    if (node.left) findSum(node.left, pathSum);
    if (node.right) findSum(node.right, pathSum);

    prefixSum[pathSum] -= 1;
  }
  return count;
};

let ans = 0;

var dfs = (root, left, steps) => {
  if (root == undefined) {
    return;
  }

  ans = Math.max(ans, steps);

  if (left) {
    dfs(root.left, !left, steps + 1);
    dfs(root.right, left, 1);
  } else {
    dfs(root.left, left, 1);
    dfs(root.right, !left, steps + 1);
  }
};
var longestZigZag = function (root) {
  ans = 0;

  dfs(root, true, 0);
  dfs(root, false, 0);

  return ans;
};

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  return resL && resR ? root : resL || resR;
};

var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  pre(root, 0);
  return res;

  function pre(node, h) {
    if (!node) return;
    res[h] = node.val;
    pre(node.left, h + 1);
    pre(node.right, h + 1);
  }
};
