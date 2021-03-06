const fs = require("fs");
const input = fs
  .readFileSync("DFS와 BFS/input.txt")
  .toString()
  .trim()
  .split("\n");

const NMV = input.shift().split(" ");
const N = Number(NMV.shift());
const M = Number(NMV.shift());
const V = Number(NMV.shift());

const graph = new Array(N + 1).fill(0, 0, N + 1);
for (let i = 0; i <= N + 1; i++) {
  graph[i] = new Array(N + 1).fill(0, 0, N + 1);
}

for (let i = 0; i < M; i++) {
  const xy = input.shift().split(" ");
  const x = Number(xy.shift());
  const y = Number(xy.shift());

  graph[x][y] = 1;
  graph[y][x] = 1;
}

const BFS = function (node) {
  let answer = "";
  let visited = new Array(N + 1).fill(false, 0, N + 1);
  visited[node] = true;

  let Queue = [];
  Queue.push(node);

  while (Queue.length > 0) {
    let cur = Number(Queue.shift());
    answer += cur + " ";
    for (let next = 1; next <= N; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        Queue.push(next);
      }
    }
  }
  console.log(answer);
};

const DFS = function (node) {
  let answer = "";
  let visited = new Array(N + 1).fill(false, 0, N + 1);
  let stack = [];

  stack.push(node);

  while (stack.length > 0) {
    let cur = stack.pop();

    if (!visited[cur]) {
      visited[cur] = true;
      answer += cur + " ";

      for (let next = N; next >= 1; next--) {
        if (!visited[next] && graph[cur][next]) stack.push(next);
      }
    }
  }
  console.log(answer);
};

DFS(V);
BFS(V);
