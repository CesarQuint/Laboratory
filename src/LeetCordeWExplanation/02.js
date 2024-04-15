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

//!129 Sum Root to leaf Numbers

// * You are given the root of a binary tree containing digits from 0 to 9 only.
//* Each root-to-leaf path in the tree represents a number.
//* For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
//* Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
//* A leaf node is a node with no children.

var sumNumbers1 = function (root) {
  //* Declare a total
  let total = 0;

  // DFS with node and sum
  let dfs = (node, sum) => {
    // If the node is a leaf, "shift", add, and sum to total
    if (!node.left && !node.right) total += sum * 10 + node.val;
    else {
      // If not a leaf...
      // ...and has a left child,
      // DFS on the left side after "shifting" by one place
      if (node.left) dfs(node.left, sum * 10 + node.val);
      // ...and has a right child,
      // DFS on the right side after "shifting" by one place
      if (node.right) dfs(node.right, sum * 10 + node.val);
    }
  };

  // Call on root with current sum 0
  dfs(root, 0);

  // Return answer
  return total;
};

var sumNumbers2 = function (root) {
  //Edge case
  if (!root) return 0;

  //Recursive function
  const dfs = (node, prefix) => {
    //Edge case of recursive
    if (!node) return 0;

    //Current value
    const currentVal = prefix * 10 + node.val;
    //Leaf cage
    if (node.left == null && node.right == null) {
      return currentVal;
    }
    //Sum of two children
    return dfs(node.left, currentVal) + dfs(node.right, currentVal);
  };

  return dfs(root, 0);
};
