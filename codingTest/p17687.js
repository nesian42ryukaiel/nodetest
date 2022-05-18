function solution(n, t, m, p) {
  const answer = {
    value: "",
    full: "",
  };
  for (let i = 0; i < t * m; i++) {
    answer.full += i.toString(n).toUpperCase();
    if (i % m == p - 1) {
      answer.value += answer.full[i];
    }
    if (answer.value.length == t) break;
  }
  return answer.value;
}
