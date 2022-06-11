/**
 * 93.3 / 100.0
 */

// apparently the test case seems to be solution([0, 0, 0, 0]);
// the answer must be 0, not 0000...

function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    const tsa = a.toString();
    const tsb = b.toString();
    return parseInt(tsb + tsa, 10) - parseInt(tsa + tsb, 10);
  });
  if (numbers[0] === 0) return "0"; // said exception handled
  for (let num of numbers) {
    answer += num.toString();
  }
  return answer;
}

/**
 *  mostly failed one
 */

function serialize(number) {
  const answer = [];
  while (number > 0) {
    answer.push(number % 10);
    number = Math.floor(number / 10);
  }
  answer.reverse();
  while (answer.length < 4) {
    answer.push(Math.ceil(answer[answer.length - 1]) - 0.5);
  }
  return answer;
}
function solutionV1(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    const doSort = true;
    let count = 0;
    const sa = serialize(a);
    const sb = serialize(b);
    while (sa[count] === sb[count]) count++;
    if (count === 4) return 0;
    return Math.ceil(sb[count]) - Math.ceil(sa[count]);
  });
  for (let num of numbers) {
    answer += num.toString();
  }
  return answer;
}
