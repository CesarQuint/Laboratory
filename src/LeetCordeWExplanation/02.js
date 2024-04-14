//!404 Sum of leaves
//* Given the root of a binary tree, return the sum of all left leaves.
//* A leaf is a node with no children. A left leaf is a leaf that is the left child of another node

//* Explain this Function Recursivity
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  let ans = 0;

  if (root.left) {
    if (!root.left.left && !root.left.right) ans += root.left.val;
    else ans += sumOfLeftLeaves(root.left);
  }

  ans += sumOfLeftLeaves(root.right);

  return ans;
};
