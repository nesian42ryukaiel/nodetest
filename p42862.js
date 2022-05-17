function solution(n, lost, reserve) {
  const answer = {
    value: 0,
    check: {},
  };
  answer.value = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    answer.check[lost[i]] = false;
  }
  for (let i = 0; i < reserve.length; i++) {
    if (!lost.includes(reserve[i])) {
      if (lost.includes(reserve[i] - 1) && !answer.check[reserve[i] - 1]) {
        answer.check[reserve[i] - 1] = true;
        answer.value++;
      } else if (
        lost.includes(reserve[i] + 1) &&
        !answer.check[reserve[i] + 1]
      ) {
        answer.check[reserve[i] + 1] = true;
        answer.value++;
      } else {
        continue;
      }
    }
  }
  return answer.value;
}
