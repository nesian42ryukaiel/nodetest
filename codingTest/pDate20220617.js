// 스파이

function solution_combination(clothes) {
  const answer = {
    value: 1,
  };
  const multLength = (value, key, map) => {
    return value.length;
  };
  const map = new Map();
  for (const cloth of clothes) {
    if (!map.has(cloth[1])) map.set(cloth[1], ["none"]);
    map.get(cloth[1]).push(cloth[0]);
  }
  console.log(map);
  map.forEach((value) => {
    answer.value *= value.length;
  });
  return answer.value - 1;
}

// 짝지어 제거하기
// s.charAt(i) is slower than s[i]

function solution_pair(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  answer = stack.length === 0 ? 1 : 0;
  return answer;
}
