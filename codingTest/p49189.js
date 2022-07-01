function solution(n, edge) {
  let answer = 0;
  let queue = [];
  let dist = new Array(n + 1).fill(-1);
  dist[1] = 0;
  let graph = new Array(n + 1).fill(0).map((e) => []);
  //console.log(graph)
  for (let i of edge) {
    //console.log(graph[i[0]][i[1]])
    //console.log(graph[i[1]][i[0]])
    graph[i[0]].push(i[1]);
    graph[i[1]].push(i[0]);
  }
  queue.push(1);
  while (queue.length != 0) {
    let cur = queue.shift();
    for (let i = 1; i <= n; i++) {
      if (graph[cur].indexOf(i) != -1 && dist[i] == -1) {
        dist[i] = dist[cur] + 1;
        queue.push(i);
      }
    }
  }
  let max = Math.max(...dist);
  answer = dist.reduce((prev, next) => prev + (next == max ? 1 : 0), 0);
  return answer;
}

function dfs(n, edge) {
  const answer = {
    value: 0,
    dist: -1,
  };
  const visit = new Array(n + 1).fill(false);
  const stack = [[1, 0]];
  // const testStack = [[1, 0]];
  const graph = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    const row = [];
    graph[i] = row;
  }
  for (let i = 0; i < edge.length; i++) {
    graph[edge[i][0]].push(edge[i][1]);
    graph[edge[i][1]].push(edge[i][0]);
  }
  // console.log("graph:", graph);
  visit[1] = true;
  while (stack.length > 0) {
    const cur = stack.pop();
    if (answer.dist < cur[1]) {
      // console.log(answer, "resetted to");
      answer.dist = cur[1];
      answer.value = 1;
    } else {
      if (answer.dist === cur[1]) answer.value++;
    }
    // console.log(cur[0], answer);
    for (let nxt of graph[cur[0]]) {
      if (visit[nxt] === false) {
        visit[nxt] = true;
        stack.push([nxt, cur[1] + 1]);
        // testStack.push([nxt, cur[1] + 1]);
      }
    }
  }
  // console.log("test stack:", testStack);
  // console.log("answer", answer);
  // console.log("----");
  return answer.value;
}

function bfsThirdParty(start, end, array) {
  // from https://jacobgrowthstory.tistory.com/90
  // function solution(n, edge) {return bfsThirdParty(1, n, edge);}

  const isVisited = Array(end + 1).fill(false);
  const distanceArr = Array(end + 1).fill(0);

  // queue에 start(1번 노드)를 할당하고, 방문 기록을 true로 변경
  let queue = [start];
  isVisited[start] = true;

  while (queue.length > 0) {
    // queue의 0번째 인덱스를 꺼내 head 변수에 할당
    // 1에서 head까지의 거리에 추가로 1을 더한 뒤 distance 변수에 할당
    let head = queue.shift();
    let distance = distanceArr[head] + 1;

    for (let node of array) {
      // head와 edge로 연결된 노드를 아직 방문하지 않았을 경우, 해당 노드를 방문하고 거리 입력
      if (node[0] === head && !isVisited[node[1]]) {
        queue.push(node[1]);
        isVisited[node[1]] = true;
        distanceArr[node[1]] = distance;
      } else if (node[1] === head && !isVisited[node[0]]) {
        queue.push(node[0]);
        isVisited[node[0]] = true;
        distanceArr[node[0]] = distance;
      }
    }
  }

  // 1에서 거리가 최대인 노드의 개수를 리턴
  let maxDistance = Math.max(...distanceArr);
  let maxArr = distanceArr.filter((el) => el === maxDistance);
  return maxArr.length;
}

let answer = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);

let answer2 = solution(6, [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 1],
  [6, 3],
  [6, 4],
]);

console.log(answer);
console.log(answer2);
