const Stack = function () {
  this.items = [];
};
Stack.prototype.push = function (obj) {
  this.items.push(obj);
};
Stack.prototype.pop = function () {
  return this.items.pop();
};
Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};
Stack.prototype.isExplored = function (n) {
  return this.items.indexOf(n) !== -1;
};
Stack.prototype.emptyOut = function () {
  this.items = [];
  return this.items.length === 0;
};

const stack = new Stack();
const adjList = [];
for (let i = 1; i < 15557; i++) {
  adjList.push([i]);
}
adjList.push([0]);

function DFS(graph, v) {
  const queue = [v];
  while (queue.length) {
    v = queue.pop();
    if (stack.isExplored(v)) continue;
    stack.push(v);
    for (let i = graph[v].length - 1; i >= 0; i--) {
      queue.push(graph[v][i]);
    }
  }
}
DFS(adjList, 0);
console.log("done", stack);
