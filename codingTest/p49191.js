function fail(n, results) {
  if (n === 1) return 1;
  let answer = n;
  const graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(n).fill(null);
  }
  for (const game of results) {
    graph[game[0] - 1][game[1] - 1] = true;
    graph[game[1] - 1][game[0] - 1] = false;
  }
  console.log(graph);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (graph[i][j] === null) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
