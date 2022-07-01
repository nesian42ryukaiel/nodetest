// https://jacobgrowthstory.tistory.com/15
// example of stack

function browserStack(actions, start) {
  let prev = []; // prev 스택을 담을 배열
  let next = []; // next 스택을 담을 배열
  let cur = start; // 현재 페이지를 담을 문자열

  for (let action of actions) {
    // 앞으로 갈 경우
    if (action === 1 && next.length !== 0) {
      prev.push(cur);
      cur = next.pop();

      // 뒤로 갈 경우
    } else if (action === -1 && prev.length !== 0) {
      next.push(cur);
      cur = prev.pop();

      // 특정 페이지에 접속할 경우
    } else {
      prev.push(cur);
      cur = action;
      next = [];
    }
  }

  return [prev, cur, next];
}
