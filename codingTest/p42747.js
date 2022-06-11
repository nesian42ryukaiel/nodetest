/**
 * H-Index
 */

function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b).reverse();
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      answer = i + 1;
    } else {
      break;
    }
  }
  return answer;
}
