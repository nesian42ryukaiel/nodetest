// https://jacobgrowthstory.tistory.com/17
// example of queue

function paveBoxOne(boxes) {
  let head = ""; // queue의 0번 인덱스 값
  let last = ""; // queue에서 가장 최근에 나간 값
  let count = 0; // 한 번에 나가는 사람의 수
  let result = []; // 한 번에 나가는 사람의 수를 요소로 담을 배열

  while (boxes.length > 0) {
    // 전달인자 boxes가 queue에 해당됨

    // 한 번에 몇 명이 나갈 수 있는지 카운트 시작
    if (count === 0) {
      last = boxes.shift();
      head = boxes[0];
      count++;
    }

    // last보다 queue의 0번째 엘리먼트 값이 작으면 queue를 비우며 계속 카운팅
    else if (last >= head) {
      boxes.shift();
      head = boxes[0];
      count++;

      // queue의 길이가 0이 되면 while문이 종료되므로, count값을 보존하기 위해 push 해주기
      if (boxes.length === 0) {
        result.push(count);
        break;
      }
    }

    // last보다 queue의 0번째 엘리먼트 값이 크면 count를 초기화하고 다시 세기
    else {
      result.push(count);
      count = 0;
    }
  }
  return Math.max(...result); // spread 문법으로 엘리먼트의 최대값 구하기
}

function paveBoxTwo(boxes) {
  let result = [];

  // queue인 boxes 배열이 0보다 클 때까지 반복
  while (boxes.length > 0) {
    // findIndex 메소드를 사용해서 queue의 첫번째 요소보다 큰 엘리먼트의 인덱스 찾기
    let finishIndex = boxes.findIndex((fn) => boxes[0] < fn);

    // 인덱스를 찾지 못했다면 queue가 한 번에 나가야 하므로 result에 boxes 배열의 길이 push
    // while 반복문이 종료되도록 boxes의 엘리먼트를 모두 비우기
    if (finishIndex === -1) {
      result.push(boxes.length);
      boxes.splice(0, boxes.length);
    } else {
      // 인덱스를 찾았다면 그것을 result에 넣고, boxes에서는 그 인덱스의 앞까지 비워주기
      result.push(finishIndex);
      boxes.splice(0, finishIndex);
    }
  }

  return Math.max(...result); // spread 문법으로 엘리먼트의 최대값 구하기
}
