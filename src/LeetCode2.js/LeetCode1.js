var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  dfs(0, visited, rooms);
  return visited.size === rooms.length;
};

const dfs = (room, visited, rooms) => {
  visited.add(room);
  for (const key of rooms[room]) {
    if (!visited.has(key)) {
      dfs(key, visited, rooms);
    }
  }
};

//!Ejercicio de Arriba sin recursividad

var canVisitAllRooms = function (R) {
  let vis = new Uint8Array(R.length),
    stack = [0],
    count = 1;
  vis[0] = 1;
  while (stack.length) {
    let keys = R[stack.pop()];
    console.log(keys);
    for (let k of keys) if (!vis[k]) stack.push(k), (vis[k] = 1), count++;
  }
  return R.length === count;
};
