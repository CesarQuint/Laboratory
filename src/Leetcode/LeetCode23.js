var maxLevelSum = function (root) {
  let queue = [root];
  let max = root.val;
  let level = 1;
  let currentLevel = 1;

  while (queue.length) {
    let newQueue = [];
    let currentSum = 0;
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      currentSum = currentSum + node.val;

      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }

    if (currentSum > max) {
      max = currentSum;
      level = currentLevel;
    }
    queue = newQueue;
    currentLevel++;
  }

  return level;
};

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
};

var deleteNode = function (root, key) {
  function callDFS(node) {
    if (!node) return null;
    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let curr = node.right;
      while (curr.left) curr = curr.left;
      curr.left = node.left;
      return node.right;
    }
    if (key > node.val) node.right = callDFS(node.right);
    else node.left = callDFS(node.left);
    return node;
  }
  return callDFS(root);
};
