function solution(n) {
  let answer = 0;
  let i = 2;
  while ((n - 1) % i !== 0) {
    i++;
  }
  answer = i;
  return answer;
}
