var calcEquation = function (equations, values, queries) {
  // Step 1: Build the graph
  let graph = {};

  for (let i = 0; i < equations.length; i++) {
    let [numerator, denominator] = equations[i];

    let value = values[i];

    if (!graph[numerator]) {
      graph[numerator] = {};
    }

    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = value;
    graph[denominator][numerator] = 1 / value;
  }

  // Step 2: Evaluate queries using DFS
  let evaluateQuery = (numerator, denominator, visited) => {
    if (!(numerator in graph) || !(denominator in graph)) {
      return -1.0;
    }

    if (numerator === denominator) {
      return 1.0;
    }

    visited.add(numerator);
    let neighbors = graph[numerator];

    for (let neighbor in neighbors) {
      if (!visited.has(neighbor)) {
        let result = evaluateQuery(neighbor, denominator, visited);

        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  // Step 3: Process queries
  let results = [];

  for (let query of queries) {
    let [numerator, denominator] = query;
    let visited = new Set();
    let result = evaluateQuery(numerator, denominator, visited);

    results.push(result);
  }

  return results;
};

const nearestExit = (maze, [y0, x0]) => {
  maze[y0][x0] = '@';
  const queue = [[y0, x0, 0]];
  while (queue.length) {
    const [y, x, step] = queue.shift();
    for (const [dy, dx] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const ny = y + dy,
        nx = x + dx;
      if (!maze[ny] || !maze[ny][nx]) {
        if (step) return step;
      } else if (maze[ny][nx] === '.') {
        queue.push([ny, nx, step + 1]);
        maze[ny][nx] = '*';
      }
    }
  }
  return -1;
};

var orangesRotting = function (grid) {
  let queue = [],
    oranges = 0,
    time = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) oranges++;
      else if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const endR = grid.length - 1,
    endC = grid[0].length - 1;

  while (queue.length && oranges) {
    const [curR, curC, mins] = queue.shift();

    if (grid[curR][curC] === 1) {
      grid[curR][curC] = 2;
      oranges--;
      time = mins;
    }

    for (let [addR, addC] of dirs) {
      const [newR, newC] = [curR + addR, curC + addC];
      if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;
      if (grid[newR][newC] === 1) {
        queue.push([newR, newC, mins + 1]);
      }
    }
  }

  return oranges ? -1 : time;
};

var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();
  for (let num of nums) {
    minHeap.add(num);
    if (minHeap.size() > k) {
      minHeap.poll();
    }
  }
  return minHeap.peek();
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  poll() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      let smallestChildIndex = index;
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (smallestChildIndex !== index) {
        this.swap(smallestChildIndex, index);
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

var SmallestInfiniteSet = function () {
  this.heap = [];
  this.min_num = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.heap.length > 0) {
    return this.heap.shift();
  }
  this.min_num += 1;
  return this.min_num - 1;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.min_num > num && this.heap.indexOf(num) === -1) {
    this.heap.push(num);
    this.heap.sort((a, b) => a - b);
  }
};

var maxScore = function (nums1, nums2, k) {
  let result = 0;
  let totalSum = 0;
  let heap = new MinPriorityQueue({ priority: element => element });

  const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val]);
  merged.sort((a, b) => b[0] - a[0]);

  for (const [maxOf2, num1Val] of merged) {
    if (heap.size() === k) {
      totalSum -= heap.dequeue().element;
    }

    totalSum += num1Val;
    heap.enqueue(num1Val);

    if (heap.size() === k) {
      result = Math.max(result, totalSum * maxOf2);
    }
  }

  return result;
};
